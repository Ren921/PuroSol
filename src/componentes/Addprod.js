import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link as RouteLink, useNavigate} from "react-router-dom";
import { auth } from '../firebase';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import {useState, useEffect} from 'react';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function AddProd() {

    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [rating, setRating] = useState(0);
    const [price, setPrice] = useState(0);
    const [productType, setProductType] = useState("");
    




}