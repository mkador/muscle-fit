import React, { useState } from 'react';

const TimeCalculate = (props) => {
    
    
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
                        <button type="button" className="rounded-5 btn btn-outline-danger">10s</button>
                        <button type="button" className="rounded-5 btn btn-outline-danger">20s</button>
                        <button type="button" className="rounded-5 btn btn-outline-danger">30s</button>
                        <button type="button" className="rounded-5 btn btn-outline-danger">40s</button>
                        <button type="button" className="rounded-5 btn btn-outline-danger">50s</button>
                        
                        </div>
                    </div>
                    <h5 className='mt-3 text-center'>Exercise Details</h5>
                    <div>
                    <p className='bg-danger  rounded-5 text-center'>Exercise Time: </p>
                    <p className='bg-danger rounded-5 text-center'>Break Time: </p>
                    </div>
                    <div className='mt-3 text-center'>
                    <button className='btn btn-success'>Activity Completed</button>
                    </div>
                    </div>
        </div>
    );
};

export default TimeCalculate;