import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      
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
            Lorem ipsum dolor sit amet
          </span>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );
}
