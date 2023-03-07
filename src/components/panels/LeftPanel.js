import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useSelector, connect, useDispatch } from 'react-redux';
import { selectedProducts, setInitialProduct } from '../redux/actions/ProductActions';



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
    minHeight: 50,
    width: "90%",
    margin: 5,
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center"
  },
  box1Cnt:{
    backgroundColor:"grey",
    height:30,
    width:50,
    textAlign:"center",
    color:"white",
    borderRadius:10
  }




}));



const LeftPanel = (props) => {


  const classes = useStyles();


  //Redux part
  const products = useSelector((state) => state);
  const FinalProducts = (products.allProducts.products);
  // console.log("products : ",FinalProducts);
  const SelectedProduct = (products.allProducts.selectedProducts);

  const dispatch = useDispatch();








  //state part
  const [itemKey, setitemKey] = useState(0);
  const [currentlyClicked, setCurrentlyClicked] = useState("0")


  useEffect(() => {
    setitemKey(Math.random());
    console.log(SelectedProduct)
    setCurrentlyClicked(SelectedProduct);
  }, [SelectedProduct])

  //Handle Click

  const handleClick = (e) => {

    setCurrentlyClicked(e.target.id);

    // e.target.style.backgroundColor="blue";
    // e.target.style.color="white";

    dispatch(selectedProducts(e.target.id));
    // console.log(e.target.id);
    setitemKey(Math.random());
    e.stopPropagation();
  }


  useEffect(() => {
    const var1=localStorage.getItem("myReduxData");
    if(var1!==null)
    {
      dispatch(setInitialProduct(JSON.parse(var1)));
    }
  }, [])
  useEffect(() => {
    if(FinalProducts.length !== 0){
      localStorage.setItem("myReduxData",JSON.stringify(FinalProducts));
    }
    // console.log("FinalProducts: "+FinalProducts.length)
  }, [products])
  




  return (
    <>


      <div key={itemKey} style={{ display: "flex", flexDirection: "column", height: 500, width: 255, overflow: "hidden", overflowY: "scroll" }}>


        {
          FinalProducts.map((item, index) => {

            return (
              <div key={index} className={classes.box1} id={index} 
              style={{ backgroundColor: (index == currentlyClicked) ? "blue" : "white", color: (currentlyClicked == index) ? "white" : "black" }} 
              onClick={handleClick}>
                <div id={index}  onClick={handleClick}>{item.name1}</div>
                <div id={index}  onClick={handleClick} className={classes.box1Cnt}>{item.click1}</div>
                
              </div>
            )

          })
        }

      </div>


    </>
  )
}


const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

const mapDispatchToProp = (dispatch) => {
  return {
    changeName: (value1) => { dispatch({ type: "SET_PRODUCTS", payload: value1 }) }
  }
}





export default (LeftPanel)