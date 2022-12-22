import {GET_PLACES} from '../actions/actions'

const initialState = {
    places: []
}

const rootReducer = (state=initialState,action) => {
    switch (action.type) {
        case GET_PLACES:
            return {
                ...state,
                places: action.payload,
            }
        default:
            break;
    }
}

export default rootReducer