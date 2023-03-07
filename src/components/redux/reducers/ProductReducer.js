import { ActionTypes } from "../constants/ActionTypes";


const initialState = {
    products: [

    ],
    selectedProducts: [
        "0"
    ]

}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case (ActionTypes.SET_PRODUCTS):
            return {
                ...state,
                products: state.products.concat(payload)
            };
        case (ActionTypes.SELECTED_PRODUCTS):
            return {
                ...state,
                selectedProducts: payload
            };

        case (ActionTypes.INCREASE_COUNT):
            // const newItem={...state};
            // // console.log(newItem);
            // const index1=parseInt(newItem.selectedProducts);
            // let val1=parseInt(newItem.products[index1].click1);
            // // console.log(val1+1)
            // val1=val1+1
            // // val1=parseInt(val1)+1;
            // state.products[index1].click1=val1;
            console.log(payload)

            return {
                ...state,
                products: state.products.map(
                    (product, index) => (index == payload) ? { ...product, click1: (parseInt(product.click1) + 1)  } : product
                )
            }


        case (ActionTypes.CHANGE_IMAGE_AND_COUNT):
            // console.log(payload);
            // console.log("select "+state.selectedProducts);
            return {
                ...state,
                products: state.products.map(
                    (product, index) => (index == state.selectedProducts) ? { ...product, click1: parseInt(payload.click1),image1:payload.image1 } : product
                )
            }
        case (ActionTypes.SET_INITIAL_PRODUCT):
            console.log(typeof(payload));
            // console.log("select "+state.selectedProducts);
            return{
                ...state,
                products:payload.map((item,index)=>item)
            }

        case (ActionTypes.REMOVE_SELECTED_PRODUCTS):
            let ind = state.products.indexOf(payload);
            state.products = state.products.filter((item, index) => index !== ind)

            return state

        default:
            return state;
    }
}