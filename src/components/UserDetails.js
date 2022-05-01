import React, { useState } from 'react'
import styled from 'styled-components'
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import { db } from '../firebase'
import { useDispatch } from 'react-redux'
import { SetProfile } from '../redux/reducers/reducer'

function UserDetails() {
    const auth = getAuth()
    const provider = new GoogleAuthProvider()
    let dispatch = useDispatch()
    let[Form,setForm] = React.useState({
        email:'',
        password:'',
        checked:false
    })
    let[RegForm,setRegForm] = useState({
        username:'',
        email:'',
        password:'',
        checked:false
    })
    const HandleInput =(event)=>{
        const{value,name,type,checked} = event.target
        setForm((prevState)=>{
            return{
                ...prevState,
                [name]:type === 'checkbox'?checked:value
            }
        })
    }
    const handleinput =(e)=>{
        const{type,value,checked,name} = e.target
        setRegForm((prevState)=>{
            return{
                ...prevState,
                [name]:type === 'checkbox'?checked:value
            }
        })
    }
    const HandleForm =(e)=>{
        e.preventDefault();
       if(Form.email,Form.password){
        signInWithEmailAndPassword(auth,Form.email,Form.password)
        .catch((error)=>{
            alert(error.message)
        })
       }
    }
    const HandleFormstate =(e)=>{
        e.preventDefault()
       if(RegForm.username,RegForm.email,RegForm.password){
        createUserWithEmailAndPassword(auth,RegForm.email,RegForm.password)
        .then((AuthUser)=>{
            return AuthUser.user.updateProfile({
                displayName:RegForm.username
            })
        })
        .catch((error)=>{
            alert(error.message)
        })
       }
    }
    let Styles = {
        display:Form.checked?'block':'none'
    }
    let RegStyles = {
        display:RegForm.checked?'block':'none'
    }
    const SignInwithGoogle=()=>{
       signInWithPopup(auth,provider)
       .then((data)=>{
             const Username=data.user.displayName
              const ProfilePicture=data.user.photoURL
              const Email=data.user.email
              localStorage.setItem('Username',Username)
              localStorage.setItem('ProfilePicture',ProfilePicture)
              localStorage.setItem('Email',Email)
       })
       .catch((error)=>{
           alert(error.message)
       })
    }
  return (
    <Container>
        <Login>
            <h2>Login</h2>
            <hr/>
            <button onClick={SignInwithGoogle}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQisYGUMYfrr6SXg5RWKeBVSxxrM9xug1AmbQ&usqp=CAU'/>
                Sign In With Google
            </button>
            <button>
                <img src='/Images/fb.png'/>
                Sign In With Facebook
            </button>
             <form onSubmit={HandleForm}>
                <label>Email</label>
                <br/>
                <input
                  type='email'
                  placeholder='Enter Email Address'
                  value={Form.email}
                  name='email'
                  onChange={HandleInput}
                  className='input'
                />
                <br/>
                <p>We'll never Share Your Email Address With Anyone</p>
                <br/>
                <label>Password</label>
                <br/>
                <input
                 type='password'
                 placeholder='Enter Password'
                 value={Form.password}
                 name='password'
                 onChange={HandleInput}
                 className='input'
                />
                <br/>
                <input
                 type='checkbox'
                 value={Form.checked}
                 name='checked'
                 onChange={HandleInput}
                />
                <label>I Agree with the Terms and Conditions of Linkedin in regards to Privacy</label>
                <br/>
                <button style={Styles}>Login</button>
             </form>
        </Login>
        <Register>
            <h2>Register</h2>
            <hr/>
            <button>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQisYGUMYfrr6SXg5RWKeBVSxxrM9xug1AmbQ&usqp=CAU'/>
                Sign Up With Google
            </button>
            <button>
                <img src='/Images/fb.png'/>
                Sign Up With Facebook
            </button>
            <form onSubmit={HandleFormstate}>
                <label>Username</label>
                <br/>
                <input
                  type='text'
                  placeholder='Enter Username'
                  value={RegForm.username}
                  name='username'
                  onChange={handleinput}
                  className='input'
                />
                <br/>
                <label>Email</label>
                <br/>
                <input
                  type='email'
                  placeholder='Enter Email Address'
                  value={RegForm.email}
                  name='email'
                  onChange={handleinput}
                  className='input'
                />
                <br/>
                <p>We'll never Share Your Email Address With Anyone</p>
                <br/>
                <label>Password</label>
                <br/>
                <input
                 type='password'
                 placeholder='Enter Password'
                 value={RegForm.password}
                 name='password'
                 onChange={handleinput}
                 className='input'
                />
                <br/>
                <input
                 type='checkbox'
                 value={RegForm.checked}
                 name='checked'
                 onChange={handleinput}
                />
                <label>I Agree with the Terms and Conditions of Linkedin in regards to Privacy</label>
                <br/>
                <button style={RegStyles}>Create Linkedin Account</button>
            </form>
        </Register>
    </Container>
  )
}

export default UserDetails
let Container = styled.div`
 width:100%;
 height:100vh;
 top:0;
 left:0;
 position:fixed;
 background-color:#f4f4f4;
 z-index:50;
`
let Login = styled.div`
 width:400px;
 height:480px;
 border-radius:10px;
 background-color:#fff;
 top:9%;
 left:50px;
 padding:10px;
 position:absolute;
 h2{
     text-align:left;
 }
 hr{
     margin:10px 0;
 }
 button{
     width:100%;
     height:45px;
     background-color:#4267B2;
     border-radius:5px;
     color:#fff;
     cursor:pointer;
     border:none;
     outline:none;
     margin:10px 0;
     img{
         width:20px;
     }
     display:flex;
     justify-content:center;
     align-items:center;
 }
 form{
     .input{
         width:90%;
         height:42px;
         margin:10px 0;
         padding: 0 20px;
         color:#000;
         border-radius:10px;
         border:2px solid #000;
     }
     label{
         text-align:left;
     }
 }
`
let Register =styled.div`
width:500px;
height:550px;
border-radius:10px;
background-color:#fff;
top:9%;
right:50px;
padding:10px;
position:absolute;
h2{
    text-align:left;
}
hr{
    margin:10px 0;
}
button{
    width:100%;
    height:42px;
    background-color:#4267B2;
    border-radius:5px;
    color:#fff;
    cursor:pointer;
    border:none;
    outline:none;
    margin:10px 0;
    img{
        width:20px;
    }
    display:flex;
    justify-content:center;
    align-items:center;
}
form{
    .input{
        width:90%;
        height:40px;
        margin:10px 0;
        padding: 0 20px;
        color:#000;
        border-radius:10px;
        border:2px solid #000;
    }
    label{
        text-align:left;
    }
}
`