import axios from "axios";
import PostContext from "./PostContext";
import { useState, useEffect } from "react";
//y
export const PostProvider = (props) => {
    const [ postList, setPostList ] = useState([]);
    const baseUrl =  "http://localhost:8800/api/posts/";

useEffect(() => {
    async function getAllPost() {
      await  refreshPostList() //h
    }
    getAllPost()
  }, []);
//y
  function refreshPostList() { //h
    return axios.get(baseUrl)
      .then(response => {
        setPostList(response.data) //h
        console.log(response.data)
      })
  }
//y
    async function getAllPost() {
        const response = await axios.get(baseUrl);
        console.log(response.data)
        return setPostList(response.data); //h
    }
//y title post
    async function createPost(title, post) {       
        let Post = {title, post};
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myUserToken')}`
        };
        console.log(myHeaders);
        const response = await axios.post(baseUrl, Post, { headers: myHeaders });
        console.log('success')
        refreshPostList(); //h
        return await new Promise(resolve => resolve(response.data));
    }
    //y
    async function  getPostById(postId) {
        
        return axios.get(baseUrl + postId).then(response => {
          console.log(response.data)
          return new Promise(resolve => resolve(response.data));
        })
    }

    function searchPost(search) {

        return axios.get(`${baseUrl}Search/${search}`)
          .then(response =>
            new Promise((resolve) => resolve(response.data))
          )
          .catch((error) =>
            new Promise((_, reject) => reject(error.response.statusText))
          )
      }

    async function updatePost(post) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myUserToken')}`
        };
        const response = await axios.put(`http://localhost:8800/api/posts/${post.postId}`, post, { headers: myHeaders });
        refreshPostList();
        
        return await new Promise(resolve => resolve(response.data));
    }

//y
    async function deletePost(postId) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myUserToken')}`
        };
        const response = await axios.delete(baseUrl + postId, { headers: myHeaders });
        
        return await new Promise(resolve => resolve(response.data));
    }

    return (
        <PostContext.Provider value={{
            postList, //h
            getPostById,
            getAllPost,
            createPost,
            updatePost,
            searchPost,
            deletePost
        }}>
            { props.children }
        </PostContext.Provider>
    )
}