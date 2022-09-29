// use local storage to manage cart data
const addToDb = times =>{
    let exerciseTimes= 0;

    //get the shopping cart from local storage
    const storedTimes = localStorage.getItem('exercise-times');
    if(storedTimes){
        exerciseTimes = JSON.parse(storedTimes);
        exerciseTimes +=times; 
    }
    else{
        exerciseTimes +=times;
    }

    // // add quantity
    // const times = exerciseTimes[id];
    // if(times){
    //     const newTimes = times + 1;
    //     exerciseTimes[id] = newTimes;
    // }
    // else{
    //     exerciseTimes[id] = 1;
    // }
    localStorage.setItem('exercise-times', JSON.stringify(exerciseTimes));
}

const getStoredTimes =()=>{
    let exerciseTimes = 0;

    //get the shopping cart from local storage
    const storedTimes = localStorage.getItem('exercise-times');
    if(storedTimes){
        exerciseTimes = JSON.parse(storedTimes);
    }
    return exerciseTimes;
}

// const removeFromDb = id =>{
//     const storedCart = localStorage.getItem('shopping-cart');
//     if(storedCart){
//         const shoppingCart = JSON.parse(storedCart);
//         if(id in shoppingCart){
//             delete shoppingCart[id];
//             localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
//         }
//     }
// }

// const deleteShoppingCart = () =>{
//     localStorage.removeItem('shopping-cart');
// }

export {
    addToDb, 
    getStoredTimes,
    // removeFromDb,
    // deleteShoppingCart,
    
}