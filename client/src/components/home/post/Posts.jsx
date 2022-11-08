import React from "react";

import { useEffect, useState } from "react";

import { Grid, Box, autocompleteClasses } from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";

// import { getAllPosts } from '../../../service/api';
import { API } from "../../../service/api";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
//components
import Post from "./Post";

const Posts = () => {
  const [posts, getPosts] = useState([]);

  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getAllPosts({ category: category || "" });
      if (response.isSuccess) {
        getPosts(response.data);
      }
    };
    fetchData();
  }, [category]);

  return (
    <>
      {posts?.length ? (
        posts.map((post) => (
          <Grid item lg={3} sm={4} xs={12}>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={`details/${post._id}`}
            >
              <Post post={post} />
            </Link>
          </Grid>
        ))
      ) : (
        <Box
          style={{
            color: "878787",
            paddingTop:"40px",
            margin: "auto",
            fontSize: 20,
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            AlignItems: "center",
          }}
        >
          <div
            style={{
             AlignItems:"center",
             justifyContent:"center",
             margin:"auto"
              
            }}
          >
            There is no blog available on this topic
          </div>
        </Box>
      )}
    </>
  );
};

export default Posts;
