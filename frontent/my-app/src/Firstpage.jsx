import React, { useState } from 'react'
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { eventWrapper } from '@testing-library/user-event/dist/utils';
import { Button } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons'

function Firstpage() {
  const [showNavText, setShowNavText] = useState(false);
  return (
    <div style={{backgroundColor:'lightgreen'}} >
      <div>
  <MDBNavbar expand='lg' light bgColor='success'>
      <MDBContainer fluid>
        <MDBNavbarBrand style={{padding:'10px'}}>< img src={require("./image/logo_website-removebg-preview.png")} height={'60px'} width={'200px'}  /></MDBNavbarBrand>
        
        <MDBNavbarToggler
          type='button'
          data-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavText(!showNavText)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavText}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
          </MDBNavbarNav>
         <button  type="button" class="btn btn-light"><Link style={{textDecoration:'none',color:'#128650',padding:'15px',fontWeight:'bold'}} to={'/login'}> 
        LOGIN/SIGNUP
        </Link> </button>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>


</div><br /><br />


<p style={{padding:'50px',textAlign:'center',font:'caption',fontSize:'40px'}}>Connecting you to the biggest brand new car in <span style={{color:'#128650',fontWeight:'bold'}}> CARKEY !</span> </p>

<p style={{fontWeight:'bold',padding:'20px',marginLeft:'20px',textAlign:'center'}}>Welcome to Car Key, your one-stop-shop for all your car needs. We offer a wide range of cars that are low mileage,<br/> well-maintained, and accident-free. Our dealership provides both new and used cars at unbeatable prices.<br/> We understand the importance of upgrading your ride and experiencing the thrill of driving.<br/> That’s why we offer a variety of cars that cater to your needs and budget.<br/> Our team of experts is always ready to assist you in finding <br/> the perfect car that suits your lifestyle.<br/> <br/>So, what are you waiting for? Unlock your dream car with Car Key today!</p>

 
<Link to={'/login'}><center><button  type="button" class="btn btn-light"><span style={{color:'#128650',fontWeight:'bold'}}>CONTINUE</span></button></center></Link><br /><br />
<footer  style={{backgroundColor:'#128650',color:'white',padding:'60px',}}>
<div style={{marginLeft:'100px'}}>

<img src={require("./image/logo_website-removebg-preview.png")}  height={'60px'} width={'200px'} /><br/><br/>
  <p>36/5, Hustlehub One East,Somasandrapalya,<br /> 27th Main Rd, Sector 2, HSR Layout,<br /> Bengaluru, Karnataka 560102.</p>
 <p >We’re Socially Active</p>
 <div>
  <SocialIcon url="https://twitter.com" />
  <SocialIcon url="https://facebook.com" />
  <SocialIcon url="https://instagram.com" />
  </div>
 <div >
 <div style={{float:'right',marginTop:'-175px',marginRight:'500px'}}>
 <span style={{fontWeight:'bold'}}> company</span><br />
 <div ><Link style={{color:'white',textDecoration:'none'}} to={"/about"}> About us</Link></div>
 <div><Link style={{color:'white',textDecoration:'none'}} to={'/contact'}>Contact Us</Link> </div>


</div>
<div style={{marginTop:'-175px',float:'right',marginRight:'150px'}} >
<span style={{fontWeight:'bold'}}>Ligal</span><br />
<div><Link style={{color:'white',textDecoration:'none'}} to={"/terms"}>Terms & Conditions</Link ></div>
</div>
</div>
</div>
</footer>
    </div>
 
  )
}

export default Firstpage