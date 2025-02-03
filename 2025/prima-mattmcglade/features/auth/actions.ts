import { createAction } from '@reduxjs/toolkit';

export const updateAuthStatus = createAction<boolean>('auth/updateAuthStatus');
