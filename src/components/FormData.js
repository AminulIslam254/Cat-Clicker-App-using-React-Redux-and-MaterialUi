import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeImageandCount, selectedProducts, setProducts } from './redux/actions/ProductActions';



import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';





const FormData = () => {




    //Redux part
    const products = useSelector((state) => state);
    const FinalProducts = (products.allProducts.products);
    const SelectedProduct = (products.allProducts.selectedProducts);
    // console.log("products : ",FinalProducts);

    const dispatch = useDispatch();




    //Coment Popup Part
    const [open, setOpen] = useState(false);
    const [CommentLists, setCommentLists] = useState([]);
    const [dialogKey, setDialogKey] = useState(0);



    const handleClickOpen = () => {
        setprevNameValue(FinalProducts[parseInt(SelectedProduct)]?.name1);
        setOpen(true);
    };

    const handleSaveClose = () => {
        
        if(formValue.name1===prevNameValue)
        {
            dispatch(changeImageandCount(formValue));
        }
        else{
            dispatch(setProducts(formValue));
            dispatch(selectedProducts(FinalProducts.length))
        }
        setOpen(false);
    };
    const handleCancelClose = () => {
        setFormValue(initialState);
        setOpen(false);
    };



    //Data Part
    const [prevNameValue, setprevNameValue] = useState("");
    const initialState = { name1: FinalProducts[parseInt(SelectedProduct)]?.name1, image1: FinalProducts[parseInt(SelectedProduct)]?.image1, click1: FinalProducts[parseInt(SelectedProduct)]?.click1 };
    const [formValue, setFormValue] = useState(initialState);


    const handleChange = (event) => {

        const { name, value } = event.target;
        setFormValue({ ...formValue, [name]: value });
    };


    useEffect(() => {
      
        initialState.name1=FinalProducts[parseInt(SelectedProduct)]?.name1;
        initialState.image1=FinalProducts[parseInt(SelectedProduct)]?.image1;
        initialState.click1=FinalProducts[parseInt(SelectedProduct)]?.click1;
        setFormValue(initialState);
     
    }, [products])
    


   
    

   



    return (
        <>

            <div>
                <Button variant="contained" onClick={handleClickOpen}>
                    Open and Edit Form
                </Button>
                <Dialog open={open} onClose={handleCancelClose} key={dialogKey}>
                    <DialogTitle>Enter Details</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please Enter appropriate Details
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            type="email"
                            fullWidth
                            variant="standard"
                            name='name1'
                            onChange={handleChange}
                            value={formValue.name1}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Image Link"
                            type="email"
                            fullWidth
                            variant="standard"
                            name='image1'
                            onChange={handleChange}
                            value={formValue.image1}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="No of Count"
                            type="email"
                            fullWidth
                            variant="standard"
                            name='click1'
                            onChange={handleChange}
                            value={formValue.click1}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCancelClose}>Cancel</Button>
                        <Button onClick={handleSaveClose}>Done</Button>
                    </DialogActions>
                </Dialog>
            </div>





        </>
    )
}

export default FormData