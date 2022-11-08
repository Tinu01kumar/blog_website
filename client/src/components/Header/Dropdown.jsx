import React from "react"
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import "../../App.css"

import "../../App.css";
import { categories } from '../../constants/data';
import { Link ,useSearchParams} from 'react-router-dom';
import { red } from "@mui/material/colors";
const StyledMenu = styled((props) => (
  <Menu 
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0px',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));
const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;
export default function CustomizedMenus() {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="btndiv">
      <Button 
      className="btndesign"
      style={{backgroundColor:"aqua"  , color:"black" , padding:"6px" ,fontSize:"11px"} }
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
     
       
      
      >
       Categories
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
       
          <StyledLink to={"/"}>
          All Categories
      </StyledLink>
        </MenuItem>


          
          

      {
           
          categories.map(category=>(
            <MenuItem key={category.id} onClick={handleClose} disableRipple>
            <StyledLink to={`/?category=${category.type}`}>
            
              {category.type}
            </StyledLink>
  
         
            </MenuItem>
          ))
      }







      
      </StyledMenu>
    </div>
  );
}
