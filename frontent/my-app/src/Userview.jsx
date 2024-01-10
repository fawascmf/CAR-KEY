import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, useParams } from "react-router-dom";
// import "./Userview.css";
import {  HiArchiveBoxXMark } from "react-icons/hi2";


function Userview() {
  const [datauser, setDatauser] = useState([]);
  const [deleteuser, setDeleteuser] = useState([]);
  const { _id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:5000/userview")
      .then((val) => setDatauser(val.data));
    console.log("data");
  }, []);

  const userdelete= (_id) => {
    axios
      .delete("http://localhost:5000/userdelete/" + _id)
      .then((val) =>{
        setDatauser(datauser.filter((del)=>del._id !== _id))
      }  )
    if (deleteuser) {
      alert(`user ${datauser.name} deleted successfully`);
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
      <div className="viewusr">
        <h2 style={{ textAlign: "center",color:'#128650' }}>View User</h2>
        <br />
        <div>
          <table class="table table-light">
            <thead>
              <tr>
                <th> #</th>
                <th> First name</th>
                <th> Last name</th>
                <th> Email</th>
                <th> Action</th>
              </tr>
            </thead>
            {datauser.map((i, index) => (
              <tbody>
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{i.firstname}</td>
                  <td>{i.secondname}</td>
                  <td>{i.email}</td>
                  <td>
                    <center><button style={{border:'none'}} onClick={() => userdelete(i._id)}><HiArchiveBoxXMark /><i class="fas fa-trash"></i></button></center>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <br />
        <br />
      </div>
    </div>
    <div> <Link to={'/adminmainpage'}><center><button  type="button" class="btn btn-light"><span style={{color:'#128650',fontWeight:'bold'}}>BACK</span></button></center></Link><br /><br /></div>
    </div>
  )
}

export default Userview