import React from 'react';
import '../App.css';
import { Button } from 'react-bootstrap';
import './homeHeader.css';


const HomeHeader = () => {
  return (
    <div className='home-header-container'>
      <video loop autoPlay muted>
        <source src="./doghouse/public/dogHouse.mp4" type="video/mp4" />
      </video>
      <h1>DOG HOUSE</h1>
      <p>A Place Where Pets <b>Matter</b></p>   
      <Button variant="outline-light" size='lg' href='/doghouse/shop'>Visit our shop</Button>
    </div>    
  );
}
export default HomeHeader;