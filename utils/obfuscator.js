/**
 * Created by Pablo on 08 Jul 17.
 */

const fs = require("fs");
const url = require("url");
const path = require("path");

const compile = require('google-closure-compiler-js');
const obfuscator = require('javascript-obfuscator');

module.exports = (options) => {

    if(!options.hasOwnProperty("src"))
        throw  new Error("express-middleware-obfuscator requires a 'src' directory");

    const version = options.hasOwnProperty("version") ? options.version : Date.now();
    const src = options.src;
    const console_enabled = options.hasOwnProperty("console_enabled") ? options.console_enabled : true;

    return (req, res, next) => {
        const pathname = url.parse(req.url).pathname;

        if(pathname.match(/\.js$/) && !pathname.match(/\.min\.js$/)){
            fs.readFile(path.join(src, pathname), (error, data) => {
                if(error){
                    next();
                    return;
                }
                const pathname_path = path.parse(pathname);
                const cache_path = path.join(src, pathname_path.dir, '.cache');
                fs.exists(cache_path, exists => {
                    if(!exists){
                        fs.mkdirSync(cache_path);
                    }
                    const cache_path_data = path.join(cache_path, `${version}-${pathname_path.base.replace('.js', '.obf.js')}`);
                    fs.readFile(cache_path_data, (error, cache_file) => {
                        let file_data = cache_file;
                        if(error){
                            if(console_enabled)
                                console.info(`Compressing ${pathname}`);
                            const out = compile({
                                jsCode: [{src: data.toString()}],
                                compilationLevel: 'ADVANCED'
                            });

                            const obf = obfuscator.obfuscate(out.compiledCode, {
                                disableConsoleOutput: true,
                                debugProtection: true,
                                seed: parseInt(Math.random())
                            });

                            file_data = obf.getObfuscatedCode();

                            fs.writeFile(cache_path_data, file_data, 'utf8', error => { if(error) console.error(error); });

                        }

                        res.setHeader('Content-Type', 'text/javascript');
                        res.send(file_data);

                    });
                });

            });

            return;
        }
        next();
    };

};
