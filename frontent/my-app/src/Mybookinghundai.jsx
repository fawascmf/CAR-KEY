import { Link } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";

function Mybookinghundai() {
  const [datauser, setDatauser] = useState({});
  const [bookings, setBookings] = useState([]);
  const [cards, setCards] = useState([]);

  const navigate = useNavigate();
  const _id= useParams();


  useEffect(() => {
    const getuserData = async () => {

      try {
        const auth = localStorage.getItem("user");

        const parsedAuth = JSON.parse(auth);

        if (parsedAuth) {
          setDatauser(parsedAuth);

          const userId = parsedAuth.Logindtl._id;
          const bookingresoponse = await axios.get(`http://localhost:5000/bookingbyuser/${userId}`);
          setBookings(bookingresoponse.data);

          console.log(bookings);

          if (bookingresoponse.data) {
            const productid = bookingresoponse.data.productid;

            const productcard = await axios.get(`http://localhost:5000/bookcardhundai/${productid}`);
            setCards(productcard.data);
          console.log(productid);

          }}
        } catch (error) {
          console.error("Error in getuserData:", error);
        }}
      ;
      getuserData();
    }, []);
  const bookingid = bookings._id;
  const prdctid = bookings.productid;
  const mybooking = (e) => {
    e.preventDefault();
    navigate(`/mybooking`);
  };
  const profile = (e) => {
    e.preventDefault();
    navigate(`/profil`);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await axios.delete("http://localhost:5000/deletebookingbyuserhundai/"+bookingid)
    alert('you are deleted booked car')
    navigate(`/profil`)
  }

  const handleView = (e) => {
    e.preventDefault();
    navigate('/zoomprop/' + prdctid)
  }
  return (
    <div>
      <div>
        <nav style={{ backgroundColor: '#128650' }}>

          <br /><br /><br />
        </nav>
        <div id="mained">
          <div id="divmaine">
            <div
              style={{
                float: "left",
                border: "1px solid black",
                textAlign: "center",
              }}
            >
              <button
                onClick={profile}
                style={{
                  borderStyle: "none",
                  backgroundColor: "white",
                  width: "250px",
                  height: "50px",
                }}
              >
                Profile
              </button>
            </div>
            <div
              style={{
                border: "1px solid black",
                textAlign: "center",
              }}
            >
              <button
                onClick={mybooking}
                style={{
                  borderStyle: "none",
                  backgroundColor: "white",
                  width: "250px",
                  height: "50px",
                }}
              >
                My Bookings
              </button>
            </div>
            <div
              style={{
                fontSize: "18px",
                marginTop: "2rem",
                fontWeight: "bold",
                color: "navy",
              }}
            >
              <span
                style={{
                  marginTop: "15px",
                  marginLeft: "2rem",
                }}
              >
                My bookings
              </span>

              <div id="detaildiv">

              {bookings.length > 0 ? (<h5>your bookings are empty</h5>) : (
  <MDBCard key={cards._id}   
           
                  >
                    <MDBRow className="g-0">
                      <MDBCol md="4">
                        <MDBCardImage
                          style={{ height: "180px", width: "150px" }}
                          src={cards.image_url}
                          alt=".."
                          fluid
                        />
                      </MDBCol>
                      <MDBCol md="8">
                        <MDBCardBody>

                          <MDBCardTitle style={{ fontWeight: "bold" }}>
                            {cards.name}
                          </MDBCardTitle>

                          <MDBCardText>
                            {cards.catogory}
                            <br />
                            <span style={{ fontSize: "18px" }}>
                              {cards.price}
                              /month
                            </span>
                          </MDBCardText>
                          <Link onClick={() => { bookings.status ? alert("you get call from the booking department soon...") : alert("this funtion working only after admin is confirmed your request, hope you get soon..thank you") }}>
                            <span style={{
                              border: '1px solid navy',
                              padding: "6px 9px",
                              color: 'navy'
                            }}>{bookings.status ? bookings.status : <span>Pending</span>}</span>{" "}
                          </Link>
                          {bookings.status ? (<Link onClick={handleView}>
                            <span style={{
                              border: '1px solid navy',
                              padding: "6px 9px",
                              color: 'navy'
                            }} >view</span>
                          </Link>) : (<Link onClick={handleDelete}>
                            <span style={{
                              border: '1px solid navy',
                              padding: "6px 9px",
                              color: 'navy'
                            }} >cancel</span>
                          </Link>)}
                        </MDBCardBody>
                      </MDBCol>
                    </MDBRow>
                    </MDBCard>
                       ) }
              </div>
            </div>
          </div>
          {/* <div id="buttondiv">
            <CustomButton buttonText="Back Home" />
            <CustomButton buttonText="Log Out" />
          </div> */}
        </div>

        <Link to={'/profil'}><center><button type="button" class="btn btn-light"><span style={{ color: '#128650', fontWeight: 'bold' }}>BACK</span></button></center></Link><br /><br />
        <footer style={{ backgroundColor: '#128650' }}></footer>
        <footer style={{ backgroundColor: '#128650' }}>
          <br /><br /><br /><br />
        </footer>

      </div>

    </div>
  )
}

export default Mybookinghundai