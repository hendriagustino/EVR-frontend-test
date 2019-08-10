import * as actionTypes from './actionTypes';

export const deleteSeller = (id) =>{
    return{
        type: actionTypes.DELETE_SELLER,
        id: id
    }
};
