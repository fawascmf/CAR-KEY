import React, { useEffect, useState } from 'react'
import Nb from './Nb'
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


function Hundai() {
  const [hundaiproduct, setHundaiprodect] = useState([]);
  // const [checked,setChecked]=useState({})
  const {_id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/hundaiview`)
      .then((val) => setHundaiprodect(val.data))
      .catch((err) => console.log(err));
    console.log(_id);
  }, []);

 
  return (
    <div>
       
         <div>  <Nb/></div>
         <div>
         <div style={{display:''}}>
         {hundaiproduct.map((viewp) => (
        <MDBContainer fluid className="my-5">
      <MDBRow >
        <MDBCol md="3">
          <MDBCard className="text-black">
            <MDBIcon  />
            <MDBCardImage
              src={viewp.image_url}
              position="top"
              alt="HUNDAI PRODECT"
            />
            <MDBCardBody>
              <div className="text-center">
                <MDBCardTitle>{viewp.name}</MDBCardTitle>
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <span>model</span>
                  <span>{viewp.model}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>color</span>
                  <span>{viewp.color}</span>
                </div>
                {/* <div className="d-flex justify-content-between">
                  <span>Vesa Mount Adapter</span>
                  <span>$199</span>
                </div> */}
              </div>
              <div className="d-flex justify-content-between total font-weight-bold mt-4">
                <span>price</span>
                <span>{viewp.price}</span>
              </div>
              <br />
              <div>
        <Link to={`/hundaidetilpage/${viewp._id}`}><center><button  type="button" class="btn btn-light"><span style={{color:'#128650',fontWeight:'bold'}}>VIEW</span></button></center></Link>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
      ))}
        </div>
        
         </div>
         
         <div>
        <Link to={'/home'}><center><button  type="button" class="btn btn-light"><span style={{color:'#128650',fontWeight:'bold'}}>BACK</span></button></center></Link><br /><br />

        </div>
    </div>
  )
}

export default Hundai