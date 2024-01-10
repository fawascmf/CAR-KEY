import React from 'react'
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage
} from 'mdb-react-ui-kit';
import Nb from './Nb';
import Companys from './Companys';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import { Card } from 'react-bootstrap';

function Prodectview() {
  

  return (
    <div>
      <h2 className="text-center" style={{color:'#128650'}}> PRODECT</h2>
        <div style={{display:'flex',padding:'80px',textAlign:'center',marginLeft:'150px'}}>
   <>
  
        <Card 
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header><h5 style={{textAlign:'center',color:'#128650',fontWeight:'bold'}}>TATA</h5></Card.Header>
          <Card.Body>
            <Card.Text>
            <Link to={'/tataprodectview'}> <img src="https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1397186503/4993a30e95f17355ceaecdae5bf71152.png" alt="" /></Link> 
              
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          style={{ width: '18rem',marginLeft:'10px' }}
          className="mb-2"
        >
          <Card.Header><h5 style={{textAlign:'center',color:'#128650',fontWeight:'bold'}}>HYUNDAI</h5></Card.Header>
          <Card.Body>
            <Card.Text>
            <Link to={'/hundaiprodectview'}> <img src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/18f278c1e2b8708ca0ce8d1c20b3eab6" alt="" /></Link> 
              
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          style={{ width: '18rem',marginLeft:'10px' }}
          className="mb-2"
        >
          <Card.Header><h5 style={{textAlign:'center',color:'#128650',fontWeight:'bold'}}>SUZUKI</h5></Card.Header>
          <Card.Body>
            <Card.Text>
            <Link to={'/suzukiprodectview'}> <img src="https://cricksapi.s3.amazonaws.com/uploads/manufacturer/logo/29/favicon_logo.png" alt="" /></Link> 
            </Card.Text>
          </Card.Body>
        </Card>
      
    </>

    </div>
    <Link to={'/adminmainpage'}><center><button  type="button" class="btn btn-light"><span style={{color:'#128650',fontWeight:'bold'}}>BACK</span></button></center></Link><br /><br />

    </div>
  )
}

export default Prodectview
