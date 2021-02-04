import React,{useState,useEffect} from 'react';
import {db,auth} from '../firebase';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button,Input } from '@material-ui/core';

function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));



  const SignUp = ({open,setOpen,onUserStateChange}) =>{
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    const [user,setUser] = useState(null);

    /**
     * handles the modal close
     */
  const handleOpen = () => {
    setOpen(false);
  }

    /**
     * handles the sign up
     */
  const signUp = (event) => {
    event.preventDefault();

    auth.createUserWithEmailAndPassword(email,password)
    .then((authUser)=>{
      return authUser.user.updateProfile({
        displayName:username
      })
    })
    .catch((err)=>alert(err.message));

    setOpen(false);
  }


  /**
   * runs a piece of code based on a specific condition, []->means it ll run once when the app component loads
   */
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        onUserStateChange(authUser);//handles refresh
        
      }else{
        //user logged out..
        onUserStateChange(null);
      }
    })

    return () =>{
      //perform cleanup actions before refiring useEffect
      unsubscribe();
    }

  },[user,username]);


    return(
        <Modal
            open={open}
            onClose={handleOpen}
        >
            <div style={modalStyle} className={classes.paper}>
                <form className="app__signup">
                <center>
                <img
                    className="app__headerImage"
                    src="http://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                    alt="Instagram"
                    />
                </center>
                    <Input
                    placeholder="username"
                    type="text"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    />
                    <Input
                    placeholder="email"
                    type="text"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />

                    <Input
                    placeholder="password"
                    type="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />

                    <Button type="submit" onClick={signUp}>Sign Up</Button>
                    </form>
            </div>
        </Modal>
        

    )
  }


  export default SignUp;