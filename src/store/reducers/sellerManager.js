import * as actionTypes from './../actions/actionTypes';

const initialState ={
    seller: [
        {id: 1, name: 'Hendri'},
        {id: 2, name: 'Agustino'},
        {id: 3, name: 'Shella'}
    ]
};

const reducer = (state = initialState, action) =>{
    switch(action.type){
        
    default:
        return state;
    }
}

export default reducer;
