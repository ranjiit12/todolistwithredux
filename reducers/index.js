import { combineReducers } from 'redux';
import addItemReducer from "./reducer_addtodoitem";

const rootReducer = combineReducers({

  addItem: addItemReducer
  
});

export default rootReducer;
