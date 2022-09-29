import React, { useEffect, useState } from 'react';
import ActivitiesItems from '../Activities-Items/ActivitiesItems';
import TimeCalculate from './TimeCalculate/TimeCalculate';
import {addToDb,getStoredTimes} from '../../utilities/fakedb';


const Activities = () => {
    const [items,setItems] = useState([])
    const [times,setTimes] = useState(0)
    const [exerciseTimes,setExerciseTimes] = useState(0)

    
    useEffect(()=>{
        fetch('muscle.json')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[]);

    useEffect(()=>{
        const storedTimes = getStoredTimes('exercise-times');
        setExerciseTimes(storedTimes);
        setTimes(storedTimes);
    },[times])
      
    const addTime= (timeRequired)=>{
        setTimes(timeRequired);
        addToDb(timeRequired,'exercise-times');
        
    }
    
    return (
        <div>
           <div className="row">
                <div className=" col-12 col-md-7 col-lg-8 ">
                   <div className='row'>
                   {   
                        items.map(item=> <ActivitiesItems key={item?.id}item={item} addTime={addTime}/>)
                    } 
                   </div>
                </div>

                <div className=" mt-4 col-12 col-md-5  col-lg-4">
                   <TimeCalculate exerciseTimes={exerciseTimes}></TimeCalculate>
                </div>
            </div>
        
       </div>
        
    );
};

export default Activities;