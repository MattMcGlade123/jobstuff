export interface FavouriteState {
  favList: number[]
}

export interface SiteDataState {
  siteData: Recipe[] | null,
  listData: Recipe[] | null,
  noResults: boolean;
  error: any
}

export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string;
  image: string
}