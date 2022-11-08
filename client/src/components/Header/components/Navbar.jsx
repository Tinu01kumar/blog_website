    import React, { useState } from "react"
    import "./Navbar.css"
    import  tinu from "./images/tinu.png"
    import aboutimg from "./images/avatar1.png"
    import Animation from "./Animation"
    import LinkedInIcon from '@mui/icons-material/LinkedIn';
    import { Link } from "react-router-dom"
    import GitHubIcon from '@mui/icons-material/GitHub';
 
    const Navbar=()=>{
        const [Click ,setClick]=useState(false);
        const handelClick=()=>{
            setClick(!Click);
        }
        const url="https://drive.google.com/file/d/1Evb4wzl3xa84CDOrLwWRXiooKMNc5ulQ/view?usp=sharing"
    
        return(
            <>
            
         

            <div className="navbarimplement" style={{padding:"23px"}}>
            
          
        <div className="main_section">
                    <div className="animation">
                       
                <h1 ><span>Tinu </span>kumar</h1>

         <Animation></Animation>
        
         </div>
         
         <img  className="tinu_img"  src={tinu}></img>
        </div>    
        
        </div>

        <div style={{backgroundColor:"aqua"}} className="about_section">
        <div className="about_width">
 <div className="title">About me </div>
 
 
     <div  className="about_img"><img   style={{backgroundColor:"aqua"}}  src={aboutimg}></img> </div>


     
    <div className="about_content" style={{wordSpacing:"7px"}}>
            <p>My name is  <span>TINU KUMAR.
            </span> I am doing BTECH In Computer Science Engineering With Specilization In Data Science.I have Invested Almost 2 and Half Year in Developing My Software Skills which includes <span style={{fontWeight:"800"}}> , C , C++ JAVA , JAVASCRIPT ,  python , R , HTML , CSS , REACT , MONGODB , NODEJS ,BOOTSTRAP</span> and also i am on the path of <span style={{fontWeight:"800"}} >Machine Learning</span>. I have devoted my maximum time with web development and data structure and algorithm . I use this skill to build various project but my major project till now is <span  style={{fontWeight:"800"}}>netflex clone and blogging website  </span>. Coming to my extra curricular activity i like panting , bike riding , playing basketball ,also partcipated in  college fest ,competition and workshop. <span> I consider myself as a very focussed person . I always work for my goal in efficient manner and  I am self motivated and result driven individual with strong academic credentials and highly engage in online competition like codechef ,hackerearth  ,leetcode and  also have diverse background of extra  co-curricular activities. Posses strong leadership skills along with the ability to deal creativity and practically with issues. </span> </p>
       
     </div>
 </div>
 <div className="secondtitle">Contact me </div>
        <ul className="secondtitle_ul" style={{display:"flex" , justifyItems:"center" , justifyContent:"center" ,padding:"3px"  ,margin:"30px" , listStyleType:"none"}}>
         <a target="_blank" href="https://www.linkedin.com/in/tinu--kumar941/" >  <li style={{paddingRight:'23px'}}>
         <LinkedInIcon  sx={{fontSize:50}} color="primary" />
           </li> </a> 
           <a target="_blank" href="https://github.com/Tinu01kumar">  <li style={{paddingLeft:'23px'}} >
           <GitHubIcon  sx={{fontSize:50}} />
            </li></a>
         
        </ul>
    </div>





            </>
        )
    }
    export default Navbar;