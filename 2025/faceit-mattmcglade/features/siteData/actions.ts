import { Post } from '@/custom-type';
import { createAction } from '@reduxjs/toolkit';

export const updateSiteData = createAction<Post[]>('siteData/updateSiteData');
export const updateError = createAction<string>('siteData/updateError');
