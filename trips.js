//create an array that holds an object containing trip info
var trips = [
{
	"name":"Moon",
	"description": "take a trip to the moon",
	"price": "$250,000",
	"URL": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQYYR2f2yQXQZmqMirjEHyNaCDqwEPTO2oHi6fGon3zwq5t3V5OUg"
},
{
	"name":"Moon",
	"description": "take a trip to the moon",
	"price": "$250,000",
	"URL": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQYYR2f2yQXQZmqMirjEHyNaCDqwEPTO2oHi6fGon3zwq5t3V5OUg"
},
{
	"name":"Moon",
	"description": "take a trip to the moon",
	"price": "$250,000",
	"URL": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQYYR2f2yQXQZmqMirjEHyNaCDqwEPTO2oHi6fGon3zwq5t3V5OUg"
},
{
	"name":"Moon",
	"description": "take a trip to the moon",
	"price": "$250,000",
	"URL": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQYYR2f2yQXQZmqMirjEHyNaCDqwEPTO2oHi6fGon3zwq5t3V5OUg"
},
{
	"name":"Moon",
	"description": "take a trip to the moon",
	"price": "$250,000",
	"URL": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQYYR2f2yQXQZmqMirjEHyNaCDqwEPTO2oHi6fGon3zwq5t3V5OUg"
},
{
	"name":"Moon",
	"description": "take a trip to the moon",
	"price": "$250,000",
	"URL": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQYYR2f2yQXQZmqMirjEHyNaCDqwEPTO2oHi6fGon3zwq5t3V5OUg"
},
{
	"name":"Moon",
	"description": "take a trip to the moon",
	"price": "$250,000",
	"URL": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQYYR2f2yQXQZmqMirjEHyNaCDqwEPTO2oHi6fGon3zwq5t3V5OUg"
},
{
	"name":"Moon",
	"description": "take a trip to the moon",
	"price": "$250,000",
	"URL": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQYYR2f2yQXQZmqMirjEHyNaCDqwEPTO2oHi6fGon3zwq5t3V5OUg"
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
		+"<div class='section3'><section><input type='date' name='dates' min='2016-08-05' max='2016-08-31'/></section>"
		+"<button type='button'>Book Trip</button></div>";

	
	}
	mainContent.appendChild(article);
	
}