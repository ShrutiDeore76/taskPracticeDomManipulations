async function handleFormSubmit(event) {
    try {
      event.preventDefault();
      const groceries = {
        itemName: event.target.itemName.value,
        description: event.target.description.value,
        price: event.target.price.value,
        quantity: event.target.quantity.value,
      };
      const response = await axios.post(
        "https://crudcrud.com/api/08326b6596824e158485bc25ce6c648d/groceryData",
        groceries
      );
      displayGroceryOnScreen(response.data);
  
      // Clearing the input fields
      document.getElementById("itemName").value = "";
      document.getElementById("description").value = "";
      document.getElementById("price").value = "";
      document.getElementById("quantity").value = "";
    } catch (error) {
      console.log(error);
    }
  }
  
  function displayGroceryOnScreen(groceries) {
    const groceryItem = document.createElement("li");
    groceryItem.appendChild(
      document.createTextNode(
        `${groceries.itemName} - ${groceries.description} - ${groceries.price} Rs - ${groceries.quantity}`
      )
    );
  
    const buy1Btn = document.createElement("button");
    buy1Btn.appendChild(document.createTextNode("Buy 1"));
    groceryItem.appendChild(buy1Btn);
  
    const buy2Btn = document.createElement("button");
    buy2Btn.appendChild(document.createTextNode("Buy 2"));
    groceryItem.appendChild(buy2Btn);
  
    const buy3Btn = document.createElement("button");
    buy3Btn.appendChild(document.createTextNode("Buy 3"));
    groceryItem.appendChild(buy3Btn);
  
    const groceriesList = document.querySelector("ul");
    groceriesList.appendChild(groceryItem);
  
    buy1Btn.addEventListener("click", function (event) {
      
        groceriesList.removeChild(event.target.parentElement);
        let groceryIdToUpdate = groceries._id;
  
        let updatedGroceryIem = {
          itemName: groceries.itemName,
          description: groceries.description,
          price: groceries.price,
          quantity: groceries.quantity - 1,
        };
        updateGroceryItem(updatedGroceryIem, groceryIdToUpdate);
    });
  
    buy2Btn.addEventListener("click", function (event) {
      
        groceriesList.removeChild(event.target.parentElement);
        let groceryIdToUpdate = groceries._id;
  
        let updatedGroceryIem = {
          itemName: groceries.itemName,
          description: groceries.description,
          price: groceries.price,
          quantity: groceries.quantity - 2,
        };

        updateGroceryItem(updatedGroceryIem, groceryIdToUpdate);
  
    });
  
    buy3Btn.addEventListener("click", function (event) {
     
        groceriesList.removeChild(event.target.parentElement);
        let groceryIdToUpdate = groceries._id;
  
        let updatedGroceryIem = {
          itemName: groceries.itemName,
          description: groceries.description,
          price: groceries.price,
          quantity: groceries.quantity - 3,
        };
  
         updateGroceryItem(updatedGroceryIem, groceryIdToUpdate);
    });

  }
  
  async function updateGroceryItem(updatedGroceryIem, id) {
    try {
      let groceryIdToUpdate = id;
  
      await axios.put(
        `https://crudcrud.com/api/08326b6596824e158485bc25ce6c648d/groceryData/${groceryIdToUpdate}`,
        updatedGroceryIem
      );

      let response = await axios.get(
        `https://crudcrud.com/api/08326b6596824e158485bc25ce6c648d/groceryData/${groceryIdToUpdate}`
      );

      displayGroceryOnScreen(response.data);

     // console.log(response2.data);
    } catch (error) {
      console.error(error);
    }
  }
  
  window.addEventListener("DOMContentLoaded", async () => {
    try {
      const response = await axios.get("https://crudcrud.com/api/08326b6596824e158485bc25ce6c648d/groceryData");

      for (let i = 0; i < response.data.length; i++) {
        displayGroceryOnScreen(response.data[i]);
      }
    } catch (error) {
      console.log(error);
    }
  });
  