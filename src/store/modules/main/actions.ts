import { STORE_MAIN_MODULE, SUCCESS, ERRORS } from '@/constants';

// import {
//   register,
//   login,
//   forgot,
//   reset,
//   updateProfile,
// } from '@/services/API.service';

import { RESET_STATE_MUTATION } from './mutations';

// export const SET_RECAPTCHA_ACTION = `${STORE_AUTH_MODULE}/SET_RECAPTCHA_ACTION`;
// export const REGISTER_ACTION = `${STORE_AUTH_MODULE}/REGISTER_ACTION`;
// export const LOGIN_ACTION = `${STORE_AUTH_MODULE}/LOGIN_ACTION`;
// export const LOGOUT_ACTION = `${STORE_AUTH_MODULE}/LOGOUT_ACTION`;
// export const FORGOT_PASSWORD_ACTION = `${STORE_AUTH_MODULE}/FORGOT_PASSWORD_ACTION`;
// export const RESET_PASSWORD_ACTION = `${STORE_AUTH_MODULE}/RESET_PASSWORD_ACTION`;
// export const CHANGE_PASSWORD_ACTION = `${STORE_AUTH_MODULE}/CHANGE_PASSWORD_ACTION`;
// export const CHANGE_NAME_ACTION = `${STORE_AUTH_MODULE}/CHANGE_NAME_ACTION`;
// export const RESET_ALERT_ACTION = `${STORE_AUTH_MODULE}/RESET_ALERT_ACTION`;
export const RESET_STATE_ACTION = `${STORE_MAIN_MODULE}/RESET_STATE_ACTION`;

export const actions = {
  RESET_STATE_ACTION: ({ commit }: any, payload: any) =>
    commit(RESET_STATE_MUTATION),
};
