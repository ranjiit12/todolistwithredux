export const ADDTODOITEM ="addToDoItem";
import _ from "lodash";

export function addTodoItem (item){
  
    const id = _.random(33,1000)*2;
    const finalItem= {
        item:item,
        id:id
    }
   return {
       type: ADDTODOITEM,
       payload: item
   }
}