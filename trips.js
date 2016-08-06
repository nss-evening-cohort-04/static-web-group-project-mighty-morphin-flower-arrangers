//create an array that holds an object containing trip info
var trips = [
{
	"name":"Fhloston",
	"description": "Winter trip to Fhloston Paradise",
	"price": "$250,000",
	"date": "January 1, 2017",
	"URL": "img/moon.jpg"
},
{
	"name":"Gallifrey",
	"description": "Winter trip to Gallifrey",
	"price": "$250,000",
	"date": "December 1, 2017",
	"URL": "img/Gallifrey.jpg"
},
{
	"name":"Fhloston",
	"description": "Spring trip to Fhloston Paradise",
	"price": "$250,000",
	"date": "April 1, 2017",
	"URL": "img/moon.jpg"
},
{
	"name":"Gallifrey",
	"description": "Spring trip to Gallifrey",
	"price": "$250,000",
	"date": "March 1, 2017",
	"URL": "img/Gallifrey.jpg"
},
{
	"name":"Gallifrey",
	"description": "Summer trip to Gallifrey",
	"price": "$250,000",
	"date": "July 1, 2017",
	"URL": "img/Gallifrey.jpg"
},
{
	"name":"Fhloston",
	"description": "Summer trip to Fhloston ",
	"price": "$250,000",
	"date": "June 1, 2017",
	"URL": "img/moon.jpg"
},
{
	"name":"Fholston",
	"description": "Autumn trip to Fhloston ",
	"price": "$250,000",
	"date": "October 1, 2017",
	"URL": "img/moon.jpg"
},
{
	"name":"Gallifrey",
	"description": "Autumn trip to Gallifrey",
	"price": "$250,000",
	"date": "September 1, 2017",
	"URL": "img/Gallifrey.jpg"
}
];

//Algorythm
//store elements that will have data inserted(innerHTML) in variables
var mainContent = document.getElementById("wrapper");
//create document fragment
var docFrag = document.createDocumentFragment();

//create an article element that will act as a card for each trip object
//Document.createElement() then insert into docFrag.appendChild(article);


//would like to put below logic in a function
for (var i = 0; i < trips.length; i++){

	for(var trip in trips){
		var article = document.createElement("article")
		var id = document.createAttribute("id");
		id.value= "card";
		article.setAttributeNode(id);
		article.innerHTML="<div class='section1'><h3>"+trips[i].description+"</h3>"
		+"<section><img class='image' alt='moon' align='middle' src='"+trips[i].URL+"'/></div>"
		+"<div class='section2'><section><p class='price'>"+trips[i].price+"</p></section></div>"
		+"<div class='section3'><section><p class='date'>"+trips[i].date+"</p></section>"
		+"<button type='button'>Book Trip</button></div>";

	
	}
	mainContent.appendChild(article);
	
}