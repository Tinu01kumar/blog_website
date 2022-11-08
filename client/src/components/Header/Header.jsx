
import { AppBar, Toolbar, styled, Button } from '@mui/material'; 
import { useContext } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../../App.css"
import Avatar from 'react-avatar'
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';
import Dropdown from "./Dropdown"
import React, { useLayoutEffect, useState } from "react";
import { height } from '@mui/system';
const Component = styled(AppBar)`
    background:#FFFFFF;
    color: black;

  
`;




const Image=styled("img")({
    height:'4rem',

   
    
})
const Container = styled(Toolbar)`
  display:flex;
  justify-Content:center;
  
    & > a {
        padding: 20px  26px;
        color: black;
        fontWeight:800;
        text-decoration: none;
    
        
    };
   
`

let w=window.innerWidth;

const useWindowSize = () => {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      const updateSize = () => {
        setSize([window.innerWidth, window.innerHeight]);
      };
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  };

const Header = () => {
    const url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuEo8-W552-DuOtwdy03GyE5sv6KkZArJRoVPWntbqQWXYVcjJhTbNqKcs6wlysBmlPlM&usqp=CAU";
      
      const [width, height] = useWindowSize();
  const {account}=useContext(DataContext);
  let firstname=account.username;
    const navigate = useNavigate();

    const logout = async () => navigate('/account');
        
    return (
      
       
       
        <Component >
        

            <Container  className='headernavlink'>
            {
                window.innerWidth < 460  ? <div></div>: <Image src={url} />
            }
           
                <Link className='link' to='/'>HOME</Link>
                <Link className='link' to='/about'>ABOUT</Link>
              
                <Link className='link' to='/login'>LOGOUT</Link>
        
                 <Dropdown className="drop" />
                 <div style={{padding:"17px"}}></div>
                 {
                    window.innerWidth < 540  ? <div></div> : 
                 
                   <div style={{paddingRight:".10rem"}}><Avatar color={Avatar.getRandomColor('sitebase', ['red', 'green'])  }  round={true}  size={"3rem"}   name={firstname} maxInitials={1}/></div>
                 
                 }
            </Container>
          
          
        </Component>
       
         
    )
}

export default Header;