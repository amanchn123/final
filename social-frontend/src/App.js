import "./App.css";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Auth from "./pages/auth";
import { ChakraProvider, LinkBox } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Profilepage from "./pages/profile/profilePage.js";
import { AiFillHome } from "react-icons/ai";
import { ImSearch } from "react-icons/im";
import { IoMdCompass } from "react-icons/io";
import { BsCameraReels } from "react-icons/bs";
import { BiMessageRoundedDots } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";
import { BsPlusSquare } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { CgMenu } from "react-icons/cg";
import Nav from 'react-bootstrap/Nav';
import Profile from "./components/profile/profile";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logosearch from "./components/profile/logosearch";

import Modal from 'react-bootstrap/Modal';
import CreatePost from "./createPost";
import Allstory from "./components/postSide/allstory";
import Sidebar from "./sidebar";
import axios from "axios";



function App() {
  const [log,setLog]=useState(false)
  let checkUser = useSelector((state) => state.ReducerLogin.authdata);
 const verify=async()=>{
  
  const tok=await JSON.parse(localStorage.getItem("Auth"))?JSON.parse(localStorage.getItem("Auth")).token:null
  console.log("tooooo",tok)
  
  //  try{
  //   const response=await axios.get(`http://localhost:5000/apii/loginLogout`,{
  //     headers:{
  //       authorization:tok
  //    }
  //   })

    if(tok ){
      setLog(true)
    }else{
      setLog(false)
    }
  //  }catch (error){
  //   console.log(error)
  //  } 

 }

 console.log('loggggggggggggggggg',log)

  const navigate=useNavigate()


  
  const [showcreate, setShowcreate] = useState(false);
  const handleClosecreate = () => setShowcreate(false);
  const handleShowcreate = () => setShowcreate(true);
  

  const options=  {
    name: 'Enable both scrolling & backdrop (default)',
    scroll: true,
    backdrop: false,
  }

  const name="Enable both scrolling & backdrop" 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  

 


   useEffect(()=>{
     verify()
   })


  return (
 <div style={{height:"100vh",width:"100vw"}}>
          <ChakraProvider>
          <div className="row" style={{position: "fixed",width:"100vw",margin:"0%",padding:"0%",display:"block"}}>
          {log ? (
        <Sidebar />
      ) : (
        ""
      )}
          </div>
          <div onClick={handleClose} className="col-sm-10" style={{backgroundColor:"black",height:"100vh", marginLeft: "15.8%",position:"absolute"}}>
            <Routes>
              <Route
                path="/"
                element={
                  log ? <Navigate to="home" /> : <Navigate to="auth" />
                }
              />
              <Route
                path="/home"
                element={log ? <Home /> : <Navigate to="../auth" />}
              />

              <Route
                path="/auth"
                element={log ? <Navigate to="../home" /> : <Auth />}
              />

              <Route
                path="/profilepage"
                element={
                  log ? <Profilepage /> : <Navigate to="../auth" />
                }
              />
              <Route
                path="/search"
                element={
                  log ? <Profile /> : <Navigate to="../auth" />
                }
              />

              <Route 
                path="/story"
                element={
                  log?<Allstory />:<Navigate to='../auth' />
                }
              />
              

              <Route
                path="*"
                element={
                  log ? <Navigate to="/" /> : <Navigate to="../auth" />
                }
              />
            </Routes>
            </div>

          </ChakraProvider>
          </div>  
      
  );
}

export default App;
