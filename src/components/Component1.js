import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeSelectedProducts, setProducts } from './redux/actions/ProductActions.js';
import { makeStyles } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    '@media (min-width: 780px)': {
        width: '80%'
    },

    


}));





const Home = () => {

    const products = useSelector((state) => state);
    console.log("products : " + products[0]);
    const dispatch = useDispatch();






    useEffect(() => {






    }, []);


    const handleAddClick = (e) => {
        dispatch(setProducts(e.target.id));
    }
    const handleDeleteClick = (e) => {
        dispatch(removeSelectedProducts(e.target.id));
    }



    return (
        <>

            


        </>
    )
}

export default Home