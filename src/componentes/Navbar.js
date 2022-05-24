import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from '../assets/logo PSJ.webp'
import { ShoppingCart } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth, db } from '../firebase';
import { actionTypes } from '../reducer';
import { useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs, doc} from "firebase/firestore";
import {useState, useEffect} from 'react';
import { getDatabase, ref, child, get } from "firebase/database";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "7rem",
  },
  appBar: {
      backgroundColor: "whitesmoke",
      boxShadow: "none",
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  image: {
      marginRight: "10px",
      height: "4rem",
      width: "5rem",
  },
  
}));

export default function Navbar() {
  const classes = useStyles();
  const [{basket, user}, dispatch] = useStateValue();
  const history = useNavigate();
  const citiesRef = collection(db, "usuarioss");
  let nom = "";
  let nomb = []

  getDocs(citiesRef)
      .then((snapshot) => {
        //console.log(snapshot.docs);
        //nom = ""
        nomb = []
        snapshot.docs.forEach((doc) => {
          nomb = {...doc.data() };
          if(nomb.correo == user.email){
            
            nom = nomb.nombre;
            console.log("nomb", nom);
          }
        })
      })
      .catch(err => {
        console.log(err.message);
      })


  const handleAuth = () => {
    if (user){
      auth.signOut();
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        basket: [],
      });
      dispatch({
        type: actionTypes.SET_USER,
        user: null,
      });
      history("/")
    }

  }


  return (
    
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>

          <Link to="/">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src={logo} className={classes.image}/>
          </IconButton>
          </Link>

          <div className={classes.grow} />
          <Typography variant="h6" color='textPrimary' component='p'>
            
            Hello { user ? user.email : "Guest" }
          </Typography> 
           <div className={classes.button}>

           <Link to="signin">
            <Button variant='outlined' onClick={handleAuth}>
              <strong>{user ? "Sign Out" : "Sign In"}</strong>
            </Button>
          </Link>
          
          <Link to="checkout-page">
          <IconButton aria-label='show cart items' color='inherit'>
            <Badge badgeContent={basket.length} color="secondary">
              <ShoppingCart fontSize='large' color='primary'/>
            </Badge>
          </IconButton>
          </Link>

          </div>  
        </Toolbar>
      </AppBar>
    </div>
  );
}
