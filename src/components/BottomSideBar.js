import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'

function BottomSideBar() {
  return (
    <Container>
        <h4>Recent</h4>
        <div className='Lines'>
            <span>#</span>
            <h3>React js</h3>
        </div>
        <div className='Lines'>
            <span>#</span>
            <h3>Programming</h3>
        </div>
        <div className='Lines'>
            <span>#</span>
            <h3>softwaredesign</h3>
        </div>
        <div className='Lines'>
            <span>#</span>
            <h3>softwareengineering</h3>
        </div>
        <div className='Lines'>
            <span>#</span>
            <h3>agilesoftwaredevelopement</h3>
        </div>
        <h3>Groups</h3>
        <div className='build'>
            <FontAwesomeIcon icon={faBuilding}/>
            <h4>VC-Venture Capitalists,F...</h4>
        </div>
        <p>See All</p>
    </Container>
  )
}

export default BottomSideBar

let Container = styled.div`
text-align:left;
background-color:#fff;
height:max-content;
padding:10px 15px;
overflow:hidden;
border-radius:10px;
margin:15px 0;
.Lines{
    display:flex;
    justify-content:left;
    align-items:center;
    margin:7px 0;
    span{
        background-color:#ffc017;
        padding:4px;
        color:#000;
        padding:4px 5px;
        font-size:12px;
        text-align:center;
        border-radius:50%;
    }
    h3{
        margin:0 4px;
        font-weight:400;
    }
}
.build{
    display:flex;
    justify-content:left;
    align-items:center;
    h4{
        margin:0 4px;
        font-weight:400;
    }
}
p{
    text-align:center;
}
`