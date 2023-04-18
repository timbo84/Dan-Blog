import { Link, useNavigate, useParams } from "react-router-dom";
import "./topbar.css";
import { useContext, useState, useEffect } from "react";
import UserContext from "../../context/UserContext";
import Login from "../../pages/login/Login";
import { Button, Form, Row, Col, Navbar, NavDropdown } from "react-bootstrap";



// Documentations for the functions used for this page
// useContext Hook: https://reactjs.org/docs/hooks-reference.html#usecontext
// useParams Hook: https://reactrouter.com/web/api/Hooks/useparams
// useNavigate Hook: https://reactrouter.com/web/api/Hooks/usedispatch
// useState in React: https://react.dev/reference/react/useState
// React: https://reactjs.org/docs/getting-started.html
// React-Bootstrap: https://react-bootstrap.github.io/getting-started/introduction/
// Navbar component: https://react-bootstrap.github.io/components/navbar/
// Responsive breakpoints in React-Bootstrap: https://react-bootstrap.github.io/layout/grid/#grid-props

export default function Topbar() {
  let { getUserById } = useContext(UserContext);
  let params = useParams();
  let navigate = useNavigate()

  const [user, setUser] = useState({
    userId: 0,
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    createdAt: "",
    updatedAt: "",
  });

  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };


  useEffect(() => {
    async function fetch() {
      await getUserById(1).then((user) =>
        setUser(user)
      );
      console.log(user);
    }
    fetch();
  }, [Login]);

  function logout() {
    localStorage.clear();
    console.log("clicked")
  }

  const handleChange = (event) => {
    if (event.target.value === "") return;
    navigate('Search/' + event.target.value)
  }

  let Auth = localStorage.getItem("username");

  function displayUser() {
    if (Auth === user.username) {
      return (
        <>
          <Navbar
            id="top"
            expand="md"
            expanded={expanded}
            collapseOnSelect={true}
          >
            <Navbar.Toggle onClick={handleToggle} />
            <div className="topLeft">
              <Link to="/" class="navbar-brand align-items-center">
                <img
                  src={process.env.PUBLIC_URL + "/Images/logofinal-navbar.png"}
                  height="120"
                  alt="Evince"
                />
              </Link>
            </div>
            <Navbar.Collapse>
              <div>
                <div className="topCenter">
                  <ul className="topList">
                    <li className="topListItem">
                      <Link className="link" to="/">
                        HOME
                      </Link>
                    </li>

                    <li className="topListItem">
                      <Link className="link" to="/about">
                        ABOUT
                      </Link>
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
                      <Link className="link" variant="link" to="/" onClick={logout}>
                        LOG OUT
                      </Link>
                    </li>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                      <NavDropdown.Divider />
                      <NavDropdown.Item>
                        345lemaire@gmail.com
                      </NavDropdown.Item>
                    </NavDropdown>
                    <div className="topRight">
                      <div id="searchBar">
                        <Row>
                          <Col >
                            <Form className="d-flex">
                              <Form.Control
                                id="searchInput"
                                type="search"
                                placeholder="Search For A Blog"
                                className="d-sm-flex"
                                aria-label="Search"
                                onChange={handleChange} />
                              <Button id='searchButton' variant="outline-success"><img src={process.env.PUBLIC_URL + '/Images/searchicon.png'} height="20px" alt="DanTheMan" /></Button>
                            </Form>
                          </Col>
                        </Row>
                      </div>
                    </div>

                  </ul>
                </div>


              </div>
            </Navbar.Collapse>
          </Navbar>
        </>
      )
    }
    else {
      return (
        <>
          <Navbar
            id="top"
            expand="md"
            expanded={expanded}
            collapseOnSelect={true}
          >
            <Navbar.Toggle onClick={handleToggle} />
            <div className="topLeft">
              <Link to="/" class="navbar-brand align-items-center">
                <img
                  src={process.env.PUBLIC_URL + "/Images/logofinal-navbar.png"}
                  height="120"
                  alt="Evince"
                />
              </Link>
            </div>
            <Navbar.Collapse>
              <div>
                <div className="topCenter">
                  <ul className="topList">
                    <li className="topListItem">
                      <Link className="link" to="/">
                        HOME
                      </Link>
                    </li>

                    <li className="topListItem">
                      <Link className="link" to="/about">
                        ABOUT
                      </Link>
                    </li>

                    <li className="topListItem">
                      <Link className="link" to="/bookstore">
                        BOOK STORE
                      </Link>
                    </li>
                    <li className="topListItem">
                    <NavDropdown title="CONTACT ME" id="basic-nav-dropdown">
                      <NavDropdown.Item>
                        345lemaire@gmail.com
                      </NavDropdown.Item>
                    </NavDropdown>
                    </li>
                    <li className="topListItem">
                      <Link className="link" to="/A9B8C7D6E5F4G3H2I1">
                        LOGIN
                      </Link>
                    </li>
                    <div className="topRight">
                      <div id="searchBar">
                        <Row>
                          <Col >
                            <Form className="d-flex">
                              <Form.Control
                                id="searchInput"
                                type="search"
                                placeholder="Search For A Blog"
                                className="d-sm-flex"
                                aria-label="Search"
                                onChange={handleChange} />
                              <Button id='searchButton' variant="outline-success"><img src={process.env.PUBLIC_URL + '/Images/searchicon.png'} height="20px" alt="DanTheMan" /></Button>
                            </Form>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </Navbar.Collapse>
          </Navbar>
        </>


      )
    }
  }


  return (
    <>
      {displayUser()}
    </>
  )

}