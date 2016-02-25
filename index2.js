//cabecera
//cada contacto en una línea
//pie
var express=require("express");
var fs=require("fs");
var contacts=[];
var app=express();


app.get('/about',(req,res) => {
	fs.readFile('contacts.json','utf8',(err,content) => {
		console.log("Data read");
		contacts=JSON.parse(content);
		res.write("<html><body>Contacts:<ul>");

		contacts.forEach((contact) =>{
			res.write("<li>"+contact.name+" ("+contact.phone+")</li>");
		});
		res.write("</ul>---------------</body></html>");
		res.end();
	});
});
app.listen(process.env.PORT);*/