import { Link, useNavigate, useParams } from "react-router-dom";
import "./topbar.css";
import { useContext, useState, useEffect } from "react";
import UserContext from "../../context/UserContext";
import Login from "../../pages/login/Login";
import { Button } from "react-bootstrap";

export default function Topbar() {
  let {getUserById}= useContext(UserContext);
  let params = useParams();
  let navigate = useNavigate()

  const [user, setUser] = useState({
    userId:0,
    username:"",
    email:"",
    firstName:"",
    lastName:"",
    createdAt:"",
    updatedAt:"",
  });

  useEffect(() => {
    async function fetch() {
        await getUserById(2).then((user) =>
            setUser(user)
        );
        console.log(user);
    }
    fetch();
}, [Login]);

 function logout() {
  localStorage.clear();
   navigate('/')
   console.log("clicked")
}

let Auth = localStorage.getItem("username");

function displayUser() {
  if (Auth === user.username) {
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
          </li>
          <li className="topListItem">
            <Link className="link" to="/bookstore">
              BOOK STORE
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE A BLOG
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" variant="link" onClick={logout}>
              LOG OUT
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
          <Link className="link" to="/settings">
          </Link>
          <ul className="topList">
          </ul>
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
    )
  }
  else {
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
          </li>
          <li className="topListItem">
            <Link className="link" to="/bookstore">
              BOOK STORE
            </Link>
          </li>
          <li className="topListItem">
              <Link className="link" to="/A9B8C7D6E5F4G3H2I1">
                LOGIN
              </Link>
            </li>
        </ul>
      </div>
      <div className="topRight">
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
    )
  }
}


  return (
    <>
      {displayUser()}
    </>
  )
    
}