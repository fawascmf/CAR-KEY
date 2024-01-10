 import React from 'react'
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage
} from 'mdb-react-ui-kit';
import Nb from './Nb';
import Companys from './Companys';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

function Home() {
  return (
    <div>
      <Nb/>
      <div>
      <MDBCarousel showControls touch={false}>
      <MDBCarouselItem
      
        className='w-100 d-block'
        itemId={1}
        src='https://imgd.aeplcdn.com/0X0/n/cw/ec/34290/countryman-exterior-right-front-three-quarter-4.jpeg?q=80'
        alt='...'
        height={450}
      
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://www.hyundai.com/content/dam/hyundai/template_en/en/images/find-a-car/pip/santa-fe-2021/safety/santa-fe-tm-fl-safety-kv-pc.jpg'
        alt='...'
        height={450}
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://di-uploads-pod38.dealerinspire.com/bigstarhyundai/uploads/2021/09/BHY_14807_PreOwned_0722_CMK_Hero.jpg'
        alt='...'
        height={450}
      />
    </MDBCarousel><br /><br />

    <h3 style={{color:'#128650',padding:'10px',textAlign:'center'}}>OUR COMPANYS</h3>
        <div style={{padding:'10px'}}>
        <Companys/>
        </div>
        </div>  
        <div>
        </div><br /><br /><br />
        <div>
       
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
 {/* <div >
 <div style={{float:'right',marginTop:'-175px',marginRight:'500px'}}>
 <span style={{fontWeight:'bold'}}> company</span><br />
 <div ><Link style={{color:'white',textDecoration:'none'}} to={"/about"}> About us</Link></div>
 <div><Link style={{color:'white',textDecoration:'none'}} to={'/contact'}>Contact Us</Link> </div>


</div>
<div style={{marginTop:'-175px',float:'right',marginRight:'150px'}} >
<span style={{fontWeight:'bold'}}>Ligal</span><br />
<div><Link style={{color:'white',textDecoration:'none'}} to={"/terms"}>Terms & Conditions</Link ></div>
</div> */}
{/* </div> */}
</div>
</footer>
        </div>
    </div>
  )
}

export default Home