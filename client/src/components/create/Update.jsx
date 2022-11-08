import React, { useState, useEffect, useContext } from 'react';

import { styled, Box, TextareaAutosize, Button, InputBase, FormControl  } from '@mui/material';
import { AddCircle as Add } from '@mui/icons-material';
import { useNavigate, useLocation ,useParams } from 'react-router-dom';
import ImageIcon from '@mui/icons-material/Image';

import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Container = styled(Box)(({ theme }) => ({
    margin: '50px 30px',
 
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
   
}));

const Image = styled('img')({
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
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: '',
    createdDate: new Date()
}

const Update = () => {
    const navigate = useNavigate();
    const location = useLocation();
       const {id}=useParams();
    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState('');
    const { account } = useContext(DataContext);

    const url = post.picture ? post.picture : 'https://smartblogger.com/wp-content/uploads/2222/12/blog-design-fb.png';
    

    useEffect(()=>{
       const fetchData=async()=>{
         let response=await API.getPostById(id);
         if(response.isSuccess){
            setPost(response.data)
         }
       }
     fetchData();
    },[])


    useEffect(() => {
        const getImage = async () => { 
            if(file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                
                const response = await API.uploadFile(data);
                post.picture = response.data;
            }
        }
        getImage();
        post.categories = location.search?.split('=')[1] || 'All';
        post.username = account.username;
    }, [file])

    const updateBlogPost = async () => {
       let response= await API.updatePost(post);
        if(response.isSuccess)
        {
            navigate(`/details/${id}`);

        }
    }

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    return (
        <div style={{margin:"0px" }}>
        
      
        <Container>
        <Image src={url} alt="post" />

        <StyledFormControl>
          <label htmlFor="fileInput">
            <ImageIcon fontSize="large" style={{color:"#A149FA"}} />
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
                <InputTextField onChange={(e) => handleChange(e)}  value={post.title}    name='title' placeholder="Title" />
                <Button onClick={() => updateBlogPost()} variant="contained" style={{backgroundColor:"yellow" , color:"black"}}>update</Button>
            </StyledFormControl>
            <hr style={{marginTop:"23px" , color:"red", backgroundColor:"red" , padding:"1px"}}></hr>

            <Textarea
                rowsMin={5}
                style={{backgroundColor:"#eee" , position:"center" , padding:"22px 0px " , paddingLeft:"10px" , paddingRight:"8px"}}
                placeholder="Tell your story..."
                name='description'
                onChange={(e) => handleChange(e)} 
                value={post.description}
            />
        </Container>
        </div>
    )
}

export default Update;