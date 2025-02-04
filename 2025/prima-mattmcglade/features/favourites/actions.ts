import { createAction } from '@reduxjs/toolkit';

export const updateFavouriteList = createAction<string[]>('favourites/updateFavouriteList');
