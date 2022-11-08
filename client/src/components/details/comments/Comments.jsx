import { useState, useEffect, useContext } from 'react';
import { Box, TextareaAutosize, Button, styled } from '@mui/material';

import { DataContext } from '../../../context/DataProvider';
import Avatar from 'react-avatar';
import { API } from '../../../service/api';

//components
import Comment from './Comment';

const Container = styled(Box)`
    margin-top: 100px;
    display: flex;
`;

const Image = styled('img')({
    width: 50,
    height: 50,
    borderRadius: '50%'
});

const StyledTextArea = styled(TextareaAutosize)`
    height: px !important;
    width: 100%; 
    overflow:"auto";

    margin:  0 20px;
 outline:"none";
`;

const initialValue = {
    name: '',
    postId: '',
    date: new Date(),
    comments: ''
}
let x=0;
let firstname;
const Comments = ({ post }) => {
    const url = 'https://static.thenounproject.com/png/12017-200.png'
 
    const [comment, setComment] = useState(initialValue);
    
    const [comments, setComments] = useState([]);
    const [toggle, setToggle] = useState(false);
   
    const { account } = useContext(DataContext);

    firstname=account.username;
    useEffect(() => {
        const getData = async () => {
            const response = await API.getAllComments(post._id);
            if (response.isSuccess) {
                setComments(response.data);
            }
        }
        getData();
        x=0;
    }, [toggle, post]);

    const handleChange = (e) => {
       x=1;
        setComment({
            ...comment,
            name: account.username,
            postId: post._id,
            comments: e.target.value
        });
      
      
    }

    const addComment = async() => {
        (x===0) ? alert("post box should not be blank") : 
        await API.newComment(comment);
        setComment(initialValue)
        setToggle(prev => !prev);
        
    }
  
    return (
        <Box>
            <Container>
            <div style={{ color:"black"
            }}>
        <Avatar color={Avatar.getRandomColor('sitebase', ['red', 'green' ])  }  round={true}  size={"3rem"}   name={firstname} maxInitials={1}/>
            </div>
                <StyledTextArea 
                    rowsMin={1} 
                  style={{outline:"none" , borderWidth: "0 0 2px 0 " ,fontSize:"17px" }}
                    placeholder=" Add a Comments"
                    onChange={(e) => handleChange(e)} 
                    value={comment.comments}
                />
                <Button 
                    variant="contained" 
                  
                    size="medium" 
                    style={{ height: 40 , backgroundColor:"#F7EC09", color:"black"}}
                    onClick={(e) => addComment(e)}
                    
                >Post</Button>             
            </Container>
            <Box style={{marginBottom:"1.5rem"}}>
                {
                    comments && comments.length > 0 && comments.map(comment => (
                        <Comment comment={comment} setToggle={setToggle} />
                    ))
                }
            </Box>
        </Box>
    )
}

export default Comments;