import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Error.css';
const Error = () => {
  return (
    <>
      <Navbar/>
      <div className='error_img'>
        <img src={require('../img/error.webp')} style={{marginLeft:'280px'}}/>
      </div>
       
    </>
  );
};
export default Error;