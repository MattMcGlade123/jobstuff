import { Recipe } from '@/custom-type';
import { createAction } from '@reduxjs/toolkit';

export const updateSiteData = createAction<Recipe[]>('siteData/updateSiteData');
export const updateError = createAction<string>('siteData/updateError');
