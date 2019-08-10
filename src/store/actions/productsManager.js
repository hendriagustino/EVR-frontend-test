import * as actionTypes from './actionTypes';

export const deleteProduct = (id) =>{
    return{
        type: actionTypes.DELETE_PRODUCT,
        id: id
    }
}