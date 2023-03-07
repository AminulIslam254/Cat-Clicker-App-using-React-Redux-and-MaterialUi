import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import FormData from '../FormData';
import { setProducts } from '../redux/actions/ProductActions';




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
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        height: 260,
        width: "80%",
        padding: 10,
    }




}));





const RightPanel = (props) => {


    const classes = useStyles();


    //Redux Part
    const dispatch = useDispatch();

    //Data part
    const initialState = { name1: "", image1: "", click1: "0" };
    let [formValue, setformValue] = useState(initialState);






    const handleChange = (event) => {

        const { name, value } = event.target;
        setformValue({ ...formValue, [name]: value });
    };



    const handleDataSave = () => {
        dispatch(setProducts(formValue));
    }



    return (
        <>

            <div style={{ border: "2px solid black", width: "34%" }}>

                <div style={{}}>
                    <FormData/>
                </div>


                <div className={classes.container1}>
                    <h4>Cat Name</h4>
                    <input type="text" name="name1" id="" onChange={handleChange} style={{ width: "100%" }} />
                    <h4>Cat Image</h4>
                    <input type="text" name="image1" id="" onChange={handleChange} style={{ width: "100%" }} />
                    <h4>Cat Click</h4>
                    <input type="text" name="click1" id="" onChange={handleChange} style={{ width: "100%" }} />
                </div>
                <div style={{marginTop:5}}>
                    <button style={{ backgroundColor: "green", color: "white", width: 73, borderRadius: 5 }} onClick={handleDataSave}>Save</button>
                    <button style={{ backgroundColor: "red", color: "white", width: 73, borderRadius: 5 }}>Undo</button>
                </div>
            </div>



        </>
    )




    



}


const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProp=(dispatch)=>{
    return{
        changeName:(value1)=>{dispatch({type:"SET_PRODUCTS",payload:value1})}
    }
}







export default (RightPanel)