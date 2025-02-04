/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';

import { updateAuthStatus } from './actions';

export const initialState = {
  isAuth: false,
};

export const authReducer = createReducer(initialState, (builder) => {
  builder.addCase(updateAuthStatus, (state, action) => {
    state.isAuth = action.payload;
  });
});
