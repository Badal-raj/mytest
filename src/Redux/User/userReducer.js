
import {
    REGISTER_SUCCESS,
    REGISTER_ERROR,
} from '../actions'

const initialState = {
    
};

export const userReducer = (state = initialState, action) => {
    const {type, payload}= action
  switch (type) {
      case REGISTER_SUCCESS:
          return {...state, ...payload};

      case REGISTER_ERROR:
          return {...state};

       default:
          return initialState;

  }
}
 