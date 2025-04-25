import {createStore}from "redux"

const a={

    counter:0
}

export function reducer(state=a,action){
   
    if(action.type==="Increment"){
         return {
            counter:state.counter+5
         }
    }
    if(action.type==="Decrement"){
        return {
            counter:state.counter-5
        }
    }
  return state

}
export const store=createStore(reducer);



