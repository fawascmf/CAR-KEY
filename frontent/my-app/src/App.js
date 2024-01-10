import Home from "./Home";
import Login from "./Login";
import Nb from "./Nb";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signuppage from "./Signuppage";
import Adminlogin from "./Adminlogin";
import Adminmainpage from "./Adminmainpage";
import Firstpage from "./Firstpage";
import Aboutus from "./Aboutus";
import Contact from "./Contact";
import Terms from "./Terms";
import Prodectview from "./Prodectview";
import Userview from "./Userview";
import Tata from "./Tata";
import Suzuki from "./Suzuki";
import Hundai from "./Hundai";
import Profil from "./Profil";
import Tataprodectview from "./Tataprodectview";
import Suzukiprodectview from "./Suzukiprodectview";
import Hundaiprdectview from "./Hundaiprdectview";
import Addtataprodect from "./prodect/Addtataprodect";
import Addsuzukiprodect from "./prodect/Addsuzukiprodect";
import Addhundaiprodect from "./prodect/Addhundaiprodect";
import Mybooking from "./Mybookinghundai";
import Adminbookingdetil from "./Adminbookingdetil";
import Prodectdetilviewpage from "./Prodectdetilviewpage";
import Edithundai from "./Edithundai";
import Editsuzuki from "./Editsuzuki";
import Edittata from "./Edittata";
import Tatadetilpage from "./Tatadetilpage";
import Hundaidetilpage from "./Hundaidetilpage";
import Suzukidetilpage from "./Suzukidetilpage";
import Bookingformhundai from "./Bookingformhundai";
import Bookingformsuzuki from "./Bookingformsuzuki";
import Bookingformtata from "./Bookingformtata";
import Admintatadetilpage from "./Admintatadetilpage";
import Adminhundaidetilpage from "./Adminhundaidetilpage";
import Adminsuzukidetilpage from "./Adminsuzukidetilpage";



function App() {
  return (
    <div>
      <BrowserRouter>

      <Routes>
        
          <Route path="/" element={<Firstpage/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signuppage/>}></Route>
          <Route path="/adminlogin" element={<Adminlogin/>}></Route>
          <Route path="/adminmainpage" element={<Adminmainpage/>}></Route>
          <Route path="/about" element={<Aboutus/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/terms" element={<Terms/>}></Route>
          <Route path="/prodectview" element={<Prodectview/>}></Route>
          <Route path="/userview" element={<Userview/>}></Route>
          <Route path="/tata" element={<Tata/>}></Route>
          <Route path="/suzuki" element={<Suzuki/>}></Route>
          <Route path="/hundai" element={<Hundai/>}></Route>
          <Route path="/profil" element={<Profil/>}></Route>  
          <Route path="/tataprodectview" element={<Tataprodectview/>}></Route>
          <Route path="/suzukiprodectview" element={<Suzukiprodectview/>}></Route>
          <Route path="/hundaiprodectview" element={<Hundaiprdectview/>}></Route>
          <Route path="/addtata" element={<Addtataprodect/>}></Route>
          <Route path="/addsuzuki" element={<Addsuzukiprodect/>}></Route>
          <Route path="/addhundai" element={<Addhundaiprodect/>}></Route>
          <Route path="/profil" element={<Profil/>}></Route>
          <Route path="/mybooking" element={<Mybooking/>}></Route>
          <Route path="/adminbooking" element={<Adminbookingdetil/>}></Route>
          <Route path="/bookingformhundai/:id" element={<Bookingformhundai/>}></Route>
          <Route path="/bookingformsuzuki/:id" element={<Bookingformsuzuki/>}></Route>
          <Route path="/bookingformtata/:id" element={<Bookingformtata/>}></Route>
          <Route path="/prodectdetilviewpage" element={<Prodectdetilviewpage/>}></Route>
          <Route path="/edithundai/:id" element={<Edithundai/>}></Route>
          <Route path="/editsuzuki/:id" element={<Editsuzuki/>}></Route>
          <Route path="/edittata/:id" element={<Edittata/>}></Route>
          <Route path="/tatadetilpage/:id" element={<Tatadetilpage/>}></Route>
          <Route path="/hundaidetilpage/:id" element={<Hundaidetilpage/>}></Route>
          <Route path="/suzukidetilpage/:id" element={<Suzukidetilpage/>}></Route>
          <Route path="/admintatadetilpage/:id" element={<Admintatadetilpage/>}></Route>
          <Route path="/adminhundaidetilpage/:id" element={<Adminhundaidetilpage/>}></Route>
          <Route path="/adminsuzukidetilpage/:id" element={<Adminsuzukidetilpage/>}></Route>


      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
