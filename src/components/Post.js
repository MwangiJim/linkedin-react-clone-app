import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faShare, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'
import { Zoom } from 'react-reveal'

function Post(props) {
  return (
    <Zoom center>
    <Container>
      <Header>
         <img src={props.photoUrl}/>
        <PostInfo>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </PostInfo>
      </Header>
      <div className='post__body'>
          <p>{props.message}</p>
      </div>
      <div className='post_buttons'>
         <First>
         <FontAwesomeIcon icon={faThumbsUp}/>
         <small>Like</small>
         </First>
         <First>
         <FontAwesomeIcon icon={faComment}/>
         <small>Comment</small>
         </First>
         <First>
         <FontAwesomeIcon icon={faShare}/>
         <small>Share</small>
         </First>
         <First>
         <FontAwesomeIcon icon={faArrowAltCircleRight}/>
         <small>Send</small>
         </First>
      </div>
    </Container>
    </Zoom>
  )
}

export default Post
let Container = styled.div`
 margin: 10px 0;
 background-color:#fff;
 border-radius:10px;
 height:max-content;
 padding:20px 12px;
 .post_buttons{
     display:flex;
     justify-content:left;
     align-items:center;
     margin:2% 0;
 }
`
let Header = styled.div`
 display:flex;
 justify-content:left;
 img{
     width:40px;
     height:40px;
     border-radius:50%;
     border:5px solid #000;
 }
`
let PostInfo = styled.div`
 text-align:left;
 margin:0 4px;
 p{
   font-size:13px;
   color:gray;
 }
`
let First = styled.div`
 display:flex;
 cursor:pointer;
 margin: 0 3%;
`