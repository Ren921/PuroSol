import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Productos from './Productos';
import products from '../product-data';
import { db } from '../firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import {useState, useEffect} from 'react';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    borderRadius: 5,
  },
  
}));

export default function Products() {
  //const classes = useStyles();

  const [productos, setProductos] = useState([]);
  const productoColleccion = collection(db, "productos");
  useEffect(() => {
    const getProductos = async () => {
      const prod = await getDocs(productoColleccion);
      setProductos(prod.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getProductos();
  }, [])

  const ProductsValor = () => { 
      const getProductos = async () => {
        
        const q = query(productoColleccion, orderBy('price', 'asc'));
        //console.log("que", q.doc)
        getDocs(q)
          .then((snapshot) => {
            
            setProductos([])
            snapshot.docs.forEach((doc) => {
              setProductos(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
            })
          })
          .catch(err => {
            console.log(err.message);
          })
      } 
      getProductos();
  }

  const ProductsRating = () => { 
    const getProductos = async () => {
      
      const q = query(productoColleccion, orderBy('price', 'desc'));
      //console.log("que", q.doc)
      getDocs(q)
        .then((snapshot) => {
          
          setProductos([])
          snapshot.docs.forEach((doc) => {
            setProductos(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
          })
        })
        .catch(err => {
          console.log(err.message);
        })
    } 
    getProductos();
  }

  const classes = useStyles();

  return (
    
    <div className={classes.root}>
      <div padding-bottom={20}>
      <Button variant="contained" color="primary" onClick={ProductsValor}> Ordenar por precio ascendente </Button>
      <Button variant="contained" color="secondary" onClick={ProductsRating}> Ordenar por precio descendente </Button>
      </div>
      
      <Grid container spacing={-1} padding-top={20}>
          {
              productos.map(producto => (
                
                <Grid item xs={12} sm={8} md={4} lg={3}>
                 
                  <Productos producto={producto} key={producto.id}/>
                 
                </Grid>
                
              ))
              
          }
          
      </Grid>
    </div>
  );
}


