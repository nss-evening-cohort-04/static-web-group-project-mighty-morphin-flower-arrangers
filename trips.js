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

for (var i = 0; i < trips.length; i++){

	for(var trip in trips){
		var article = document.createElement("article")
		var id = document.createAttribute("id");
		id.value= "card";
		article.setAttributeNode(id);
		article.innerHTML=



		//test run of inserting content from array objects into dom
		/*"<div style='color:#ccc;'>"+trips[i].name+"</div>"
		+"<div style='color:#ccc;'>"+trips[i].description+"</div>"
		+"<div style='color:#ccc;'>"+trips[i].price+"</div>"
		+"<img style='width: 100px; height: 100px;' src='"+trips[i].URL+"'/>";*/
	
	}
	mainContent.appendChild(article);
	
}