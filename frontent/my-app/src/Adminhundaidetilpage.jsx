import React, { useEffect, useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Adminhundaidetilpage() {
    const [hundaiproduct, setHundaiproduct] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
  
    useEffect(() => {
      axios
        .get(`http://localhost:5000/hundaidetil/${id}`)
        .then((response) => {
          console.log(response.data); 
          setHundaiproduct(response.data);
        })
        .catch((error) => console.log(error));
    }, [id]);
    
  return (
    <div>
      
      <div style={{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'center',
        textAlign:'center',
        marginLeft:'24rem'
      }}>
        
            <MDBContainer  className="my-1" key={hundaiproduct._id}>
      <MDBRow >
        <MDBCol md="7">
          <MDBCard className="text-black">
            <MDBIcon  />
            <MDBCardImage
              src={hundaiproduct.image_url}
              position="top"
              alt="HUNDAI PRODECT"
            />
            <MDBCardBody>
              <div className="text-center">
                <MDBCardTitle>{hundaiproduct.name}</MDBCardTitle>
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <span>model</span>
                  <span>{hundaiproduct.model}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>color</span>
                  <span>{hundaiproduct.color}</span>
                </div>
              </div>
             <div className="d-flex justify-content-between total font-weight-bold mt-4">
                <span>price</span>
                <span>{hundaiproduct.price}</span>
              </div> 
              <br />
              <div className="d-flex justify-content-between total font-weight-bold mt-4">
                <span>description</span>
                <span>{hundaiproduct.description}</span>
              </div> 
              <br />
              <div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      </MDBContainer>
      </div>
      <div>
        <Link to={'/hundaiprodectview'}>
          <center>
            <button type="button" className="btn btn-light">
              <span style={{ color: '#128650', fontWeight: 'bold' }}>BACK</span>
            </button>
          </center>
        </Link>
        <br />
        <br />
      </div>
    </div>
  )
}

export default Adminhundaidetilpage