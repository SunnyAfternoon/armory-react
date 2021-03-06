import {
  CLEAR_USER_DATA,
  AUTHENTICATE_USER,
  CHECKING_AUTHENTICATION,
} from './actions';

import { TOKEN_KEY } from 'features/Login/user.reducer';
import * as ls from 'lib/localStorage';

export const defaultState = {
  checkingAuthentication: true,
};

export default (state, action) => {
  switch (action.type) {
    case CLEAR_USER_DATA:
      ls.clear(TOKEN_KEY);
      return {};

    case AUTHENTICATE_USER:
      return {
        ...state,
        ...action.payload,
        loggedIn: true,
      };

    case CHECKING_AUTHENTICATION:
      return {
        ...state,
        checkingAuthentication: action.payload,
      };

    default:
      return undefined;
  }
};
