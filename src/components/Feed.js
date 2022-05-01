import React, { useEffect } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faInbox, faPencilAlt, faPhotoFilm, faPhotoVideo } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import Post from './Post'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { AddPost } from '../redux/reducers/reducer'

function Feed() {
    let dispatch = useDispatch()
    let {Posts,user} = useSelector((state)=>state.postReducer)
    console.log(Posts)
    let[Input,setInput] = React.useState({
        article:''
    })
    const HandleInput=(e)=>{
        setInput((prevState)=>{
            return{
                ...prevState,
                [e.target.name]:e.target.value
            }
        })
    }
    const HandleForm =(event)=>{
        event.preventDefault()
        console.log(Input)
         dispatch(AddPost({Article:Input.article}))
    }
    let Styles = {
        display:Input.article?'block':'none'
    }
  return (
    <Container>
        <FeedInput>
              <form onSubmit={HandleForm}>
                <LeftSide>
                        <FontAwesomeIcon icon={faPencilAlt}/>
                        <input
                           type='text'
                            placeholder='Start a post'
                            value={Input.article}
                            name='article'
                            onChange={HandleInput}
                        />
                </LeftSide>
                <button style={Styles}>Send</button>
              </form>
            <Row>
               <Col>
               <FontAwesomeIcon icon={faPhotoFilm}/>
               <p>Photos</p>
               </Col>
               <Col>
                <FontAwesomeIcon icon={faPhotoVideo}/>
                <p>Videos</p>
               </Col>
               <Col>
                <FontAwesomeIcon icon={faCalendar}/>
                <p>Event</p>
               </Col>
               <Col>
                 <FontAwesomeIcon icon={faBook}/>
                 <p>Write Article</p>
               </Col>
            </Row>
        </FeedInput>
        {Posts.map((post)=>{
            return(
                <Post
                name={localStorage.getItem('Username')}
                description={localStorage.getItem('Email')}
                message={post.Article}
                photoUrl='/Images/2.jpg'
               />
            )
        })}

    </Container>
  )
}

export default Feed
let Container = styled.div`
 flex-basis:50%;
 margin: 0 2%;
`
let FeedInput = styled.div`
 background:#fff;
 border-radius:10px;
 height:max-content;
 padding:20px 12px;
 form{
    background-color:#f4f4f4;
    display:flex;
    border-radius:20px;
    padding: 0 20px;
    justify-content:space-between;
    align-items:center;
    height:50px;
    width:90%;
    input{
       background:transparent;
       height:50px;
       width:300px;
       padding:0 20px;
       border-radius:20px;
       outline:none;
       border:none;
       color:#000;
   }
   button{
       background:transparent;
       cursor:pointer;
       outline:none;
       border:none;
       padding: 10px 35px;
   }
}
`
let Row = styled.div`
 display:flex;
 margin-top:10px;
 justify-content:space-between;
 align:items:center;
`
let Col = styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
 padding: 15px 12px;
 cursor:pointer;
 border-radius:10px;
 :hover{
     background:#f4f4f4;
 }
`
let LeftSide = styled.div`
 display:flex;
 align-items:center;
`