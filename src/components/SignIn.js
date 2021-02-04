import React,{useState} from 'react';
import {auth} from '../firebase';
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


const SignIn = ({openSignIn,setOpenSignIn}) =>{
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);

    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');


    const signIn = (event) =>{
        event.preventDefault();
    
        auth
        .signInWithEmailAndPassword(email,password)
        .catch((err)=>alert(err.message))
    
        setOpenSignIn(false);
      }

    return(
    <Modal
        open={openSignIn}
        onClose={()=> setOpenSignIn(false)}
      >
          <div style={modalStyle} className={classes.paper}>
            <form className="app__signin">
            <center>
              <img
                className="app__headerImage"
                src="http://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt="Instagram"
                />
            </center>
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

                <Button type="submit" onClick={signIn}>Sign In</Button>
            </form>
          </div>
      </Modal>
    )
}

export default SignIn;