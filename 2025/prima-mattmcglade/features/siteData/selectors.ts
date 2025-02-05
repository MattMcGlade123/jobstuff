import { RootState } from '../../../reduxStore/store';

export const selectAuth = (state: RootState): boolean => state.auth.isAuth;
