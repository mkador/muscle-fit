import React, { useEffect, useState } from 'react';
import { addToDbBreakTimes,getStoredTimes } from '../../../utilities/fakedb';

const TimeCalculate = ({exerciseTimes}) => {
    const [time,setTime] = useState(0);
    const [storedBreakTimes,setStoredBreakTimes] = useState(0);
    const breakTimes = ["10 min","20 min","30 min","40 min","50 min"];
    
    const addBreakTimes = (breakTime)=>{
        addToDbBreakTimes(breakTime,'break-times');
        setTime(breakTime);
    }
    useEffect(()=>{
       const getBreakTimes = getStoredTimes('break-times')  ;
       setStoredBreakTimes(getBreakTimes);
    },[time])

    return (
        <div>
             <div className='row'>
                    <div>
                        <img className='my-3 mx-auto d-block w-50 rounded-4' src="./image/picture-7.jpg" alt="" />
                       
                    </div>
                    <h4 className=' mb-2 text-center'>Md. Musa Kalimulla</h4>
                    <div className='d-flex justify-content-between align-items-center'>
                        <button className='btn btn-outline-none bg-danger text-white rounded-2'><h6>Weight: 64kg</h6></button>
                        <button className='btn btn-outline-none bg-danger text-white rounded-2'><h6>Height: 170cm</h6></button>
                        <button className='btn btn-outline-none bg-danger text-white rounded-2'><h6>Age: 27yrs</h6></button>
                       
                       
                    </div>
                    <div>
                        <h5 className='mt-3 text-center'>Add a Break</h5>
                        <div className='d-flex justify-content-between align-items-center'>
                        {
                            breakTimes.map(breakTime=> <button onClick={()=>addBreakTimes(breakTime)}  type="button" className="rounded-5 btn btn-outline-danger">{breakTime}</button>)
                        }
                        
                        
                        </div>
                    </div>
                    <h5 className='mt-3 text-center'>Exercise Details</h5>
                    <div>
                    <p className='p-2 bg-danger  rounded-5 text-center'>Exercise Time: {exerciseTimes} Second </p>
                    <p className='p-2 bg-danger rounded-5 text-center'>Break Time: {storedBreakTimes}  </p>
                    </div>
                    <div className=' mt-3 text-center'>
                    <button className='btn btn-success'>Activity Completed</button>
                    </div>
                    </div>
        </div>
    );
};

export default TimeCalculate;