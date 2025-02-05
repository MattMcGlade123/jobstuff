import { createReducer } from '@reduxjs/toolkit';
import { SiteDataState } from '../../custom-type'

import { updateSiteData } from './actions';

export const initialState: SiteDataState = {
  siteData: null
};

export const siteDataReducer = createReducer(initialState, (builder) => {
  builder.addCase(updateSiteData, (state, action) => {
    state.siteData = action.payload;
  });
});
