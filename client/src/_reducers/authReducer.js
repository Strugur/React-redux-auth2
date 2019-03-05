import { LOGIN,REG, CHECK_AUTH,LOG_OUT } from '../_actions/types';

const initialState = {
    isAuth:null,
    username:null,
    email:null,
    password:null,
    userExists:null,
    badLogin:null
    
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        
        isAuth:action.payload.isAuth,
        badLogin:action.payload.badLogin
      }
      case REG:
      return {
        ...state,
        userExists: action.payload
      }
      case CHECK_AUTH:
      return {
        ...state,
        username: action.payload.username,
        isAuth:action.payload.isAuth
      }
      case LOG_OUT:
      return {
        ...state,
        
        isAuth:action.payload
      }
      

   
   
    default:
      return state;
  }

  
}