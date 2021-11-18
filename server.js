let express = require("express");
let app = express();
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

let cats = [
  {name: "Mitsy", age: 3, spots:['Sofa', 'Under the bed', 'My lap'], image:'/images/cat1.jpg'}, 
  {name: "Petey", age: 3, spots:['Sofa', 'Under the bed', 'My lap'],image:'/images/cat2.jpg'}, 
  {name: "Grrrumpy", age: 3, spots:['Sofa', 'Under the bed', 'My lap'],image:'/images/cat3.jpg'} 
];

app.get("/cars", function (request, response){
  response.render('cars');
})
app.get("/cars/new", function (request, response){
  response.render('form');
})
app.get("/cats", function (request, response){
  response.render('cats');
})

app.get("/cat1", function (request, response){
  
  response.render('catInfo', {cat: cats[0]});
})
app.get("/cat2", function (request, response){
  
  response.render('catInfo', {cat: cats[0]});
})
app.get("/cat3", function (request, response){
  
  response.render('catInfo', {cat: cats[0]});
})

app.listen(8000, function() {
    console.log("listening on port 8000");
  })