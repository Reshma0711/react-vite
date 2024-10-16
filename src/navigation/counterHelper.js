






import React from 'react'


export const initialState={
    count:0,
}


const INCREMENT_COUNT="INCREMENT_COUNT"
const DECREMENT_COUNT = "DECREMENT_COUNT";
const RESET_COUNT = "RESET_COUNT";

export const incrementAction={
    type:INCREMENT_COUNT
}




export const decrementAction = {
  type: DECREMENT_COUNT,
};

export const resetAction={
    tpe: RESET_COUNT
}

export const counterreducer = (state,action) => {
    
    switch (action.type) {
      case "INCREMENT_COUNT":
        return { ...state, count: state.count + 1 };
      case "DECREMENT_COUNT":
        return { ...state, count: state.count - 1 };
      case "RESET_COUNT":
        return { ...state, count: 0};
        default:
            return state;
    }
}


