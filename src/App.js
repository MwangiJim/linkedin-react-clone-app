import './App.css';
import Header from './components/Header'
import Home from './components/Home';
import UserDetails from './components/UserDetails';
import React, { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { SetProfile } from './redux/reducers/reducer';

function App() {
  let[user,setUser] = React.useState(null)
  let dispatch = useDispatch()
  let auth = getAuth()

  useEffect(()=>{
        onAuthStateChanged(auth,(AuthUser)=>{
          if(AuthUser){
            setUser(AuthUser)
            console.log(AuthUser)
            console.log('You are Logged in!!!')
          }
          else{
            setUser(null)
            console.log('You are Logged out!!!')
          }
        })
  },[])
  return (
    <div className="App">
      <Header/>
      {user? <Home/>:<UserDetails/>}
    </div>
  );
}

export default App;
