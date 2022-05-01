import React, { useEffect } from 'react'
import styled from 'styled-components'
import { faArrowDown, faArrowDownShortWide, faBell, faBoxesPacking, faBoxesStacked, faHome, faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-regular-svg-icons'
import { useSelector } from 'react-redux'
import { getAuth } from 'firebase/auth'

function Header() {
    let{user} = useSelector((state)=>state.postReducer)
    console.log(user)
    let auth = getAuth()
  return (
    <Container>
      <LeftSide>
      <img src='/Images/linkedin.png' className='logo'/>
       <InputSection>
         <FontAwesomeIcon icon={faSearch} className='search'/>
         <input
          placeholder='Search'
         />
       </InputSection>
      </LeftSide>
     <RightSide>
     <div className='home'>
           <FontAwesomeIcon icon={faHome} className='homelg'/>
           <span>1</span>
           <h3>Home</h3>
       </div>
       <div className='home'>
            <FontAwesomeIcon icon={faBoxesStacked} className='boxlg'/>
            <span>2</span>
            <h3>My Network</h3>
       </div>
       <div className='home'>
            <FontAwesomeIcon icon={faShoppingBag} className='shop'/>
            <span>3</span>
            <h3>Jobs</h3>
       </div>
       <div className='home'>
            <FontAwesomeIcon icon={faMessage} className='baglg'/>
            <span>4</span>
            <h3>Messaging</h3>
       </div>
       <div className='home'>
            <FontAwesomeIcon icon={faBell} className='bell'/>
            <span>5</span>
            <h3>Notifications</h3>
       </div>
      <div className='Me'>
         <img src='/Images/2.jpg' className='user'/>
        <div className='area'>
           <h3>{localStorage.getItem('Username')}</h3>
           <FontAwesomeIcon icon={faArrowDown}/>
        </div>
      </div>
      <div className='work'>
         <FontAwesomeIcon icon={faBoxesPacking} className='boxes'/>
          <div className='workarea'>
               <h3>Work</h3>
                <FontAwesomeIcon icon={faArrowDownShortWide}/>
          </div>
      </div>
       <button onClick={()=>auth.signOut()}>LOGOUT</button>
     </RightSide>
    </Container>
  )
}

export default Header

let Container  =styled.div`
 padding:2px 6px;
 background-color:#fff;
 justify-content:space-between;
 display:flex;
 align-items:center;
 z-index:100;
 .user{
     width:35px;
     height:35px;
     border-radius:50%;
     object-fit:contain;
     border:4px solid #000;
     margin-right:30px;
 }
 .logo{
     margin-left:30px;
     margin-right:10px;
     width:30px;
 }
`
let LeftSide = styled.div`
 display:flex;
 justify-content:left;
 align-items:center;
`
let RightSide = styled.div`
 display:flex;
 align-items:center;
 justify-content:space-between;
 .boxes{
     margin-right:30px;
 }
 h2{
     font-size:19px;
     font-weight:400;
     color:gray;
 }
 .home{
    :hover::after{
        content:'';
        background:#000;
        height:4px;
        border-radius:10px;
        margin:auto;
        display:block;
        transition:0.5s;
    }
    cursor:pointer;
    span{
        background-color:#f44336;
        height:10px;
        width:10px;
        border-radius:50%;
        display:block;
        color:#fff;
        bottom:24px;
        left:15px;
        padding:4px;
        text-align:center;
        font-size:10px;
        align-items:center;
        position:relative;
    }
    margin:0 15px;
    margin-bottom:0;
    .homelg,.baglg,.boxlg,.shop,.bell{
        color:#000;
        font-size:25px;
    }
    h3{
        font-size:12px;
        margin-top:-15px;
    }
}
.bag{
    .shop{
        font-size:25px;
    }
}
.boxes{
    font-size:25px;
}
.Me{
    .area{
        display:flex;
        align-items:center;
        h3{
            margin:0 4px;
            font-size:12px;
        }
    }
}
.work{
    .workarea{
        display:flex;
        align-items:center;
        h3{
            margin:0 4px;
            font-size:12px;
        }
    }
}
button{
    background:transparent;
    padding:12px 30px;
    cursor:pointer;
    outline:none;
    font-size:16px;
    border:none;
}
`
let InputSection = styled.div`
 display:flex;
 justify-content:left;
 width:550px;
 height:45px;
 background:#f4f4f4;
 align-items:center;
 padding: 0 20px;
 border-radius:25px;
 input{
     background:transparent;
     width:550px;
     height:45px;
     border:none;
     outline:none;
     padding:0 10px;
 }
 .search{
     color:#000;
 }
`