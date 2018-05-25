var mongoose = require("mongoose");
var Tool = require("./models/tool");

var data = [
	{name: "Foco Led", toolImage: "https://cdn.sparkfun.com//assets/parts/3/3/8/0/09590-01.jpg", cantidad: 10, categories: ["Diodos"]},
	{name: "Martillo", toolImage: "https://ferreteriavidri.com/images/items/large/9781.jpg", cantidad: 3, categories: ["Herramientas"]},
	{name: "Condensador", toolImage: "http://www.teslaelectronics.cl/518-large_default/condensador-electrolitico.jpg", cantidad: 12, categories: ["Capacitores"]},
	{name: "Arduino", toolImage: "http://cdn-tienda.bricogeek.com/1157-thickbox_default/arduino-uno.jpg", cantidad: 0, categories: ["Herramientas"]},
	{name: "Cargador", toolImage: "https://images-na.ssl-images-amazon.com/images/I/61j%2B0A3cxBL._SL1500_.jpg", cantidad: 4, categories: ["Transistores"]}
];

function seedDB() {
	Tool.remove({})
	.exec()
	.then( toolRemoves => {
		data.forEach( seed => {
			Tool.create(seed)
			.then(newTool => console.log(newTool))
			.catch(err => console.log(err))
		});
	})
	.catch(err => console.log(err))
}

module.exports = seedDB;