import React, { useEffect, useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { Alert, Button } from 'react-bootstrap';
import axios from 'axios';


function Login() {
  const navigate=useNavigate()
  const[array,setArray]=useState({})

  const handleInputChange=(n)=>

  setArray({...array,[n.target.name]:n.target.value})

  console.log(array)

  const botton=async(e)=>
  {
    try{
      const config={
        headers:{
          "Content-type":"application/json"
        },
      }
      const data=await axios.post("http://localhost:5000/userlogin",array,config)
    console.log(data.data);
    localStorage.setItem("user", JSON.stringify(data.data));
    if (data.data.token) {
      alert('login successfully')
      navigate(`/home`)
    } else {
      alert("login failed,try again...");
    }
    }
    catch(error){
      console.log("couldn't signup",error)
    
    }
    
  }
  useEffect(()=>{
    const auth=localStorage.getItem('user');
    if(auth){
      
    }
  })
  return (
    <div style={{backgroundColor:'#128650',padding:'60px',paddingLeft:'300px',paddingRight:'300px'}} >
      <MDBContainer >

<MDBCard>
  <MDBRow className='g-0'>

    <MDBCol md='6'>
      <MDBCardImage style={{height:'500px'}} src='https://imgk.timesnownews.com/story/Car_keys_generic.jpg?tr=w-600,h-450,fo-auto' alt="login form" className='rounded-start w-100'/>
    </MDBCol>

    <MDBCol md='6'> 
      <MDBCardBody >

        <div >
          <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
          <span className="h1 fw-bold mb-0">< img src={require("./image/logo_website-removebg-preview.png")} height={'100px'} width={'200px'}  /></span>
        </div>

        <h5  style={{letterSpacing: '1px',color:'#128650'}}>Sign into your account</h5>

          <MDBInput  label='Email address' id='formControlLg' name='email' onChange={handleInputChange} type='email' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' name='password' onChange={handleInputChange} type='password' size="lg"/>

        
        <Button  onClick={botton}  className="mb-4 px-5"   variant="success">Login</Button>
        
        <p> <Link style={{color:'#128650',textDecoration:'none'}} to={'/signup'}> <span >Register here</span></Link> </p>
        <div >
        <button type="button" class="btn btn-success"><Link style={{color:'white',textDecoration:'none'}} to={"/adminlogin"}>
        ADMIN
        </Link></button>
        </div>

      </MDBCardBody>
    </MDBCol>

  </MDBRow>
</MDBCard>

</MDBContainer>
    </div>
  ) 
}

export default Login