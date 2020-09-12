import React,{useState} from 'react';
import './App.css';
import Post from './Post';


function App() {
  const [posts,setPosts] = useState([]);
  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="http://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram"
          />
      </div>
      <div className="app__post">
        {/* posts */}
        <Post userName="Rajath" caption="Hello there!" imageUrl="https://splashbase.s3.amazonaws.com/unsplash/regular/tumblr_mnh0n9pHJW1st5lhmo1_1280.jpg"/>
        <Post userName="Shashanku" caption="Call me Shanks" imageUrl="https://splashbase.s3.amazonaws.com/gratisography/regular/10H.jpg"/>
        <Post userName="Gowthama" caption="Call me Buddha" imageUrl="https://splashbase.s3.amazonaws.com/unsplash/regular/tumblr_mtawb6Bzzy1st5lhmo1_1280.jpg"/>
      </div>
    </div>
  );
}

export default App;
