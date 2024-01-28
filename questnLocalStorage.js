// Write your code below:
const form = document.querySelector("form");

/* 1st way to do it 
function handleFormSubmit(event)
  {
    event.preventDefault();
    const userName = document.getElementById('user-name').value;
    const userEmail = document.getElementById('user-email').value;
    const userPhoneNumbr = document.getElementById('user-phone').value;
    //console.log(userName);
    //console.log(userEmail);
    //console.log(userPhoneNumbr);

    localStorage.setItem('userName',userName);
    localStorage.setItem('userEmail',userEmail);
    localStorage.setItem('userPhoneNumbr',userPhoneNumbr);
  };*/

//module.exports = handleFormSubmit;



//2nd way to do which worked in sharpener compiler
form.addEventListener('submit',function handleFormSubmit(event){

    event.preventDefault();
    const userName = document.getElementById('user-name').value;
    const userEmail = document.getElementById('user-email').value;
    const userPhoneNumbr = document.getElementById('user-phone').value;
    //console.log(userName);
    //console.log(userEmail);
    //console.log(userPhoneNumbr);

    localStorage.setItem('userName',userName);
    localStorage.setItem('userEmail',userEmail);
    localStorage.setItem('userPhoneNumbr',userPhoneNumbr);

});

module.exports = handleFormSubmit;

