import {ActionTypes} from '../constants/ActionTypes.js'


export const setProducts=(products)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products,
    }
}
export const selectedProducts=(products)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCTS,
        payload:products,
    }
}
export const removeSelectedProducts=(products)=>{
    return{
        type:ActionTypes.REMOVE_SELECTED_PRODUCTS,
        payload:products,
    }
}
export const increaseCount=(products)=>{
    return{
        type:ActionTypes.INCREASE_COUNT,
        payload:products,
    }
}
export const changeImageandCount=(products)=>{
    return{
        type:ActionTypes.CHANGE_IMAGE_AND_COUNT,
        payload:products,
    }
}
export const setInitialProduct=(products)=>{
    return{
        type:ActionTypes.SET_INITIAL_PRODUCT,
        payload:products,
    }
}