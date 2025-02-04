/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import {FavouriteState} from '../../custom-type'

import { updateFavouriteList } from './actions';

export const initialState: FavouriteState = {
  favList: [],
};

export const authReducer = createReducer(initialState, (builder) => {
  builder.addCase(updateFavouriteList, (state, action) => {
    state.favList = action.payload;
  });
});
