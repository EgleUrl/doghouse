import React from 'react'
import { Button } from 'react-bootstrap'
import PageHeader from '../../components/pageHeader'

const AboutUs = () => {
  return (
    <div>
      <PageHeader title={'About Us'} curPage={'About us'} />
      <div className='main container-fluid'>
        <div className='row'>
          <div className='map-area col-lg-6 mt-4 mb-3'>            
              <img className="img-fluid mt-4 mx-3" src="./src/assets/images/about.png" alt="Many pets"/>            
          </div>
          <div className='col-lg-6 mt-4 mb-4 text-center'>
            <h2>Who we are?</h2>
            <p>We are dog lovers, who became pet lovers and decided to share our passion with all the owners of our small friends.<br/>
            From dogs, cats to parrots and hamsters, now we can offer a wide range of products: care items, food, toys. Every pet will be taken care!</p>            
            <img className='map-area img-fluid rounded mb-3' src='./src/assets/images/about1.png' alt="Owner and cat"/>
            <p>We run our bussiness for 10 years now. Started from the little corner shop, now we grew to one of the largest UK local pet stores.<br/>
            We welcome any sponsorship, if you have any suggestions, do not hesitate to contact us!</p>
            <Button variant="outline-dark" size='lg' href='/doghouse/contact'>Contact Us</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutUs