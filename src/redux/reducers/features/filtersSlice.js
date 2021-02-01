import { act } from "react-dom/test-utils";
import { bindActionCreators } from "redux";

const initialState = {
    filters: {
        status: 'All',
        colors: []
    }
}

export default function filtersReducer(state=initialState, action){

    switch(action.type){

        case 'filters/statusFilterChanged': {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    status: action.playload
                }
            }
        }

        default: 
            return state;
    }
}