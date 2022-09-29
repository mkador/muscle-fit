import React from 'react';
import logo from '../../images/favicon.jpg';
const Header = () => {
    return (
        <div>
            <nav>
                <img className='rounded mx-auto d-block img-fluid' width="100" height="100" src={logo} alt="" />
                <h3 className='text-center mt-2'> <span className='text-success font-monospace'>Muscle</span> <span className='text-warning font-monospace'>Fit</span></h3>
            </nav>
        </div>
    );
};

export default Header;