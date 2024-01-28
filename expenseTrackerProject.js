function handleFormSubmit(event){
    event.preventDefault();

      const expenseAmount = event.target.expenseAmount.value;
      const description = event.target.description.value;
      const category = event.target.category.value;
      
      const UserDetails ={
          expenseAmount,
          description,
          category
      }

      localStorage.setItem(UserDetails.description,JSON.stringify(UserDetails));

      //show user on screen
      const parentElement = document.getElementById('userExpenses');
      //creating li
      const newChildLi = document.createElement('li');
      const text = UserDetails.expenseAmount+"-"
                  +UserDetails.category+"-"
                  +UserDetails.description;
      const newLiText = document.createTextNode(text);
      newChildLi.appendChild(newLiText);

      //adding the delt button
      const deltButton = document.createElement('input');
      deltButton.type='button';
      deltButton.value='Delete';
      deltButton.style.marginLeft="5px";
      deltButton.style.backgroundColor="pink";
      deltButton.style.borderRadius="5";
      deltButton.onclick = () => {

          localStorage.removeItem(UserDetails.description);
          parentElement.removeChild(newChildLi);
      }

      //adding the edit button
      const editButton = document.createElement('input');
      editButton.type='button';
      editButton.value='Edit';
      editButton.style.marginLeft="5px";
      editButton.style.backgroundColor="pink";
      editButton.style.borderRadius="5";
      editButton.onclick = () => {

          const targetValues = newChildLi.textContent.split("-");
          document.getElementById('expenseAmount').value=targetValues[0];
          document.getElementById('description').value=targetValues[2];
          document.getElementById('category').value=targetValues[1];
        
          localStorage.removeItem(UserDetails.description);
          parentElement.removeChild(newChildLi);

      }

      newChildLi.appendChild(deltButton);
      newChildLi.appendChild(editButton);
      parentElement.appendChild(newChildLi);

  }

 // or window.onload = function ()
  function handlePageRefresh()
  {
      Object.keys(localStorage).forEach(key => {
      //console.log(`${key} - ${localStorage.getItem(key)}`);
      let tempOBJ =  JSON.parse(localStorage.getItem(key));
        
      //show user on screen
      const parentElement = document.getElementById('userExpenses');
      //creating li
      const newChildLi = document.createElement('li');
      const text = tempOBJ.expenseAmount+"-"
                  +tempOBJ.category+"-"
                  +tempOBJ.description;
      const newLiText = document.createTextNode(text);
      newChildLi.appendChild(newLiText);

      //adding the delt button
      const deltButton = document.createElement('input');
      deltButton.type='button';
      deltButton.value='Delete';
      deltButton.style.marginLeft="5px";
      deltButton.style.backgroundColor="pink";
      deltButton.style.borderRadius="5";
      deltButton.onclick = () => {

          localStorage.removeItem(tempOBJ.description);
          parentElement.removeChild(newChildLi);
      }

      //adding the edit button
      const editButton = document.createElement('input');
      editButton.type='button';
      editButton.value='Edit';
      editButton.style.marginLeft="5px";
      editButton.style.backgroundColor="pink";
      editButton.style.borderRadius="5";
      editButton.onclick = () => {

          const targetValues = newChildLi.textContent.split("-");
          document.getElementById('expenseAmount').value=targetValues[0];
          document.getElementById('description').value=targetValues[2];
          document.getElementById('category').value=targetValues[1];

          localStorage.removeItem(tempOBJ.description);
          parentElement.removeChild(newChildLi);

      }

      newChildLi.appendChild(deltButton);
      newChildLi.appendChild(editButton);
      parentElement.appendChild(newChildLi);

       });  
  }

//  module.exports = handleFormSubmit;