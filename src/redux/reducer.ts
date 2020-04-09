import { ADD_NOTE, DELETE_NOTE, GET_NOTES} from './types';

export const initialState = {
    notes: [
        {
            id: "1",
            title: "Sports",
            description: "Sports Notes"
           
        },
        {
            id: "2",
            title: "Bollywood",
            description: "Bollywood Notes"
        },
        {
            id: "3",
            title: "Politics",
            description: "Political Notes"
        }
    ]
}
export default function reducer(state = initialState, action: any) {
    switch (action.type) {
        case GET_NOTES: {
            return {
                ...state
            }
        }

        case ADD_NOTE: {
            return {
                ...state, 
                notes: [action.payload, ...state.notes]
            }
        }

        case DELETE_NOTE: {
            return {
                ...state, 
                notes: state.notes.filter(note => note.id !== action.payload)
            }
        }

        default: return state;
    }
}