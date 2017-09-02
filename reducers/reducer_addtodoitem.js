import {ADDTODOITEM} from "../actions";
import _ from "lodash";
export default function (state=[], action){
    switch(action.type){
        case ADDTODOITEM:
         return [action.payload, ...state]
         break;
        default:
        return state; 
    }


}