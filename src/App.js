import React,{useState,useEffect} from 'react';
import './App.css';
import Post from './Post';
import {db,auth} from './firebase';
import { Button } from '@material-ui/core';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ImageUpload from './components/ImageUpload';


function App() {

  const [posts,setPosts] = useState([]);

  const [openSignIn,setOpenSignIn] = useState(false);
  const [open,setOpen] = useState(false);
  const [user,setUser] = useState(null);

  useEffect(() => {
    // every single time the database changes, onSnapshot ll fire this bit of code
    db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id:doc.id,
        post:doc.data()
      })));
    })
  },[]);

  const handleUserStateChange = (data) => {
    setUser(data);
  }

  /* onSnapshot -> fires the code every single time the document changes */
  return (

    <div className="app">

        <div className="app__header">
          <img
            className="app__headerImage"
            src="http://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Instagram"
            />
          {user?(
            <Button onClick={()=>auth.signOut()}>Logout</Button>
          ):(
            <div className="app__loginContainer">
              <Button onClick={()=>setOpenSignIn(true)}>Sign In</Button>
              <Button onClick={()=>setOpen(true)}>Sign Up</Button>
            </div>
          )}            
        </div>
        
        <SignUp open={open} setOpen={setOpen} onUserStateChange={handleUserStateChange}/>
        <SignIn openSignIn={openSignIn} setOpenSignIn={setOpenSignIn}/>

        <div className="app__post">
          {/* posts */}
            {
              posts.map(({id,post}) => (
              <Post key={id} userName={post.username} imageUrl={post.imageUrl} caption={post.caption}/>
              ))
            }
        </div>
          {
            user?.displayName ?(
              <ImageUpload username={user.displayName}/>
            ):(
              <h3>Sorry you need to Login to upload</h3>
            )
          }
    </div>
  );
}

export default App;
