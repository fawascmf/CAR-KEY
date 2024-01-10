import React, { useEffect, useState } from 'react';
import './profil.css';
// import CustomButton from '../../components/customButton/customButton';
import { Link, useNavigate } from 'react-router-dom';
import { MDBCard } from 'mdb-react-ui-kit';


function Profil() {
  const [datauser,setDatauser]=useState({})
  const navigate=useNavigate()
//  console.log(datauser)
useEffect(()=>{
const auth=localStorage.getItem('user');
try {
  const parsedAuth = JSON.parse(auth);
  if (parsedAuth) {
    setDatauser(parsedAuth);
  }
} catch (error) {
  console.error('Error parsing JSON from localStorage:', error);
}
}, []);
// console.log('Render UserData:', userData);
// console.log(auth)

  const mybooking=()=>{
    navigate(`/mybooking`);
  }
  return (
    <div>
       <div>
       <nav style={{backgroundColor:'#128650'}}>

<br /><br /><br />
</nav>
      <div id="mained">
        <div id="divmaine">     
          <div style={{
            float:'left',
            border:"1px solid black",
            textAlign:'center'}}>
          <button style={{
            borderStyle:'none',
            backgroundColor:'white',
            width:'250px',
            height:'50px',
             color:'#128650',
            fontWeight:'bold'
          }}>Profile</button></div>
          <div style={{
            border:"1px solid black",
            textAlign:'center',
          }}>
          <button onClick={mybooking} style={{
            borderStyle:'none',
            backgroundColor:'white',
            width:'250px',
            height:'50px',
            color:'#128650',
            fontWeight:'bold'
          }}>
            My Bookings
          </button></div>
<div style={{
  fontSize:'18px',
  marginTop:'2rem',
  fontWeight:'bold',
  color:'navy'
}}>
<span style={{
  marginTop:'15px',
  marginLeft:'2rem',
  color:'#128650',
  fontWeight:'bold'
}}>Personal Information</span>
</div>
          
          <div id="detaildiv">
            <MDBCard id='cardprofile' style={{width:'400px',marginTop:'1rem'}}>
            <h5 style={{
                  textAlign:'center',
                  color:'#128650',
                  fontWeight:'bold'
                }}>Profile Card</h5>
              <div style={{
                margin:'10px 0px 10px 2rem'
              }}>
                
              <span style={{
            fontWeight:'bold'}}>Name - {datauser.Logindtl ? datauser.Logindtl.firstname : 'N/A'}{" "}{datauser.Logindtl ?datauser.Logindtl.secondname:'N/A'}</span><br />
          <span style={{
            fontWeight:'bold'}}>Email - {datauser.Logindtl ? datauser.Logindtl.email : 'N/A'}</span><br />
              </div>
          
          </MDBCard>
      </div>
      </div>
     

          {/* <div id="buttondiv">
            <CustomButton buttonText="Back Home" />
            <CustomButton buttonText="Log Out" />
          </div> */}
        </div>
        <Link to={'/home'}><center><button  type="button" class="btn btn-light"><span style={{color:'#128650',fontWeight:'bold'}}>BACK</span></button></center></Link><br /><br />
    <footer style={{backgroundColor:'#128650'}}></footer>
        <footer style={{backgroundColor:'#128650'}}>
      <br /><br /><br /><br />
    </footer>
      </div>
    </div>
  )
}

export default Profil