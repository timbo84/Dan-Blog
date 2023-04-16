import React, { useContext, useState, useEffect } from 'react';
import { Button } from "react-bootstrap"
import { useNavigate, Link } from "react-router-dom";
import PostContext from "../../context/PostContext";
import UserContext from "../../context/UserContext";
import Login from "../../pages/login/Login";
import SimpleDateTime  from 'react-simple-timestamp-to-date';
import "./post.css";

export default function Post() {
  let navigate = useNavigate()
  let {deletePost} = useContext(PostContext)
  let { getUserById } = useContext(UserContext);

  const [user, setUser] = useState({
    userId: 0,
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    createdAt: "",
    updatedAt: "",
  });

  useEffect(() => {
    async function fetch() {
      await getUserById(1).then((user) =>
        setUser(user)
      );
      console.log(user);
    }
    fetch();
  }, [Login]);

  function handleDeletePost(postId) {
    deletePost(postId)
    navigate('/')
    window.location.reload()
}

let Auth = localStorage.getItem("username");

  return (
<PostContext.Consumer>
{
  ({postList}) => {
    return <>
      {postList.map((p) => {
        if (Auth === user.username){

        
        return (
          <div className="post" key={p.postId}>
      
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to={`/post/${p.postId}`}>
              Music
            </Link>
          </span>
          <span className="postCat">
            <span className="link" to="/posts?cat=Music">
              Life
            </span>
          </span>
        </div>
        <span className="postTitle">
          <span to="/post/abc">
            {p.title}
          </span>
        </span>
        <hr />
        <span className="postDate">
        <SimpleDateTime dateFormat="MDY" dateSeparator="/"  showTime='0'>{p.updatedAt}</SimpleDateTime>
        <hr/>
        <SimpleDateTime dateFormat="MDY" showDate='0' timeSeparator=":" meridians="1">{p.updatedAt}</SimpleDateTime>
        </span>
      </div>
      <p className="postDesc">
        {p.post}
      </p>
      <Link to={`/post/${p.postId}/Edit`} className="btn btn-primary mx-3">Edit</Link>
      <Button variant="danger" onClick={handleDeletePost.bind(this, p.postId)}>Delete</Button>
    </div>
        )}
        else {
          return (
          <div className="post" key={p.postId}>
      
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to={`/post/${p.postId}`}>
              Music
            </Link>
          </span>
          <span className="postCat">
            <span className="link" to="/posts?cat=Music">
              Life
            </span>
          </span>
        </div>
        <span className="postTitle">
          <span to="/post/abc">
            {p.title}
          </span>
        </span>
        <hr />
        <span className="postDate">
        <SimpleDateTime dateFormat="MDY" dateSeparator="/"  showTime='0'>{p.updatedAt}</SimpleDateTime>
        <hr/>
        <SimpleDateTime dateFormat="MDY" showDate='0' timeSeparator=":" meridians="1">{p.updatedAt}</SimpleDateTime>
        </span>
      </div>
      <p className="postDesc">
        {p.post}
      </p>
    </div>
        )
        }
      })}
    </>
  }
}
    
    </PostContext.Consumer>
  );
}
