export const Types = {
    TITLE: 'route/Title'
};

const initialState = {
    title: '',
    subTitle: ''
};

export default function reducer(state = initialState, action)  {
    switch (action.type) {
        case Types.TITLE:
            return { ...state, ...action.payload };

        default:
            return state;
    };
};

export const setTitle = value => {
    return dispatch => dispatch({ type: Types.TITLE, payload: value });
};