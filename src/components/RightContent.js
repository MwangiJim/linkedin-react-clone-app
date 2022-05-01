import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons'
import BottomRight from './BottomRight'

function RightContent() {
  return (
    <Container>
       <TopRight>
         <div className='head'>
            <h3>Linkedin News</h3>
          <FontAwesomeIcon icon={faQuestionCircle}/>
         </div>
         <div className='Lines'>
           <span></span>
           <div className='line__content'>
             <h4>CoronaVirus:UK Updates</h4>
             <p>Top news.978 readers</p>
           </div>
         </div>
         <div className='Lines'>
           <span></span>
           <div className='line__content'>
             <h4>HeathRow wins Battle for Third Runway</h4>
             <p>13h ago</p>
           </div>
         </div>
         <div className='Lines'>
           <span></span>
           <div className='line__content'>
             <h4>Take Elon Musk's Innovation Quiz</h4>
             <p>3d ago . 30,026 readers</p>
           </div>
         </div>
         <div className='Lines'>
           <span></span>
           <div className='line__content'>
             <h4>Here's who's Hiring in the UK</h4>
             <p>6h ago . 5,540 readers</p>
           </div>
         </div>
         <div className='Lines'>
           <span></span>
           <div className='line__content'>
             <h4>Avoid common resume mistakes</h4>
             <p>3d ago.10,336 readers</p>
           </div>
         </div>
         <h4>Show More</h4>
       </TopRight>
       <BottomRight/>
    </Container>
  )
}

export default RightContent
let Container =styled.div`
 flex-basis: 25%;
`
let TopRight = styled.div`
 background-color:#fff;
 border-radius:10px;
 width:100%;
 height:max-content;
 padding:10px 14px;
 .head{
   display:flex;
   justify-content:space-between;
   align-items:center;
 }
 .Lines{
   display:flex;
   justify-content:left;
   align-items:baseline;
   margin:15px 0;
   padding:5px 12px;
   cursor:pointer;
   :hover{
     background:#f4f4f4;
   }
   span{
     height:7px;
     width:7px;
     border-radius:50%;
     background-color:#4267B2;
     margin: 2px 3px;
   }
   .line__content{
     text-align:left;
     p{
       font-weight:400;
       font-size:16px;
     }
     h4{
       font-size:13px;
     }
   }
 }
`