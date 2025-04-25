import {createStore}from "redux"

const a={

    counter:0
}

export function reducer(state=a,action){
   
    if(action.type==="Increment"){
         return {
            counter:state.counter+2
         }
    }
    if(action.type==="Decrement"){
        return {
            counter:state.counter-2
        }
    }
  return state

}
export const store=createStore(reducer);



