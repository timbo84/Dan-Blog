import React from 'react';
import PostContext from "../../context/PostContext";
import "./post.css";

export default function Post() {
  return (
<PostContext.Consumer>
{
  ({postList}) => {
    return <>
      {postList.map((p) => {
        return (
          <div className="post" key={p.postId}>
      
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <span className="link" to="/posts?cat=Music">
              Music
            </span>
          </span>
          <span className="postCat">
            <span className="link" to="/posts?cat=Music">
              Life
            </span>
          </span>
        </div>
        <span className="postTitle">
          <span to="/post/abc" className="link">
            {p.title}
          </span>
        </span>
        <hr />
        <span className="postDate">{p.createdAt}</span>
      </div>
      <p className="postDesc">
        {p.post}
      </p>
    </div>
        )
      })}
    </>
  }
}
    
    </PostContext.Consumer>
  );
}
