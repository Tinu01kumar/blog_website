//router is a api lik
//facebook.com
//this is url but when we type
//facebook.com/user
//user is a end point and this can we help by router 
//here user is an api

import express from 'express';

import { singupUser , loginUser , logoutUser } from '../Controller/user-controller.js';
import { uploadImage , getImage  } from '../Controller/image-controller.js';
import { createPost , getAllPosts ,getPost ,updatePost,deletePost } from '../Controller/post-controller.js';
import { authenticateToken , createNewToken} from '../Controller/jwt-controller.js';
// import upload from '../utils/upload.js'

import { deleteComment, getComments, newComment } from '../Controller/comment-controller.js';
import upload from '../utils/upload.js'
const router=express.Router();

router.post('/signup',singupUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.post('/token', createNewToken);
router.post('/file/upload' , upload.single('file') , uploadImage);
router.get('/file/:filename',getImage);
router.post('/create', authenticateToken, createPost);
router.get('/posts', authenticateToken ,getAllPosts);
router.get('/post/:id',authenticateToken ,getPost)
router.put('/update/:id', authenticateToken , updatePost );
router.delete('/delete/:id',authenticateToken,deletePost);
router.post('/comment/new' , authenticateToken , newComment);
router.get('/comments/:id',authenticateToken , getComments);
router.delete('/comment/delete/:id',authenticateToken,deleteComment);


export default router;