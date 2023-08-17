//  actions constants
export const ADD_NOTES = "add_notes";
export const DELETE_NOTES = "delete notes";


// actions creators
export const addNote = (text) => ({text, type : ADD_NOTES });
export const deleteNote = (index) => ({index,type : DELETE_NOTES});