import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increaseCount } from '../redux/actions/ProductActions';



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
  box1: {
    border: "2px solid black",
    height: 350,
    width: 350
  }




}));




const MidPanel = () => {

  const classes = useStyles();



  //Redux part
  const products = useSelector((state) => state);
  const ProductArray = (products.allProducts.products);
  const SelectedProduct = (products.allProducts.selectedProducts);
  const dispatch = useDispatch();


  //state part
  const [itemKey, setitemKey] = useState(0);


  useEffect(() => {
    setitemKey(Math.random());
  }, [products])



  const handleClick = () => {
    dispatch(increaseCount(SelectedProduct));
  }


  useEffect(() => {
    console.log("lol "+(ProductArray[parseInt(SelectedProduct)]?.click1)<="10")
  }, [SelectedProduct])
  


  return (
    <>

      <div key={itemKey} className={classes.box1} onClick={handleClick}>
        <h1>{ProductArray[parseInt(SelectedProduct)]?.name1}</h1>
        <p>No of times Clicked : {ProductArray[parseInt(SelectedProduct)]?.click1}</p>

        <img style={{ height: "60%", width: "100%" }} src={ProductArray[parseInt(SelectedProduct)]?.image1} alt="" />
        <div>
          {
            (ProductArray[parseInt(SelectedProduct)]?.click1 <= 5) ? (
              <h4>Infant</h4>
            ) : (
              (ProductArray[parseInt(SelectedProduct)]?.click1 <= 12) ? (
                <h4>Child</h4>
              ) : (
                (ProductArray[parseInt(SelectedProduct)]?.click1 <= 25) ? (
                  <h4>Young</h4>
                ) : (
                  (ProductArray[parseInt(SelectedProduct)]?.click1 <= 40) ? (
                    <h4>Middle-age</h4>
                  ):(
                    (ProductArray[parseInt(SelectedProduct)]?.click1 <= 60) ? (
                      <h4>Old</h4>
                    ):(
                      <h4>Very Old</h4>
                    )
                  )
                )
              )

            )

          }
        </div>

      </div>


    </>
  )
}

export default MidPanel