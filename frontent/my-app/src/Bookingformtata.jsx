import { Link, useParams } from 'react-router-dom'
import Nb from './Nb'
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
// import "./Addsuzukiprodect.css";
import { useNavigate } from "react-router-dom";
import { FloatingLabel } from "react-bootstrap";


function Bookingformtata() {
    const userF = JSON.parse(localStorage.getItem('user'));
    const userId = JSON.parse(localStorage.getItem('user')).Logindtl._id;
    const { id } = useParams();
    const [bookarray, setBookarray] = useState({
      name: "",
      phone: "",
      email: "",
      address: "",
      productid: id, // Use _id directly here
      userId: userId,
      carType: ""
    });
  
    const navigate = useNavigate();
  
  
    const changes = (n) => {
      setBookarray({ ...bookarray, [n.target.name]: n.target.value });
      console.log(bookarray);
    };
  
    const onRegistration = async (e) => {
      e.preventDefault();
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        const data = await axios.post(
          "http://localhost:5000/creatbookingtata",
          bookarray,
          config
        );
        if (data) {
          navigate("/mybooking");
          alert("tatabooking complet")
        } else {
          alert("not complet");
        }
        console.log(data);
        return data;
      } catch (error) {
        console.log("couldn't signup", error);
      }
    };
  return (
    <div>
   <div>  <Nb /></div>

<div>

  <div className="mainsideprop">
    <div
      style={{
        float: "left",
        marginTop: "-1.5rem",
        marginBottom: "1.5rem",
        position: "fixed",
      }}
    >

    </div>
    <div className="secondmain">
      <h2 className="text-center" style={{ color: '#128650' }}>BOOKING FORM TATA</h2>
      <br />
      <div>
        <Form>
          <Row className="mb-3">

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="your name"
                name="name"
                onChange={changes}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>phone</Form.Label>
              <Form.Control
                type="string"
                placeholder="phon number"
                name="phone"
                onChange={changes}
              />
            </Form.Group>
          </Row>


          <Form.Group className="position-relative mb-3">
            <Form.Label>address</Form.Label>
            <Form.Control
              placeholder="your address"
              type="text"
              required
              name="address"
              onChange={changes}
            />
            <Form.Control.Feedback
              type="invalid"
              tooltip
            ></Form.Control.Feedback>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>email</Form.Label>
              <Form.Control name="email" onChange={changes}
                placeholder="your email"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>carType</Form.Label>
              <Form.Control
                type="carType"
                placeholder="carType"
                name="carType"
                onChange={changes}
              />
            </Form.Group>
            <br />
          </Row>
          <br />
          <center><Button variant="success" type="submit" onClick={onRegistration}>
            Submit
          </Button>{" "}</center>
          <Button variant="success" type="back" href="/home">
            Back
          </Button>
        </Form>
      </div>
      <br />
    </div>
    <br />
  </div>
</div>
    </div>
  )
}

export default Bookingformtata