import React, { useEffect, useState } from 'react';
import { addToDbBreakTimes,getStoredTimes } from '../../../utilities/fakedb';

const TimeCalculate = ({exerciseTimes}) => {
    const [time,setTime] = useState(0);
    const [storedBreakTimes,setStoredBreakTimes] = useState(0);
    const breakTimes = [10,20,30,40,50];
    
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
                    <div className='col-12'>
                        <img src="" alt="" />
                        <h4 className='text-center'>Name: Md. Musa Kalimulla</h4>
                    </div>
                    <div className='p-3rounded-5 mt-2 d-flex justify-content-between align-items-center'>
                        <button type="button" className="rounded-5 btn btn-outline-success"><h6>Weight: 64kg</h6></button>
                        <button type="button" className="rounded-5 btn btn-outline-success"><h6>Height: 170cm</h6></button>
                        <button type="button" className="rounded-5 btn btn-outline-success"> <h6>Age: 27yrs</h6></button>
                       
                    </div>
                    <div>
                        <h5 className='mt-3 text-center'>Add a Break</h5>
                        <div className='d-flex justify-content-between align-items-center m-4'>
                        {
                            breakTimes.map(breakTime=> <button onClick={()=>addBreakTimes(breakTime)} type="button" className="rounded-5 btn btn-outline-danger">{breakTime}</button>)
                        }
                        
                        
                        </div>
                    </div>
                    <h5 className='mt-3 text-center'>Exercise Details</h5>
                    <div>
                    <p className='bg-danger  rounded-5 text-center'>Exercise Time: {exerciseTimes} </p>
                    <p className='bg-danger rounded-5 text-center'>Break Time: {storedBreakTimes} </p>
                    </div>
                    <div className='mt-3 text-center'>
                    <button className='btn btn-success'>Activity Completed</button>
                    </div>
                    </div>
        </div>
    );
};

export default TimeCalculate;