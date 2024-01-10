import React, { useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signuppage() {
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
      const data=await axios.post("http://localhost:5000/usersignup",array,config)
    console.log(data.data)
    localStorage.setItem("user", JSON.stringify(data.data));
      if(data.data.token){
        navigate(`/login`)
        alert('registered successfully')
      }else{
        alert("couldn't signup")
      }
    } 
    catch(error){
      console.log("couldn't signup",error) 
    }
  }
  return (
    <div style={{backgroundColor:'#128650'}}>
         <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image'>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h4 className="text-uppercase text-center mb-5" style={{color:'#128650'}}>Create an account</h4>
          
          <MDBInput  label='First Name' size='lg' id='form1' name='firstname' onChange={handleInputChange} type='text'/>
          <MDBInput  label='last  Name' size='lg' id='form1' name='secondname' onChange={handleInputChange} type='text'/>
          <MDBInput  label='Your Email' size='lg' id='form2' name='email'  onChange={handleInputChange} type='email'/>
          <MDBInput  label='Password' size='lg' id='form3' name='password'  onChange={handleInputChange} type='password'/>
         
          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox  name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>
          <Button  className='mb-4 w-100 gradient-custom-4'  variant="success" size='lg' onClick={botton}>Register</Button >
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    </div>
  )
}

export default Signuppage