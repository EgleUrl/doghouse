import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="text-black text-center text-lg-start">
            {/*Grid container*/}
            <div className="container p-4">
                {/*Grid row*/}
                <div className="row">
                    {/*Grid column*/}
                    <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                        <a href='/doghouse/'><img src="" alt="Company logo" id='logo'/></a>
                        <h6 className='pt-4 pb-3'>
                            A place, where pets <b>matter</b>
                        </h6>
                        {/*Section: Social media*/}
                        <section className="mb-4">
                            {/*Facebook*/}
                            <a
                                className="btn text-white btn-floating m-1"
                                style={{backgroundColor: "#3b5998"}}
                                href="#!"
                                role="button"
                                id="social"
                                ><i className="fa fa-facebook-f"></i
                            ></a>

                            {/*Twitter*/}
                            <a
                                className="btn text-white btn-floating m-1"
                                style={{backgroundColor: "#333333"}}
                                href="#!"
                                role="button"
                                id="social"
                            ><b>X</b></a>

                            {/*Instagram*/}
                            <a
                                className="btn text-white btn-floating m-1"
                                style={{backgroundColor: "#ac2bac"}}
                                href="#!"
                                role='button'
                                id="social"
                                ><i className="fa fa-instagram"></i
                            ></a>

                            {/*Linkedin*/}
                            <a
                                className="btn text-white btn-floating m-1"
                                style={{backgroundColor: "#0082ca"}}
                                href="#!"
                                role='button'
                                id="social"
                                ><i className="fa fa-linkedin"></i
                            ></a>
                        </section>
                        {/*Section: Social media*/}
                    </div>
                    {/*Grid column*/}

                    {/*Grid column*/}
                    <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                        <h6 className="text-uppercase fw-bold">Site Links</h6>
                        <ul className="list-unstyled mb-0">
                            <li className='link'>
                                <a href="/" className="text-black">Home</a>
                            </li>
                            <li className='link'>
                                <a href="/shop" className="text-black">Shop</a>
                            </li>
                            <li className='link'>
                                <a href="/about" className="text-black">About Us</a>
                            </li>
                            <li className='link'>
                                <a href="/contact" className="text-black">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    {/*Grid column*/}

                    {/*Grid column*/}
                    <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                        <h6 className="text-uppercase fw-bold">Other Links</h6>
                        <ul className="list-unstyled mb-0">
                            <li className='link'>
                                <a href="https://barklyandmeows.com/" target='_blank' className="text-black">Our partners</a>
                            </li>
                            <li className='link'>
                                <a href="https://www.petbloglady.com/" target='_blank' className="text-black">Lady pet Blog</a>
                            </li>
                            <li className='link'>
                                <a href="https://www.pets4homes.co.uk/" target='_blank' className="text-black">Buy a pet</a>
                            </li>
                            <li className='link'>
                                <a href="https://www.rspca.org.uk/findapet" target='_blank' className="text-black">Adopt a pet</a>
                            </li>
                        </ul>
                    </div>
                    {/*Grid column*/}
                    <div className="col-lg-3 col-md-12 mb-4 mb-md-0">          
                        <h6 className="text-uppercase fw-bold mb-1">Contact</h6>
                        <p><i className="fa fa-home me-1"></i>53 Cowgate, Peterborough, UK</p>
                        <p>
                            <i className="fa fa-envelope me-1"></i>
                                info@doghouse.co.uk
                        </p>
                        <p><i className="fa fa-phone me-1"></i>01733 312546</p>
                    </div>
                        {/*Grid column*/}
                </div>
                {/*Grid row*/}
            </div>
            {/*Grid container*/}

            {/*Copyright*/}
            <div className="text-center p-1">
                <p>© 2020 Copyright: Dog House Ltd.</p>
            </div>            
        </footer>
    );
}
export default Footer;