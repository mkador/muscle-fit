import React, { useEffect, useState } from 'react';
import ActivitiesItems from '../Activities-Items/ActivitiesItems';
import TimeCalculate from './TimeCalculate/TimeCalculate';
import {addToDb,getStoredTimes} from '../../utilities/fakedb';


const Activities = () => {
    const [items,setItems] = useState([])
    const [times,setTimes] = useState("")
    const [exerciseTimes,setExerciseTimes] = useState(0)

    
    useEffect(()=>{
        fetch('muscle.json')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[]);

    useEffect(()=>{
        const storedTimes = getStoredTimes();
        setExerciseTimes(storedTimes);
    },[times])
    console.log(exerciseTimes);    
    const addTime= (timeRequired)=>{
        setTimes(timeRequired);
        addToDb(timeRequired);
        
    }
    
    return (
        <div>
           <div className="row">
                <div className="col-8">
                   <div className='row'>
                   {   
                        items.map(item=> <ActivitiesItems key={item?.id}item={item} addTime={addTime}/>)
                    } 
                   </div>
                </div>

                <div className=" mt-4 col-4 pr-3 pl-3">
                   <TimeCalculate exerciseTimes={exerciseTimes}></TimeCalculate>
                </div>
            </div>
        
       </div>
        
    );
};

export default Activities;