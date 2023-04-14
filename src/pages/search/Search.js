import React, { useEffect, useContext, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Container, Row, Button } from "react-bootstrap"
import PostContext from "../../context/PostContext";
import SimpleDateTime from 'react-simple-timestamp-to-date';



{/* Search Bar Function - Find barber by City*/ }
function Search() {
    let navigate = useNavigate()
    let { searchPost } = useContext(PostContext)
    let [posts, setPosts] = useState([])
    let params = useParams();

    console.log(params.filter)

    searchPost(params.filter)

    useEffect(() => {

        async function fetch() {
            await searchPost(params.filter).then(response => {
                setPosts(response)
            })
        }
        fetch();
    }, [params])

    let { deletePost } = useContext(PostContext)

    function handleDeletePost(postId) {
        deletePost(postId)
        navigate('/')
        window.location.reload()
    }


    function UserList() {

        if (posts === null || !posts) return
        return posts.map((p) => {
            return (
                <div className="post" key={p.postId}>

                    <div className="postInfo">
                        <div className="postCats">
                            <span className="postCat">
                                <Link className="link" to={`/post/${p.postId}`}>
                                    Music
                                </Link>
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
                        <span className="postDate">
                            <SimpleDateTime dateFormat="MDY" dateSeparator="/" showTime='0'>{p.updatedAt}</SimpleDateTime>
                            <hr />
                            <SimpleDateTime dateFormat="MDY" showDate='0' timeSeparator=":" meridians="1">{p.updatedAt}</SimpleDateTime>
                        </span>
                    </div>
                    <p className="postDesc">
                        {p.post}
                    </p>
                    <Link to={`/post/${p.postId}/Edit`} className="btn btn-primary mx-3">Edit</Link>
                    <Button variant="danger" onClick={handleDeletePost.bind(this, p.postId)}>Delete</Button>
                </div>
            )
        }
        )
    }

    return (
        <>
            <Container fluid>
                <Row>
                    {UserList()}
                </Row>
            </Container>
        </>
    )
}

export default Search;