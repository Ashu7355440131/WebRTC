// import React from 'react'
// import "../App.css";
// import { Link, useNavigate } from 'react-router-dom';

// export default function Landing() {
//   const router=useNavigate();
//   return (
//     <div className='landingPageContainer'>
//       <nav>
//       <div className='navHeader'>
//         <h2>WebRTC</h2>
//       </div>
//       <div className='navlist'>
//         <p onClick={()=>{
//           router("/aljk23")
//         }}>Join As Guest</p>
//         <p onClick={()=>{
//           router("/auth")
//         }} >Register</p>
//         <div onClick={()=>{
//           router("/auth")
//         }} role='button'>
//             <p>Login</p>
//         </div>
//       </div>
//       </nav>
//       <div className="landingMainContainer">
//         <div>
//             <h1><span style={{color:"#FF9839"}}>Connect </span>with your loved once</h1>
//             <p>Cover a distance by Video Call</p>
//             <div role='button'>
//                 <Link to={"/auth"}>Get Started</Link>
//             </div>
//         </div>
//         <div>
//             <img src='mobile.jpg' alt='mobile'></img>
//         </div>
//       </div>
//     </div>
//   )
// }

import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
export default function LandingPage() {
  const router = useNavigate();

  return (
    <div className="landingPageContainer">
      <nav>
        <div className="navHeader">
          <h2 style={{color:"black"}}>Zoom</h2>
        </div>
        <div className="navlist">
          <p style={{color:"black"}}
            onClick={() => {
              router("/aljk23");
            }}
          >
            Join as Guest
          </p>
          <p style={{color:"black"}}
            onClick={() => {
              router("/auth");
            }}
          >
            Register
          </p>
          <div
            onClick={() => {
              router("/auth");
            }}
            role="button"
          >
            <p>Login</p>
          </div>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1 style={{color:"black"}}>
            <span style={{ color: "#FF9839" }}>Connect </span>with your loved
            once
          </h1>
          <p style={{ color: "black" }}>Cover a distance by Video Call</p>
          <div role="button">
            <Link to={"/auth"} style={{ color: "black" }}>
              Get Started
            </Link>
          </div>
        </div>
        <div>
          <img src="/mobile.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
