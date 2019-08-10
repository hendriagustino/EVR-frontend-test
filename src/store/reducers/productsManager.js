import * as actionTypes from './../actions/actionTypes';

const initialState ={
    products: [
        {id: '1', name: 'AAA', price: 15000},
        {id: '2', name: 'BBB', price: 10000},
        {id: '3', name: 'CCC', price: 18000},
    ]
};

const deleteProduct = (state, action) =>{

    let newProducts = state.products.filter(product=>{
        return product.id !== action.id
    });
    
    return{
        ...state,
        products: [
            ...newProducts
        ]
    }
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.DELETE_PRODUCT:
            return deleteProduct(state, action);
    default:
        return state;
    }
}

export default reducer;
