// import {ADD_NOTES,DELETE_NOTES} from "../actions/noteActions";

const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    notes:[{text: " hello there i am new to redux and and react", createdOn: new Date()},
{text: "new features are adding on the todo app. it is little complicated", createdOn: new Date()}]
}


const noteSlice = createSlice ({
    name : "note",
    initialState : initialState,
    reducers: {
        // this is add reducers
        add: (state,action) => {
            state.notes.push[{
                text : action.payload,
                createdOn: new Date(),

            }]
        },
        // this is delete reducers
        delete: (state,action) => {
            state.notes.splice(action.payload,1);
        },

    }
}); 

export const noteReducer = noteSlice.reducer;
export const action = noteSlice.actions;

// selector function

export const noteSelector = (state) => state.noteReducer.notes;

// this is example of reducer function using the redux function

// export function noteReducer (state= initialState, action) {
//     switch (action.type) {
//         case ADD_NOTES:
//             return {
//                 ...state,
//                 notes:[
//                     ...state.notes,
//                     {
//                         text:action.text,
//                         createdOn: new Date(),
//                     }
//                 ]

//             }
//             case DELETE_NOTES:
//                 state.notes.splice(action.index,1);
//                 return {
//                     ...state,
//                     notes: [...state.notes]
//                 }
//                 default: 
//                 return state;
//     }

// }