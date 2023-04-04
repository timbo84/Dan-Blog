import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <Link to="/" class="navbar-brand align-items-center">
          <img src={process.env.PUBLIC_URL + '/Images/logo-vectorV3.png'} height="70" alt="Evince" />
        </Link>

        {/* <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i> */}
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>


          <li className="topListItem">
            <Link className="link" to="/login">
              LOGIN
            </Link>
          </li>


          <li className="topListItem">

          </li>
          <li className="topListItem">
            <Link className="link" to="/bookstore">
              BOOK STORE
            </Link>
          </li>

        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">

          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>


          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}