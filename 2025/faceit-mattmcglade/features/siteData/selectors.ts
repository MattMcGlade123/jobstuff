import { Post } from "@/custom-type";
import { RootState } from "@/lib/store";

export const selectSiteData = (state: RootState): Post[] | null => state.siteData.siteData;
export const selectPageNumber = (state: RootState): number => state.siteData.pageNumber;
export const selectError = (state: RootState): any => state.siteData.error;
export const selectAddedNewPost = (state: RootState): any => state.siteData.addedNewPost;
