import { RootState } from "@/lib/store";

export const selectFavList = (state: RootState): string[] => state.favourites.favList;
