const basketHeading = document.querySelector('#basket-heading');
basketHeading.style.color = "brown";
basketHeading.style.marginLeft = "30px";

const mainHeading = document.querySelector('#main-heading');
mainHeading.style.textAlign = "right";

const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = "grey";
fruits.style.padding = "30px";
fruits.style.margin = "30px";
fruits.style.width = "50%";
fruits.style.borderRadius = "5px";
fruits.style.listStyle = "none";


const evenFruitItems = document.querySelectorAll('.fruit:nth-child(even)');

for(let i=0;i<evenFruitItems.length;i++)
  {
    evenFruitItems[i].style.backgroundColor = "brown";
    evenFruitItems[i].style.color = "white";
  }

const oddfruitItems = document.querySelectorAll('.fruit:nth-child(odd)');

for(let i=0;i<oddfruitItems.length;i++)
  {
    oddfruitItems[i].style.backgroundColor = "lightgray";
  }

const fruitItems = document.querySelectorAll('.fruit');
for(let i=0;i<fruitItems.length;i++)
  {
    fruitItems[i].style.padding = "10px";
    fruitItems[i].style.margin = "10px";
    fruitItems[i].style.borderRadius = "5px";
  }


