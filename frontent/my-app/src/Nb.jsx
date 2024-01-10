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
import {  RiAccountCircleFill } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';


function Nb() {
  const [showNavText, setShowNavText] = useState(false);
  const navigate=useNavigate()

  
  return (
    <div>
  <MDBNavbar expand='lg' light bgColor='success'>
      <MDBContainer fluid>
        <MDBNavbarBrand ><Link to={'/home'}>< img src={require("./image/logo_website-removebg-preview.png")} height={'60px'} width={'200px'}  /></Link></MDBNavbarBrand>
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
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' >
              <Link to={'/home'} style={{textDecoration:'none', color:"white"}}>HOME</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
         <button  type="button" class="btn btn-light" onClick={()=>{
      if(localStorage.getItem('user')){
        localStorage.clear()
        navigate(`/`)
        alert('logout successfully')
      }}}
 style={{textDecoration:'none', color:"white"}}> 
        <span style={{color:'#128650',fontWeight:'bold'}}>LOGOUT</span>
      </button>
    
    
        </MDBCollapse>
  <div style={{marginLeft:'10px',padding:'10px',fontSize:'30px',marginBottom:'10px'}}>
     <Link style={{color:'white'}} to={'/profil'}> <RiAccountCircleFill /></Link>
        </div>
      </MDBContainer>
    </MDBNavbar>
    </div>
  )
}

export default Nb