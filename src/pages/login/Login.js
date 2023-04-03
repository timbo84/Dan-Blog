import React, { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import { Form, Button, Col, Row } from "react-bootstrap";



{/* Sign In Page Function */ }
function Login() {

  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  let { Login } = useContext(UserContext);
  let { username, password } = login;

  function handleChange(event) {
    setLogin((preValue) => {
      return { ...preValue, [event.target.name]: event.target.value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    Login(username, password);
    console.log(login);
    
  }

  return (
    <>
     

      {/* Sign In form section*/}
      <div id="background" xs={12} md={6} lg={4}>
        <Form onSubmit={handleSubmit}>
          <Row className=" justify-content-center">

            <h1 className="text-center justify-content-center align-self-center">SIGN IN</h1>
           

            <Form.Group className="mb-3">
              <Form.Label >username</Form.Label>
              <Form.Control
                type="username"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>

          <Row className=" justify-content-center">
            <Form.Group className="mb-3">
              <Form.Label >Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>

          <Row className="justify-content-center">
            <Form.Group className="col-1">
              <Col xs={12} sm={4} md={4} lg={4}>
                <Button id="signinFormButton" type="submit">
                  SUBMIT
                </Button>
              </Col>
            </Form.Group>
          </Row>
        </Form>
      </div>
    </>
  );
}

export default Login;
