const bCrypt = require('bcrypt-nodejs');
module.exports = function (passport, user) {
    const User = user;
    const LocalStrategy = require('passport-local').Strategy;

    // serialize
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    // deserialize user
    passport.deserializeUser(function (id, done) {
        User.findByPk(id).then(function (user) {
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
        });
    });
    passport.use('local-signup', new LocalStrategy(
        {
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
        function (req, username, password, done) {
            const generateHash = function (password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(12), null);
            };
            User.findOne({
                where: {
                    username: username
                }
            }).then(function (user) {
                if (user) {
                    return done(null, false, {
                        message: 'That username is already taken'
                    });
                } else {
                    const userPassword = generateHash(password);
                    const data = {
                        username: username,
                        password: userPassword
                    };
                    User.create(data).then(function (newUser, created) {
                        if (!newUser) {
                            return done(null, false, {
                                message: 'Error while creating user'
                            });
                        }
                        if (newUser) {
                            return done(null, newUser);
                        }
                    });
                }
            });
        }
    ));
    passport.use('local-signin', new LocalStrategy(
        {
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
        function (req, username, password, done) {
            const User = user;
            const isValidPassword = function (userpass, password) {
                return bCrypt.compareSync(password, userpass);
            };
            User.findOne({
                where: {
                    username: username
                }
            }).then(function (user) {
                if (!user) {
                    return done(null, false, {
                        message: 'Username does not exist'
                    });
                }
                if (!isValidPassword(user.password, password)) {
                    return done(null, false, {
                        message: 'Incorrect password.'
                    });
                }
                const userinfo = user.get();
                return done(null, userinfo);
            }).catch(function (err) {
                console.log('Error:', err);
                return done(null, false, {
                    message: 'Something went wrong with your Signin'
                });
            });
        }
    ));
};
