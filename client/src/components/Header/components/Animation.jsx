// import React, { useState } from "react"
// // import Typewriter from 'typewriter-effect/dist/core';
// import Typewriter from 'typewriter-effect';
// import "./Animation.css"
// const Animation=()=>{
//     const [state]=useState({
//         title: "web developer",
//         titletwo:"competitve programeer",
//         titlethree:"python",
//         titlefour:"designer"
//     })
//     return (
//         <div className="animation_section">
//          <h2 className="typing_static">
//           <div>Tinu kumar</div>
//          </h2>
//          <div className="text">
         
//          <Typewriter  
//           options={{
//             autoStart:true,
//           loop: true,
//           delay:40,
//           strings:[
//             "web developer",
//             "competitve programeer",
//             "python",
//             "designer",

//           ],
//         }}
//       />
//          </div>
        
//         </div>
//     )
// }
// export default Animation;



import React from "react";
import "./Animation.css";
const  Animation=()=>{
  return(
    <>
   
    <div class="wrapper">
    <div class="static-txt">I'm a</div>
    <ul class="dynamic-txts">
      <li><span>web developer</span></li>
      <li><span>web designer</span></li>
      <li><span>Tech-writer</span></li>
      <li><span>Freelancer</span></li>
    </ul>
  </div>
    

  
    </>
  )
}

export default Animation;






















