import React from "react";
import { Box, Typography, styled ,Button} from "@mui/material";
import { Link, useSearchParams } from 'react-router-dom';

import { categories } from '../../constants/data';
import { textAlign } from "@mui/system";

// const Image=styled(Box)`
//    background:url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg);
//  center/55% repeat-x #000;
//  width:100%;
//  height:50vh;
//  display:flex;
//  align-items:center;
//  justify-content:center;
//  flex-direction:columns

// `
// const Heading=styled(Typography)`
// font-size:70px
// color:#FFFFFF;
// line-height:1;

// `
// const SubHeading=styled(Typography)`
//   font-size:20px;
//   background:#FFFFFF;

// `
const StyledButton = styled(Button)`
    margin: 20px;
    width: 85%;
    background: #6495ED;
    color: #fff;
    text-decoration: none;
`;
const Banner = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
url(https://media.istockphoto.com/photos/mock-up-computer-laptop-croissant-and-coffee-cup-on-wooden-table-in-picture-id1336815243)`,

          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          postion: "relative",

          width: "100%",
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "columns",

          color: "white",
        }}
      >
        <div style={{
      
        margin: "20px",
  
       
        color: "#fff",
        textDecoration: "none  " ,
         textAlign:"center" ,
           justifyContent:"center"  }}>
          <div>
            <h1>Show case your😎 Knowledge </h1>
            <h1>by writing Blogs🖋📚</h1>
          </div>
          <div>
          
          <Link to={`/create?category=${category || ''}`} style={{ textDecoration: 'none' }}>
                <StyledButton style={{backgroundColor:"yellow" , color:"black"}}>Create Blog</StyledButton>
            </Link>
            </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
