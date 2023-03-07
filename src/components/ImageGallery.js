import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increaseCount, selectedProducts } from './redux/actions/ProductActions.js';

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
    container1: {
        border:"2px solid black",
        minHeight:500,
        height:"fit-content",
        width:"100%",
        padding:10,
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        marginTop:10
    },
    box1:{
        border:"2px solid red",
        height:164,
        width:245,
        margin:5
    }




}));


const ImageGallery = () => {

    const classes = useStyles();

    //Redux part
    const products = useSelector((state) => state);
    const FinalProducts = (products.allProducts.products);
    // console.log("products : ", FinalProducts);
    const SelectedProduct = (products.allProducts.selectedProducts);
    const dispatch = useDispatch();


    //state part
  const [itemKey, setitemKey] = useState(0);


  useEffect(() => {
    setitemKey(Math.random());
  }, [products])


  const handleClick=(e)=>{
    console.log(e.target.id);
    dispatch(increaseCount(e.target.id));
    window.scrollTo(500, 0);
    dispatch(selectedProducts(e.target.id));
    e.stopPropagation();
  }
  


    return (
        <>
        
        <div key={itemKey} className={classes.container1}>
        {
          FinalProducts.map((item, index) => {

            return (
                <div key={index} className={classes.box1}  id={index}  onClick={handleClick} >
                    {item.name1}
                    <img style={{height:"62%",width:"100%"}} src={item.image1} alt="" id={index} onClick={handleClick}/>
                </div>
            )

          })
        }
            
        </div>
        
        </>
    )
}

export default ImageGallery