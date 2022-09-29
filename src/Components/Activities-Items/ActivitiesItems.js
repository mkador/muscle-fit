import React from 'react';


const ActivitiesItems = ({item,addTime}) => {
    
    const {id,name,age,picture,about,timeRequired} = item;

    return (
        <div className='col-12 col-md-6 col-lg-4 mt-5'>
            
            
            <div className="card" style= {{width: "100%"}}>
            <img src={picture} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{about}</p>
            <p>Age: {age} yrs</p>
            <p>Time Required: {timeRequired} Second</p>
            <button onClick={()=>addTime(timeRequired)} className="btn btn-primary">Added Items</button>
           </div>
          </div>

        </div>
    );
};

export default ActivitiesItems;