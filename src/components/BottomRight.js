import React from 'react'
import styled from 'styled-components'

function BottomRight() {
  return (
    <Container>
       <h3>Today's most viewed courses</h3>
       <Col1>
         <h5>1:The Coursera</h5>
         <small>A tightly Well Structured Course for Beginners<br/> and Advanced Developers</small>
       </Col1>
       <Col1>
         <h5>2:The Easy Tutorails Web Dev Course</h5>
         <small>A tightly Well Structured Course for Beginners<br/> and Advanced Developers</small>
       </Col1>
       <Col1>
         <h5>3:The Free Code Camp React Course With Bob Ziroll</h5>
         <small>A tightly Well Structured Course for Beginners<br/> and Advanced Developers</small>
       </Col1>
       <a href=''>Show More on Linkedin</a>
    </Container>
  )
}

export default BottomRight

let Container = styled.div`
 background-color:#fff;
 height:max-content;
 width:100%;
 margin:10px 0;
 border-radius:10px;
 padding:10px 14px;
 h3{
     font-weight:400;
 }
 a{
    text-decoration:none;
    color:#4267B2;
    font-weight:700;
  }
`
let Col1= styled.div`
 display:block;
 small{
     margin: 0 9px;
 }
`