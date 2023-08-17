import {ADD_NOTES,DELETE_NOTES} from "../actions/noteActions";

const initialState = {
    notes:[{text: " hello there i am new to redux and and react", createdOn: new Date()},
{text: "new features are adding on the todo app. it is little complicated", createdOn: new Date()}]
}

export function noteReducer (state= initialState, action) {
    switch (action.type) {
        case ADD_NOTES:
            return {
                ...state,
                notes:[
                    ...state.notes,
                    {
                        text:action.text,
                        createdOn: new Date(),
                    }
                ]

            }
            case DELETE_NOTES:
                state.notes.splice(action.index,1);
                return {
                    ...state,
                    notes: [...state.notes]
                }
                default: 
                return state;
    }

}