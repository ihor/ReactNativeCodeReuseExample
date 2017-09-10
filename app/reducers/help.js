import * as types from '../actions/types';

const initialState = {
    requests: 0,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case types.HELP_REQUESTED:
            return {requests: state.requests + 1};

        default: return state;
    }
};

export const getRequestsNumber = state => state.requests;
