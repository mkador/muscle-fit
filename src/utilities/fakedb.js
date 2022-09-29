// use local storage to manage cart data
const addToDbBreakTimes = (times,key) =>{
    let breakTimes= 0;

    //get the shopping cart from local storage
    const storedTimes = localStorage.getItem(key);
    if(storedTimes){
        breakTimes = JSON.parse(storedTimes);
        breakTimes =times; 
    }
    else{
        breakTimes =times;
    }
    localStorage.setItem(key, JSON.stringify(breakTimes));
}
const addToDb = (times,key) =>{
    let exerciseTimes= 0;

    //get the shopping cart from local storage
    const storedTimes = localStorage.getItem(key);
    if(storedTimes){
        exerciseTimes = JSON.parse(storedTimes);
        exerciseTimes +=times; 
    }
    else{
        exerciseTimes +=times;
    }
    localStorage.setItem(key, JSON.stringify(exerciseTimes));
}

const getStoredTimes =(key)=>{
    let exerciseTimes = 0;

    //get the shopping cart from local storage
    const storedTimes = localStorage.getItem(key);
    if(storedTimes){
        exerciseTimes = JSON.parse(storedTimes);
    }
    return exerciseTimes;
}

export {
    addToDb, 
    getStoredTimes,
    addToDbBreakTimes
    
    
}