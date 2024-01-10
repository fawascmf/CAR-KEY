import React, { useState } from 'react'
import axios from 'axios'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Adminlogin() {
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
        const data=await axios.post("http://localhost:5000/adminlogin",array,config)
      console.log(data.data)
        if(data.data.token){
          navigate(`/Adminmainpage`)
          alert('login successfully')
        }else{
          alert('login error')
        }
      }
      catch(error){
        console.log("couldn't signup",error)
        alert("couldn't signup")
        
      }
    }
    
  return (
    <div style={{backgroundColor:'#128650'}} >
         <MDBContainer fluid>

<MDBRow className='d-flex justify-content-center align-items-center h-100'>
  <MDBCol col='12'>

    <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
      <MDBCardBody className='p-5 w-100 d-flex flex-column'>

        <h2 style={{color:'#128650'}} className="fw-bold mb-2 text-center">Sign in</h2>
        <p className="text-white-50 mb-3">Please enter your login and password!</p>

        <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='formControlLg'name='email' type='email' size="lg"  onChange={handleInputChange}/>
        <MDBInput wrapperClass='mb-4 w-100' label='Password' name='password' id='formControlLg' type='password' size="lg"  onChange={handleInputChange}/>

        <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />
        <Button   variant="success" size='lg'  onClick={botton}>
         login
        </Button >

        <hr className="my-4" />


      </MDBCardBody>
    </MDBCard>

  </MDBCol>
</MDBRow>

</MDBContainer>
    </div>
  )
}

export default Adminlogin