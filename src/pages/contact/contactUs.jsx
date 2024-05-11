import React, {useState} from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PageHeader from '../../components/pageHeader'
import GoogleMap from "../../components/googleMap"
import Faq from "../../components/faq"
import UserForm from "../../components/form"
import "../../App.css"

const title = "Get in touch with us";
const subtitle = "We are always eager to hear from you";


const ContactUs = () => {
  const [key, setKey] = useState('FaQ');
  return (
    <div>
      <PageHeader title={'Contact Us'} curPage={'Contact us'} />
      <div className='main container-fluid'>
      <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3" fil justify>
        <Tab eventKey="FaQ" title="F A Q">
          <div className='col-12 mt-4 text-center justify-content-center'>
            <h2 className='mt-4 mb-4'>Most frequently asked questions</h2>
            <h5 className='mt-4 mb-4'>Find the answer here</h5>
            <div className='contact-container'>
              <Faq />
            </div>            
          </div>
        </Tab>
        <Tab eventKey="From" title="Form">
          <div className='col-12 mt-4 justify-content-center'>
            <h2 className='mt-4 mb-4 text-center'>Please fill the form to contact us</h2>
            <h5 className='mt-4 mb-4 text-center'>We will get back to you right away</h5>
            <div className='form-container'>
              <UserForm />
            </div>
          </div>  
        </Tab>
        <Tab eventKey="Contact" title="Contact">
          
            <div className='row'>
              <div className=' col-12 text-center'>
                <h2 className='mt-4 mb-4'>{title}</h2>
                <h5 className='mt-4 mb-4'>{subtitle}</h5>
              </div>
              <div className='col-xl-7 col-lg-7 col-12'>
                <GoogleMap />
              </div>
              <div className='col-xl-5 col-lg-5 col-12'>
                <div className='address mt-4 animate__animated animate__flipInX'>
                  <h5 className='mx-4 pt-4 mb-4'><i className="fa fa-home me-1"></i> 53 Cowgate, Peterborough, UK</h5>
                </div>
                <div className='address mb-4 animate__animated animate__flipInX'>
                  <h5 className='mx-4 pt-4'><i className="fa fa-envelope me-1"></i> info@doghouse.co.uk</h5>
                </div>
                <div className='address mb-4 animate__animated animate__flipInX'>
                  <h5 className='mx-4 pt-4'><i className="fa fa-phone me-1"></i> 01733 312546</h5>
                </div>
                <div className='address mb-4 animate__animated animate__flipInX'>
                  <h5 className='mx-4 pt-4'><i className="fa fa-clock-o me-1"></i> 9am - 5:30pm</h5>
                </div>
              </div>
            </div>          
        </Tab>
      </Tabs>
      </div>
    </div>
  )
}
export default ContactUs