import React, { useState, useEffect, useContext } from "react";

import {
  styled,
  Box,
  TextareaAutosize,
  Button,
  InputBase,
  FormControl,
} from "@mui/material";

import ImageIcon from '@mui/icons-material/Image';
import { useNavigate, useLocation } from "react-router-dom";

import { API } from "../../service/api";
import { DataContext } from "../../context/DataProvider";
import { red } from "@mui/material/colors";

const Container = styled(Box)(({ theme }) => ({
  margin: "50px 30px",
  [theme.breakpoints.down("")]: {
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

const StyledFormControl = styled(FormControl)`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
`;

const InputTextField = styled(InputBase)`
  flex: 1;
  margin: 0 30px;
  font-size: 25px;
`;

const Textarea = styled(TextareaAutosize)`
  width: 97%;
  border: none;
  margin-top: 50px;
  font-size: 18px;
  &:focus-visible {
    outline: none;
  }
`;

const initialPost = {
  title: "i",
  description: "i",
  picture: "",
  username: "",
  categories: "",
  createdDate: new Date(),
};
let x;
const CreatePost = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [post, setPost] = useState(initialPost);
  const [file, setFile] = useState("");
  const { account } = useContext(DataContext);




  const url = post.picture
    ? post.picture
    : "https://www.motocms.com/blog/wp-content/uploads/2021/04/Website-Builders-Page.jpg";

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await API.uploadFile(data);
        post.picture = response.data;
      }
    };
    getImage();
    post.categories = location.search?.split("=")[1] || "All";
    post.username = account.username;
  }, [file]);

  const savePost = async () => {
    if (x ===1) {
      await API.createPost(post);
      navigate("/");
    } else {
      alert("Title and description should be filled");
    }
    x=0;
  };

  const handleChange = (e) => {
    if(e.target.name!=="i")
    {
        if(e.target.description!=="i")
        {
            setPost({ ...post, [e.target.name]: e.target.value });
            x=1;
        }
    }
    
  
  };

  return (
    <Container>
      <Image   src={url} alt="post" />

      <StyledFormControl>
        <label  htmlFor="fileInput">
          <ImageIcon fontSize="large" style={{color:"#A149FA"}} />
        </label>
        <input
           
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <InputTextField
          onChange={(e) => handleChange(e)}
          name="title"
          placeholder="Title"
          style={{color:"deep black"}}
        />
    
        <Button className="btn" onClick={() => savePost()}  style={{color:"black" , backgroundColor:"#F7EC09"}} >
          Publish
        </Button>
      </StyledFormControl>
  <hr style={{marginTop:"23px" , color:"red", backgroundColor:"red" , padding:"1px"}}></hr>


      <Textarea style={{backgroundColor:"#eee" , position:"center" , padding:"22px 0px " , paddingLeft:"10px" , paddingRight:"8px"}}
        rowsMin={5}
        placeholder="Write your blog..."
        name="description"
        onChange={(e) => handleChange(e)}
      />
    </Container>
  );
};

export default CreatePost;
