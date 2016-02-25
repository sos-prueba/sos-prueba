/*var contacts=[
			{ name: "pablo", phone: "123456789"},
			{ name: "alberto", phone: "987654321"}
			];
*/
//Cargar el módulo
var express=require("express");
var fs=require("fs");
var contacts=[];
var app=express();

app.get("/about/spain-births",(req,res)=>{
	res.send('<html><body>It will display data from spanish births, by regions and years,</ br> making difference between men and women, showing in the last column the total number.</html></body>');
});
app.listen(process.env.PORT);

//Leer de forma síncrona
//var data=fs.readFileSync('contacts.json','utf8');
//console.log(data);

//Leer de forma asíncrona
/*fs.readFile('contacts.json','utf8',(err,data) => {
	var contacts=JSON.parse(data);
	console.log("Contacts:");

	contacts.forEach((contact) =>{
		console.log(" - "+contact.name+" ("+contact.phone+")");
	});

	console.log("---------------");
});*/

//Parsea los datos
//var contacts=JSON.parse(data);

//Bucle for que hace la misma función
/*
for(var i=0;i<contacts.length;i++){
	var contact=contacts[i];
	imprimeContacto(contact);
}
console.log("---------------");
*/
/*function imprimeContacto(contact){
	console.log(i+1+".- "+contact.name+" ("+contact.phone+")");
}*/

/*---------------------------------------------------*/
//Llama a la función e itera sin bucle
//contacts.forEach(imprimeContacto);


/*---------------------------------------------------*/
//Función lambda (llamada dentro de la declaración de la función)
/*contacts.forEach(function(contact){
	console.log(i+1+".- "+contact.name+" ("+contact.phone+")");
});*/


/*---------------------------------------------------*/
//Misma función lambda, pero sin declararlo como función
/*contacts.forEach((contact) =>{
	console.log(" - "+contact.name+" ("+contact.phone+")");
});*/