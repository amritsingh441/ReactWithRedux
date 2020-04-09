import { ADD_NOTE, DELETE_NOTE, GET_NOTES } from './types';

export const getNotes = () => {
    return {
        type: GET_NOTES
    }
}

export const deleteNote= (id: any) => {
    return {
        type: DELETE_NOTE,
        payload: id
    }
}

export const addNote = (note: any) => {
    return {
        type: ADD_NOTE,
        payload: note
    }
}