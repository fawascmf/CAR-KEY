import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div style={{backgroundColor:'lightgreen'}}>
    <nav style={{backgroundColor:'#128650'}}>

        <br /><br /><br />
    </nav>
  <div style={{padding:'50px',textAlign:'center'}}>
    <div >
     <h1 style={{fontWeight:'bold'}}>Contact us</h1><br />
    </div>
    <div style={{fontWeight:'bold',marginLeft:'20px'}}>
    <p style={{fontWeight:'bold',padding:'20px',marginLeft:'20px',textAlign:'center'}}>Welcome to Car Key, your one-stop-shop for all your car needs. We offer a wide range of cars that are low mileage,<br/> well-maintained, and accident-free. Our dealership provides both new and used cars at unbeatable prices.<br/> We understand the importance of upgrading your ride and experiencing the thrill of driving.<br/> That’s why we offer a variety of cars that cater to your needs and budget.<br/> Our team of experts is always ready to assist you in finding <br/> the perfect car that suits your lifestyle.<br/> <br/>So, what are you waiting for? Unlock your dream car with Car Key today!</p>
    </div>
    </div>
    <Link to={'/'}><center><button  type="button" class="btn btn-light"><span style={{color:'#128650',fontWeight:'bold'}}>BACK</span></button></center></Link><br /><br />
    <footer style={{backgroundColor:'#128650'}}>
      <br /><br /><br /><br />
    </footer>
</div>
  )
}

export default Contact