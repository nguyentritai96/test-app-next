// Libraries
import { HYDRATE } from 'next-redux-wrapper';

// Actions
import { actionTypes } from '@store/test/actions';

const initialState = {
  number: 1,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }

    case actionTypes.ADD_NEW_RD:
      return {
        ...state,
        ...{ number: action.payload.number },
      };

    default:
      return state;
  }
}

export default reducer;
