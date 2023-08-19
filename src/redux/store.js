// this store is created by simple redux
// const redux = require("redux");

// import * as redux from "redux";
// import {combineReducers} from "redux";
import { configureStore } from "@reduxjs/toolkit";


// below will be the same as for both redux and redux-toolkit.
import {todoReducer} from "./reducers/todoReducer";
import { noteReducer } from "./reducers/noteReducer";

// const result = combineReducers({
    // todoReducer,
    // noteReducer
// })

// export const store = redux.createStore(result);

/*------------------------------------ */


// migrating store using redux- toolkit

export const store = configureStore({
    reducer: {
        noteReducer,
        todoReducer
    }
})