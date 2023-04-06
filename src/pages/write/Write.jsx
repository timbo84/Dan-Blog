import React, { useContext, useState, } from 'react';
import PostContext from "../../context/PostContext";
import { Form, Button, Col, InputGroup, Row } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import "./write.css";

function AddPost() {

  let { createPost } = useContext(PostContext)
  let navigate = useNavigate();

  const [post, setPost] = useState({
    title: "",
    description: "",
  })

  let { title, description } = post

  function handleChange(event) {
    setPost((preValue) => {
      return { ...preValue, [event.target.name]: event.target.value }
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    createPost(title, description)
    navigate(`/`);
    console.log(post);
  }

  return (
    <div id="form" xs={12} md={6} lg={4}>
    
      <Form onSubmit={handleSubmit}>
        <Row className=" justify-content-center" id="write-card">
        <br/>
          <h1>ADD A POST</h1>
          <Form.Group as={Col} id="formLabels">
            <Row className=" justify-content-center" id="write-card-title">
              <Form.Label>Title</Form.Label>
            </Row>
            <Form.Control type="text" name="title" value={title} onChange={handleChange} />
          </Form.Group>
          <br/>
        </Row>
        <Row className=" justify-content-center" id="write-card">
          <InputGroup>
            <Row className=" justify-content-center" id="write-card-title">
              <InputGroup.Text>Whats On Your Mind?</InputGroup.Text>
            </Row>
            <Form.Control as="textarea" aria-label="With textarea" name="description" value={description} onChange={handleChange} />
          </InputGroup>
          <br/>
        </Row>
        <Row className=" justify-content-center" id="write-card">
          <Button id="writeFormButton" type="submit" className="mt-4 mb-4 ly-0">POST</Button>
        </Row>
      </Form>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
    </div>
  )
}

export default AddPost