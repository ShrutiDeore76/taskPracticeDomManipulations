console.log('person1 shows ticket');
console.log('person2 shows ticket');



  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });

  const getPopcorn =  person3PromiseToShowTicketWhenWifeArrives.then( (ticket) => {
    console.log(`Wife : got the ${ticket}`);
    console.log(`Husband:we should go in now`);
    console.log(`Wife: "i am hungry"`);
		
        return new Promise( (resolve,reject) => resolve('popcorn') );
  });
  
  const addButter =  getPopcorn.then( (popcorn) => {
    console.log(`Husband: here is ${popcorn}`);
    console.log(`Husband:we should go in now`);
    console.log(`Wife: "I dont like popcorn without butter!"`);

    return new Promise( (resolve,reject) => resolve('butter') );
  });

  const getColdDrinks = addButter.then( (butter)=>{
    console.log(`added ${butter}`);
    console.log(`Husband:Anything else darling`);
    console.log(`Wife: I want some cold drink too`);

    return new Promise( (resolve,reject) => resolve('Cold Drinks') );

  })

  getColdDrinks.then( (colddrinks) =>{
  console.log(`Husband: got some ${colddrinks}`);
  console.log(`Husband:Anything else darling`);
  console.log(`Wife: lets go we are going to miss the preivew`);
  console.log(`Husband: thanks for the reminder *grin*`);

  } );

console.log('person4 shows ticket');
console.log('person5 shows ticket');