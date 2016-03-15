var express = require("express");
var bodyParser = require("body-parser");
var fs=require("fs");
var app = express();

app.use(bodyParser.json());

var phrases=[];

//Métodos Alberto
//Métodos GET
//Devuelve un recurso individual
app.get("/api/sandbox/sentences/:name",(req,res)=>{
    var name = req.params.name;
    var sentence = [];
    console.log("New GET of resource "+name);
    for(i=0;i<phrases.length;i++){
      	if(phrases[i].name == name){
        	sentence.push(phrases[i]);
        	break;
      	}
    }
    if(sentence.length!=0){
        res.send(sentence);
    }else{
    	 res.sendStatus(404);
    }
    
});

//Devuelve la lista de recursos
app.get("/api/sandbox/sentences",(req,res)=>{
  res.send(phrases);
});

app.use('/',express.static(__dirname + '/public'));

//Recurso con método que crea 2 equipos en la lista
app.get("/api-test/sentences/loadInitialData",(req,res)=>{
  phrases=[];
  fs.readFile('sentences.json','utf8',(err,content) => {
    sentences=JSON.parse(content);
    sentences.forEach((sentence) =>{
      phrases.push(sentence);
    });
  });
  res.sendStatus(200);
});

//Métodos POST
//Método que añade un nuevo equipo
app.post("/api/sandbox/sentences",(req,res)=>{
  var sentence=req.body;
	phrases.push(sentence);
  res.sendStatus(200);
});

//Método inválido
app.post("/api/sandbox/sentences/:name",(req,res)=>{
	res.sendStatus(405);
});

//Métodos DELETE
//Borra toda la lista
app.delete("/api/sandbox/sentences",(req,res)=>{
	console.log("New DELETE of resources");
	phrases=[];
	res.sendStatus(200);
});

//Borra un recurso individual
app.delete("/api/sandbox/sentences/:name",(req,res)=>{
	var name=req.params.name;
	var cont=0;
    for(i=0;i<phrases.length;i++){
      	if(phrases[i].name == name){
        	phrases.splice(i);
        	cont=1;
        }
    }
    if(cont==1){
    	 res.sendStatus(200);
    }else{
    	 res.sendStatus(404);
    }
});

//Métodos PUT
//Método inválido
app.put("/api/sandbox/sentences/",(req,res)=>{
	res.sendStatus(405);
});

//Actualiza un elemento de array o en su caso devuelve 404
app.put("/api/sandbox/sentences/:name",(req,res)=>{
    var name = req.params.name;
    var nameUpdated = req.body;
    var cont = 0;
    for(i=0;i<phrases.length;i++){
      	if(phrases[i].name == name){
        	phrases[i]=nameUpdated;
        	cont=1;
        	break;
      	}
    }
	if(cont==1){
		res.sendStatus(200);
	}else{
		res.sendStatus(404);
	}
});

app.listen(process.env.PORT || 10000);
