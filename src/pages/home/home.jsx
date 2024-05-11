import React from 'react'
import HomeHeader from "../../components/homeHeader"

const Home = () => {
  return (
    <>        
        <HomeHeader />
        <div className='map area'>
          <div className='container-fluid'>
            <div className='row mt-4 text-center mb-4'>              
                <h3>Our discount code is 2024Xpet</h3>
                <h4>Hurry up to get 10% discount on all products</h4>
                <h1>Prepare your little ones for this summer!</h1>              
            </div>
          </div>
        </div>        
    </>
  );
}

export default Home
