
console.log("Hello World!");

var nombre="Alberto";
console.log("Hola "+nombre+"!");


//para detectar la hora
var today=new Date();
var hours=today.getHours();
if(hours>12){
	console.log("Good afternoon "+nombre+"!");
}else{
	console.log("Good morning "+nombre+"!");
}