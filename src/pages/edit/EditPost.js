import React, { useContext, useState, useEffect } from 'react';
import PostContext from "../../context/PostContext";
import { Form, Button, Col, InputGroup, Row } from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";
import "./EditPost.css";

function EditPost() {

  let { updatePost, getPostById } = useContext(PostContext)
  let navigate = useNavigate();
  let params = useParams()
  const [Post, setPost] = useState({
    postId: params.postId,
    title: "",
    post: "",
    userId: 0,
    createdAt: "",
    updatedAt: ""
  })

  let {postId, title, post, userId, createdAt, updatedAt } = Post


  useEffect(() => {
    async function fetch() {
      await getPostById(postId)
        .then((post) => setPost(post))
    }
    fetch()
    console.log(Post)
  }, [postId]);

  function handleChange(event) {
    setPost((preValue) => {
      return { ...preValue, [event.target.name]: event.target.value }
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    updatePost(Post)
    navigate(`/`);
    console.log(Post);
  }

  return (
    <div id="form" xs={12} md={6} lg={4}>

      <Form onSubmit={handleSubmit}>
        <Row className=" justify-content-center" id="write-card">
          <br />
          <h1>EDIT POST</h1>
          <Form.Group as={Col} id="formLabels">
            <Row className=" justify-content-center" id="write-card-title">
              <Form.Label>Change Title?</Form.Label>
            </Row>

            <Form.Control type="text" name="title" value={title} onChange={handleChange} />
          </Form.Group>
          <br />
        </Row>
        <Row className=" justify-content-center" id="write-card">
          <InputGroup>
            <Row className=" justify-content-center" id="write-card-title">
              <InputGroup.Text>Something Different On Your Mind?</InputGroup.Text>
            </Row>
            <Form.Control as="textarea" aria-label="With textarea" name="post" value={post} onChange={handleChange} />
          </InputGroup>
          <br />
        </Row>
        <Row className=" justify-content-center" id="write-card">
          <Button id="writeFormButton" type="submit" className="mt-4 mb-4 ly-0">EDIT POST</Button>
        </Row>
      </Form>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default EditPost