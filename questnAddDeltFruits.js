// Add the Edit Button:
const form = document.querySelector("form");
const fruits = document.querySelector(".fruits");

const fruitItems = document.getElementsByClassName("fruit");






for(let i=0;i<fruitItems.length;i++)
  {
    
    const newbtn = document.createElement("button");
    const newbtnText = document.createTextNode("Edit");
    newbtn.appendChild(newbtnText);
    newbtn.className="edit-btn";
   // console.log(newbtn);
    const btns =fruitItems[i];
    btns.appendChild(newbtn);
  }


form.addEventListener('submit',function(event){
  event.preventDefault();
 const fruitToAdd = document.getElementById("fruit-to-add");

  const newli = document.createElement('li');
  newli.innerHTML = fruitToAdd.value 
    +'<button class="delete-btn">x</button>'
  +'<button class="edit-btn">Edit</button>';

  console.log(newli);
  fruits.appendChild(newli);
});

fruits.addEventListener('click',function(event){
  if(event.target.classList.contains("delete-btn"))
    {
      const fruitToDelt = event.target.parentElement;
      fruits.removeChild(fruitToDelt);
    };
});
// Implement the code as in video but with one extra 'Edit' button in 'li'