import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, useParams } from "react-router-dom";
// import "./Userview.css";
import {  HiArchiveBoxXMark } from "react-icons/hi2";
import { AiFillEye } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";


function Tataprodectview() {
  const [tataproduct, setTataproduct] = useState([]);
  const [deleteTataProduct, setDeleteTataProduct] = useState([]);
  const { _id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:5000/tataview")
      .then((response) => setTataproduct(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const tatadelete = (_id) => {
    axios
      .delete("http://localhost:5000/deletetata/" + _id)
      .then(() => {
        setDeleteTataProduct(tataproduct.filter((del) => del._id !== _id));
        alert(`Product deleted successfully`);
      })
      .catch((error) => console.error("Error deleting product:", error));
  };  
  return (
    <div>
        <div> <Link to={'/addtata'}><center><button  type="button" class="btn btn-light"><span style={{color:'#128650',fontWeight:'bold'}}>ADD PRODECT</span></button></center></Link><br /><br /></div>
        
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
        <h2 style={{ textAlign: "center",color:'#128650' }}>TATA PRODECT</h2>
        <br />
        <div>
          <table class="table table-light">
            <thead>
              <tr>
                <th> #</th>
                <th> car name</th>
                <th> model</th>
                <th> color</th>
                <th> price</th>
                 <th>description</th>
                <th> Action</th>
              </tr>
            </thead>
            {tataproduct.map((i, index) => (
              <tbody>
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{i.name}</td>
                  <td>{i.model}</td>
                  <td>{i.color}</td>
                  <td>{i.price}</td>
                  <td>{i.description}</td>
                  <td>
                  <Link to={`/admintatadetilpage/${i._id}`}>  <button style={{border:'none',marginRight:'10px'}} ><AiFillEye /></button></Link>
                  <Link to={`/edittata/${i._id}`}><button style={{border:'none',marginRight:'10px'}} > <AiFillEdit /></button> </Link>
                  <button style={{border:'none'}} onClick={() => tatadelete(i._id)}><HiArchiveBoxXMark /><i class="fas fa-trash"></i></button>
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
    <div> <Link to={'/prodectview'}><center><button  type="button" class="btn btn-light"><span style={{color:'#128650',fontWeight:'bold'}}>BACK</span></button></center></Link><br /><br /></div>
    </div>
      
    </div>

  )
  }
export default Tataprodectview