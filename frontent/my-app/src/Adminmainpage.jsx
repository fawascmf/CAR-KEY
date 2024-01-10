import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

function Adminmainpage() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div style={{backgroundColor:'#128650',textAlign:'center',padding:'300px'}}>
       
      <Button variant="light" onClick={handleShow}>
       <span style={{color:'#128650'}}> Launch</span>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>< img src={require("./image/logo_website-removebg-preview.png")} height={'60px'} width={'200px'}  /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         
         <div> <li><Link style={{color:"#128650",fontWeight:'bold',textDecoration:'none'}} to={"/userview"}>USER VIEW</Link></li></div>
        <div> <li><Link style={{color:"#128650",fontWeight:'bold',textDecoration:'none'}} to={"/prodectview"}>PRODECT VIEW</Link></li></div>
        <div> <li><Link style={{color:"#128650",fontWeight:'bold',textDecoration:'none'}} to={"/adminbooking"}>BOOKING DETILS</Link></li></div>
        <div> <li><Link style={{color:"#128650",fontWeight:'bold',textDecoration:'none'}} to={"/"}>LOGOUT</Link></li></div>
        
        </Offcanvas.Body>
      </Offcanvas>

    </div>
  )
}

export default Adminmainpage