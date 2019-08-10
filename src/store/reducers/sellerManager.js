import * as actionTypes from './../actions/actionTypes';

const initialState ={
    seller: [
        {id: 1, name: 'Hendri'},
        {id: 2, name: 'Agustino'},
        {id: 3, name: 'Shella'}
    ]
};

const deleteSeller = (state, action)=>{
    let newSeller = state.seller.filter(seller=>{
        return seller.id !== action.id
    })

    return {
        ...state,
        seller: [
            ...newSeller
        ]
    }
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.DELETE_SELLER:
            return deleteSeller(state, action);
    default:
        return state;
    }
}

export default reducer;
