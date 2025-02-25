import { Post } from "@/custom-type";
import { RootState } from "@/lib/store";

export const selectSiteData = (state: RootState): Post[] | null => state.siteData.siteData;
export const selectNoResults = (state: RootState): boolean => state.siteData.noResults;
export const selectError = (state: RootState): any => state.siteData.error;
