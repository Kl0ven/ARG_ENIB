const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.PGDATABASE, process.env.PGUSER, process.env.PGPASSWORD, {
	host: process.env.PGHOST,
	dialect: 'postgres',
	operatorsAliases: false
});


const Enigma = sequelize.define('enigma', {
	name: Sequelize.STRING,
	enigma_text: Sequelize.STRING,
	url: Sequelize.STRING,
	type: Sequelize.ENUM('GEO', 'FLAG') ,
	latA: Sequelize.FLOAT,
	longA: Sequelize.FLOAT,
	latB: Sequelize.FLOAT,
	longB: Sequelize.FLOAT,
	flag: Sequelize.STRING
});

Enigma.hasOne(Enigma, {as: 'Next'})


const data = [
{ name: 'test1',
enigma_text: "enigma_text_test1",
url: 'coucou',
type: 'GEO' ,
latA: 1.23,
longA: 1.23,
latB: 1.25,
longB: 1.58,
flag: null
},
{ name: 'test2',
enigma_text: "enigma_text_test2",
url: 'coucou',
type: 'FLAG' ,
latA: null,
longA: null,
latB: null,
longB: null,
flag: 'dcjaecvpajenfvpm'
},
{ name: 'test3',
enigma_text: "enigma_text_test3",
url: 'coucou',
type: 'FLAG' ,
latA: null,
longA: null,
latB: null,
longB: null,
flag: 'dcjaecvpajenfvpm'
},
{ name: 'test4',
enigma_text: "enigma_text_test4",
url: 'coucou',
type: 'GEO' ,
latA: 1.255,
longA: 1.2564,
latB: 2.355,
longB: 2.654,
flag: null
}
]

obj= []
for (var i = 0; i < data.length; i++) {
	obj.push(Enigma.build(data[i]))
}



sequelize.sync({force:true}).then(function() {
	let promise = []
	for (var i = 0; i < obj.length; i++) {
		promise.push(obj[i].save())
	}


	Promise.all(promise).then(function() {
		console.log("c'est good")
		promise = []

		for (var i = obj.length-1; i >=0 ; i--) {
			promise.push(obj[i].setNext(obj[i-1]))
		}
		Promise.all(promise).then(function() {
			display().then(()=>{
				sequelize.close()
			}).catch(error => {
		console.log(error)
		sequelize.close()
	})
		}).catch(error => {
		console.log(error)
		sequelize.close()
	});
	}).catch(error => {
		console.log(error)
		sequelize.close()
	})
})

function display(){

	return Enigma.findAll().then(data=>{
		for (var e in data){
		console.log(data[e].dataValues)
		}
	})
}