import * as actionTypes from './../actions/actionTypes';

const initialState ={
    products: [
        {id: '1', name: 'AAA', price: 15000},
        {id: '2', name: 'BBB', price: 10000},
        {id: '3', name: 'CCC', price: 18000},
    ]
};


const reducer = (state = initialState, action) =>{
    switch(action.type){
        
    default:
        return state;
    }
}

export default reducer;
