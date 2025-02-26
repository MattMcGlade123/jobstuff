import { createReducer } from '@reduxjs/toolkit';
import { SiteDataState } from '../../custom-type'

import { updateCurrentPageNumber, updateError, updateSiteData } from './actions';

export const initialState: SiteDataState = {
  siteData: null,
  error: "",
  pageNumber: 2
};

export const siteDataReducer = createReducer(initialState, (builder) => {
  builder.addCase(updateSiteData, (state, action) => {
    state.siteData = action.payload;
  });
  builder.addCase(updateCurrentPageNumber, (state, action) => {
    state.pageNumber = action.payload;
  });
  builder.addCase(updateError, (state, action) => {
    state.error = action.payload;
  });
});
