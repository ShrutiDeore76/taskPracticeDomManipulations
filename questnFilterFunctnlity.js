// Add input element inside form, before button, to take fruit description
const newInputElemnt = document.createElement("input");
newInputElemnt.id = "fruitsDescrptn";
newInputElemnt.setAttribute('type','text');
console.log(newInputElemnt);

const getFormElemnt = document.getElementsByTagName("form");
const btns = document.getElementsByTagName("button");

//console.log(btn);
//const firstButton = btns[0];
//console.log(firstButton);
const newDiv = document.createElement("div"); 
newDiv.appendChild(newInputElemnt);
//btn.appendChild(div) ;
getFormElemnt.appendChild(newDiv);

 //F
//const parent = document.getElementById("form");
//const btn = document.getElementById("form-button");
//const div = document.createElement("div"); 
//div.appendChild(newElemnt);
//btn.appendChild(div) ;









const filter = document.getElementById("filter");

filter.addEventListener('keyup',function(event){

    //event.preventDefault();
    const filterText = event.target.value.toLowerCase();
    const fruits = document.getElementsByClassName("fruit");
    for(let i=0;i<fruits.length;i++)
    {
        const currentFruitText = fruits[i].firstChild.textContent.toLowerCase();
        if(currentFruitText.indexOf(filterText) == -1)
        {
            fruits[i].style.display = "none";
        }
        else{
            fruits[i].style.display = "flex";
        }
    }


});