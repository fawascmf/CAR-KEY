import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FloatingLabel } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { MDBRadio } from "mdb-react-ui-kit";

function Editsuzuki() {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/suzukiget/${id}`)
      .then((val) => setProducts(val.data));
  }, []);
  console.log(products);
  const [name, setName] = useState(products.name);
  const [price, setPrice] = useState(products.price);
  const [image_url, setImage_url] = useState(products.image_url);
  const [description, setDescription] = useState(products.description);
  const [color, setColor] = useState(products.color);
  const [model, setModel] = useState(products.model);

  function handleSubmit() {
    axios
      .put(`http://localhost:5000/ubdatesuzuki/${id}`, {
        name,
        price,
        image_url,
        description,
        color,
      })
      .then((res) => {
        if (handleSubmit) {
          alert("prodect  updated");
        } else {
          alert("Something went Wrong");
          navigate("/suzukiprodectview");
        }
      });
  }

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
      <h2 className="text-center" style={{color:'#128650'}}>EDIT SUZUKI PRODECT</h2>
      <br />
      <div>
        <Form>
          <Row className="mb-3">
        
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
               defaultValue={products.name}
                type="text"
                name="name"
                onChange={(e) => {
                 setName(e.target.value);
                  }}
              />
            </Form.Group>
          </Row>
          <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>model</Form.Label>
              <Form.Control
               defaultValue={products.model}
                type="model"
                name="model"
                onChange={(e)=>{
                   setModel(e.target.value);
                }}
              />
            </Form.Group>


          <Form.Group className="position-relative mb-3">
            <Form.Label>File</Form.Label>
            <Form.Control
            defaultValue={products.image_url}
              type="text"
              required
              name="image_url"
              onChange={(e)=>{
                setImage_url(e.target.value);
             }}
            />
            <Form.Control.Feedback
              type="invalid"
              tooltip
            ></Form.Control.Feedback>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Price</Form.Label>
              <Form.Control
            defaultValue={products.price}
               name="price"
               onChange={(e)=>{
                setPrice(e.target.value);
             }} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>color</Form.Label>
              <Form.Control
               defaultValue={products.color}
                type="text"
                name="color"
                onChange={(e)=>{
                    setColor(e.target.value);
                 }}
              />
            </Form.Group> 
            
            <FloatingLabel
            controlId="floatingTextarea"
            label="Description"
            className="mb-3"
          >
            <Form.Control
              as="textarea"
              defaultValue={products.description}
              name="description"
              onChange={(e)=>{
                setDescription(e.target.value);
             }}
            />
          </FloatingLabel>
          <br />

          </Row>
         
          <br />
          <center>  <Link to={"/suzukiprodectview"}><Button variant="success" type="submit" onClick={handleSubmit}> 
            Submit
          </Button>{" "} </Link>
          <Button variant="success" type="back" href="/suzukiprodectview"> 
            Back
          </Button> 
          </center> 
        </Form>
      </div>
      <br />
    </div>
    <br />
  </div>
    </div>
  )
}

export default Editsuzuki