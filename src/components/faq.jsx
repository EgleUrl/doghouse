import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
  return (
    <div className='contact-area col-12 p-4 auto'>
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>What types of pets do you cater to?</Accordion.Header>
                <Accordion.Body>
                    We offer products for dogs, cats and small animals like rabbits, ferrets, rats and hamsters.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header >What payment methods do you accept?</Accordion.Header>
                <Accordion.Body>
                    We accept all major credit cards, PayPal, and other digital payment methods such as Apple Pay and Google Wallet.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>How do you ensure the quality of your products?</Accordion.Header>
                <Accordion.Body>
                    We source our products from trusted manufacturers and conduct quality checks to ensure they meet our high standards.
                </Accordion.Body>
            </Accordion.Item>
                <Accordion.Item eventKey="3">
                <Accordion.Header>How can I track my order?</Accordion.Header>
                <Accordion.Body>
                    Once your order is shipped, we will send you a tracking number via email. You can use this number to track your order on our website.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>What is your return policy?</Accordion.Header>
                <Accordion.Body>
                    We accept returns within 30 days of purchase. Items must be in original condition and packaging. 
                    Please note that certain items may be exempt from returns.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
                <Accordion.Header>Is it safe to buy live animals from your store?</Accordion.Header>
                <Accordion.Body>
                    We do not sell live animals directly, but we offer resources and referrals to reputable adoption and purchase options.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
                <Accordion.Header>Can I change or cancel my order after placing it?</Accordion.Header>
                <Accordion.Body>
                    You can change or cancel your order within 24 hours of placement. Please contact our customer service immediately for assistance.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
                <Accordion.Header>Do you ship internationally?</Accordion.Header>
                <Accordion.Body>
                    Currently, we only ship within the United Kingdom, but we are looking to expand our shipping destinations in the near future
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </div>
  )
}

export default Faq