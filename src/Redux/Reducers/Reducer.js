import { combineReducers } from 'redux';

const user_id = (state=0, action) => {
    switch(action.type){
        case 'login': 
            state = action.payload.id
            return state;
        default:
            return state;
    }
}
const user_email = (state='', action) => {
    switch(action.type){
        case 'login': 
            state = action.payload.email
            return state;
        default:
            return state;
    }
}
const user_name = (state='', action) => {
    switch(action.type){
        case 'login': 
            state = action.payload.first_name
            return state;
        default:
            return state;
    }
}

export default combineReducers({user_id, user_email, user_name})