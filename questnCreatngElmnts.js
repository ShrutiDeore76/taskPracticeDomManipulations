//creating the  new element tag h3
const subheading = document.createElement("h3");


//creating the text inside the tag h3
const subHeadText = document.createTextNode("Buy high quality organic fruits online");

//appending the text to the tag created
subheading.appendChild(subHeadText);

//now to make this new element h3 tag a part of document
//first select where you want to add 
const divs = document.getElementsByTagName('div');
const firstDiv = divs[0];
firstDiv.appendChild(subheading);
subheading.setAttribute("style", "font-style:italic;");

//console.log(subheading);

const para = document.createElement("p");

const paraText = document.createTextNode("Total fruits: 4");

para.appendChild(paraText);
const secondDiv = divs[1];
const fruits = document.querySelector(".fruits");
secondDiv.insertBefore(para,fruits);

para.id = "fruits-total";


