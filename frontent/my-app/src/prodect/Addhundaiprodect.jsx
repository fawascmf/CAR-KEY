import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import "./Addsuzukiprodect.css";
import { useNavigate } from "react-router-dom";
import { FloatingLabel } from "react-bootstrap";


function Addhundaiprodect() {
    const [hundaicreate, setHundaicreate] = useState({
        name: "",
        price: "",
        image_url: "",
        color:"",
        description:"",
      });
      const changes = (n) => {
        setHundaicreate({...hundaicreate, [n.target.name]: n.target.value });
        console.log(hundaicreate);
      };
      const navigate = useNavigate();
      const onRegistration = async (e) => {
        e.preventDefault();
        try {
          const config = {
            headers: {
              "Content-type": "application/json",
            },
          };
          const data = await axios.post(
            "http://localhost:5000/hundaiproductcreat",
            hundaicreate,
            config
          );
          if (data) {
            navigate("/hundaiprodectview");
           }
           else{
            alert("not complet")
          }
          console.log(data);
          return data;
        } catch (error) {
          console.log("couldn't signup", error);
        }
      };
  return (
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
      <h2 className="text-center" style={{color:'#128650'}}>ADD HUNDAI PRODECT</h2>
      <br />
      <div>
        <Form>
          <Row className="mb-3">
        
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="car name"
                name="name"
                onChange={changes}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>model</Form.Label>
              <Form.Control
                type="model"
                placeholder="model year"
                name="model"
                onChange={changes}
              />
            </Form.Group>
          </Row>


          <Form.Group className="position-relative mb-3">
            <Form.Label>File</Form.Label>
            <Form.Control
              placeholder="share car image url"
              type="text"
              required
              name="image_url"
              onChange={changes}
            />
            <Form.Control.Feedback
              type="invalid"
              tooltip
            ></Form.Control.Feedback>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Price</Form.Label>
              <Form.Control name="price" onChange={changes} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>color</Form.Label>
              <Form.Control
                type="name"
                placeholder="car color"
                name="color"
                onChange={changes}
              />
            </Form.Group> 
            
            <FloatingLabel
            controlId="floatingTextarea"
            label="Description"
            className="mb-3"
          >
            <Form.Control
              as="textarea"
              placeholder="Leave a brief description"
              name="description"
              onChange={changes}
            />
          </FloatingLabel>
          <br />

          </Row>
         
          <br />
          <center><Button variant="success" type="submit" onClick={onRegistration}> 
            Submit
          </Button>{" "}</center>  
          <Button variant="success" type="back" href="/hundaiprodectview"> 
            Back
          </Button> 
        </Form>
      </div>
      <br />
    </div>
    <br />
  </div></div>
  )
}

export default Addhundaiprodect