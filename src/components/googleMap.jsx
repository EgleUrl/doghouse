import React from 'react'

const GoogleMap = () => {
  return (
    <div className="map-area">
        <div className="m-2 pt-2 auto">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d180.2251956838975!2d-0.24659824996077273!3d52.5730193924255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877f1aaeb1983e9%3A0x877e2efa693427e2!2s53%20Cowgate%2C%20Peterborough%20PE1%201LZ!5e0!3m2!1sen!2suk!4v1714516088335!5m2!1sen!2suk" width={"100%"} height={320} style={{border: "2"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}
export default GoogleMap