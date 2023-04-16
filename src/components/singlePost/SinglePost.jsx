import { useContext, useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import "./singlePost.css";
import PostContext from '../../context/PostContext';
import SimpleDateTime  from 'react-simple-timestamp-to-date';

export default function SinglePost() {
  let [Post, setPost] = useState({
    title:"",
    post:"",
    createdAt:""
  })
  let {getPostById} = useContext(PostContext)
  let params = useParams()
  useEffect(() => {
    async function fetch() {
        await getPostById(params.postId)
            .then((post) => setPost(post))
    }
    fetch()
}, [params.postId]);
let {title, post, createdAt} = Post

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          {title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author: Dan Lemaire
          </span>
          <span>
        <SimpleDateTime dateFormat="MDY" dateSeparator="/"  showTime='0'>{createdAt}</SimpleDateTime>
        <hr/>
        <SimpleDateTime dateFormat="MDY" showDate='0' timeSeparator=":" meridians="1">{createdAt}</SimpleDateTime>
        </span>
        </div>
        <p className="singlePostDesc">
         {post}
        </p>
      </div>
    </div>
  );
}