import React, { useContext, useState,} from 'react';
import PostContext from "../../context/PostContext";
import { Form, Button, Col} from 'react-bootstrap';


function AddPost() {
  
  let { createPost } = useContext(PostContext)

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
    console.log(post);
  }

  return (
    <div id="background-addImage" xs={12} md={6} lg={4}>
      <Form onSubmit={handleSubmit}>
        <h1>ADD AN POST</h1>
        

        <Form.Group as={Col} id="formLabels">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" name="title" value={title} onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Col} id="formLabels">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" name="description" value={description} onChange={handleChange} />
        </Form.Group>
        <Button id='addButton' type="submit" className="mt-4 mb-4 ly-0">SUBMIT</Button>
      </Form>
    </div>
  )
}

export default AddPost