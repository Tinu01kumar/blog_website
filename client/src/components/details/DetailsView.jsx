import { useEffect, useState, useContext } from "react";
import { Box, Typography, styled } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { API } from "../../service/api";
import "../../App.css"
import { DataContext } from "../../context/DataProvider";
import Comments from "./comments/Comments";
const Container = styled(Box)(({ theme }) => ({
  margin: "50px 100px",
  [theme.breakpoints.down("md")]: {
    margin: 0,
  },
}));

const Image = styled("img")({
  display:"block",
  width: "60%",
  marginTop:"23px",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom:"23px",
});

const EditIcon = styled(Edit)`
  margin: 5px;
  padding: 5px;

  
`;

const DeleteIcon = styled(Delete)`
  margin: 5px;
  padding: 5px;
  color: "red";
`;

const Heading = styled(Typography)`
  font-size: 38px;
  font-weight: 600;
  text-align: center;
  margin: 90px 0 10px 0;
  word-break: break-word;
`;

const Author = styled(Box)`
  color: #878787;
  margin: 20px 0;
  display: flex;
`;

const Description = styled(Typography)`
  word-break: break-word;
`;

const DetailsView = () => {
  const [isHovering, sethovering] = useState(false);
  const [editHovering, setedithovering] = useState(false);

  const { id } = useParams();
  const { account } = useContext(DataContext);
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const url = post.picture
    ? post.picture
    : "https://smartblogger.com/wp-content/uploads/2222/12/blog-design-fb.png";

    
  const handleMouseEnter = () => {
    sethovering(true);
 
  };

  const handleMouseLeave = () => {
    sethovering(false);
  
  };

  const handleEditMouseEnter = () => {
  
    setedithovering(true);
  };

  const handleEditMouseLeave = () => {

    setedithovering(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getPostById(id);
      if (response.isSuccess) {
        setPost(response.data);
      }
    };
    fetchData();
  }, []);

  const deleteBlog = async () => {
    let response = await API.deletePost(post._id);
    if (response.isSuccess) {
      navigate("/");
    }
  };

  return (
    <div style={{ margin:'9px' }}>

      <Container>
               <Heading>{post.title}</Heading>
        <Image  className="Imagepart" src={url} alt="blog" />
        <Box style={{ display:'flex', justifyContent:"center" , alignContent:"center" ,alignItems:"center" ,   }}>
          {account.username === post.username && (
            <>
              <Link to={`/update/${post._id}`}>
            
                <EditIcon style={{color : editHovering ? "red" : "blue" , float:"center"}}  onMouseEnter={handleEditMouseEnter}
                onMouseLeave={handleEditMouseLeave}/>{" "}
              </Link>

              <DeleteIcon
                onClick={() => deleteBlog()}
                style={{ 
                
                  color: isHovering ? "aqua" : "red",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
             
            
            </>
          )}
       
        </Box>
     
        <Author>
          <Typography>
            {" "}
            Author:
            <Box component="span" style={{ fontWeight: 600 }}>
              {post.username}
            </Box>
            <Typography style={{ marginLeft: "auto" }}>
              {new Date(post.createdDate).toDateString()}
            </Typography>
          </Typography>
        </Author>

        <Description style={{backgroundColor:"#eee" ,padding:"23px"}}>{post.description}</Description>
        <Comments post={post} />
      </Container>
    </div>
  );
};

export default DetailsView;
