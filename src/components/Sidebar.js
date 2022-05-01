import React from 'react'
import styled from 'styled-components'
import BottomSideBar from './BottomSideBar'
import { useSelector } from 'react-redux'

function Sidebar() {
    let {Posts,user} = useSelector((state)=>state.postReducer)
  return (
    <Container>
        <TopSideBar>
            <ImageSection>
               <img src='/Images/2.jpg'/>
            </ImageSection>
             <h2>{localStorage.getItem('Username')}</h2>
             <p>Juinior Software Developer<br/>Still At College</p>
             <hr/>
            <Views>
                <h4>Who Viewed Your Profile</h4>
                <small>2,483</small>
            </Views>
            <Views>
                <h4>Views of your Post</h4>
                <small>1385</small>
            </Views>
            <hr/>
            <h2>Access exclusive tools & insights</h2>
            <Premium>
                <div className='span'></div>
                <h5>Retry Premium Free</h5>
            </Premium>
            <hr/>
            <Items>
                <span></span>
                <h4>My Items</h4>
            </Items>
        </TopSideBar>
        <BottomSideBar/>
    </Container>
  )
}

export default Sidebar
let Container = styled.div`
  flex-basis:30%;
`
let TopSideBar = styled.div`
text-align:center;
background-color:#fff;
height:max-content;
overflow:hidden;
border-radius:10px;
h2{
    margin-top:10px;
}
p{
    margin-bottom:10px;
}
`
let ImageSection = styled.div`
width:100%;
 height:10vh;
 background-image:url("/Images/bg3.png");
 background-position:center;
 background-size:cover;
 img{
     border:2px solid #fff;
     height:45px;
     width:45px;
     border-radius:50%;
     left:0%;
     position:relative;
     top:50%;
 }
`
let Views = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 margin-top:7px;
 small{
     color:cyan;
     font-weight:600;
 }
`
let Premium = styled.div`
 display:flex;
 justify-content:left;
 align-items:center;
 margin:6px 0;
 .span{
     height:20px;
     width:20px;
     background-color:#ffc017;
     display:block;
     margin: 5px 10px;
 }
`
let Items = styled.div`
 display:flex;
 justify-content:left;
 align-items:center;
 span{
     background-color:#333;
     height:30px;
     width:20px;
     display:block;
     margin: 5px 10px;
 }
`