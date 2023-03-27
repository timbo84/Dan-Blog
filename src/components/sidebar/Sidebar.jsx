
import "./sidebar.css";

export default function Sidebar() {
    return (
      <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img className="topImg" src={require('../../Dan-photes/theman.jpg')} alt=''/>
          <p>
          Personal vision statement:
I hope to inspire people to
 have a life that makes sense, 
 both to them and to God.

          </p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}