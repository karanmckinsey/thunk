import * as T from '../types';

const initialState = {
    count: 0,
    results: [],
    error: '',
    loading: false,
}

export const counterReducer = (state, action) => {
    switch (action.type) {
        case T.INCREMENT_PENDING:
            return {...state, loading: true};
        case T.INCREMENT_SUCCESS:
            return {...state, results: action.payload, count: state.count + 1, loading: false};
        case T.INCREMENT_ERROR:
            return {...state, error: action.payload, loading: false};
        case T.DECREMENT:
            return {...state, count: action.payload};
        default: 
        return initialState;
    }
}