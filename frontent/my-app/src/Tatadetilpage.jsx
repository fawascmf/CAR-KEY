import React, { useEffect, useState } from 'react';
import Nb from './Nb';
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


function Tatadetilpage() {
  const [tataproduct, setTataproduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/tatadetil/${id}`)
      .then((response) => {
        console.log(response.data); 
        setTataproduct(response.data);
      })
      .catch((error) => console.log(error));
  }, [id]);
  return (
    <div>
       <div>
        <Nb />
      </div>
      <div style={{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'center',
        textAlign:'center',
        marginLeft:'24rem'
      }}>
        
            <MDBContainer  className="my-1" key={tataproduct._id}>
      <MDBRow >
        <MDBCol md="7">
          <MDBCard className="text-black">
            <MDBIcon  />
            <MDBCardImage
              src={tataproduct.image_url}
              position="top"
              alt="HUNDAI PRODECT"
            />
            <MDBCardBody>
              <div className="text-center">
                <MDBCardTitle>{tataproduct.name}</MDBCardTitle>
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <span>model</span>
                  <span>{tataproduct.model}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>color</span>
                  <span>{tataproduct.color}</span>
                </div>
              </div>
             <div className="d-flex justify-content-between total font-weight-bold mt-4">
                <span>price</span>
                <span>{tataproduct.price}</span>
              </div> 
              <br />
              <div className="d-flex justify-content-between total font-weight-bold mt-4">
                <span>description</span>
                <span>{tataproduct.description}</span>
              </div> 
              <br />
              <div>
        <Link to={`/bookingformtata/${tataproduct._id}`}><center><button  type="button" class="btn btn-light"><span style={{color:'#128650',fontWeight:'bold'}}>BOOKING NOW</span></button></center></Link>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      </MDBContainer>
      </div>
      <div>
        <Link to={'/tata'}>
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

export default Tatadetilpage