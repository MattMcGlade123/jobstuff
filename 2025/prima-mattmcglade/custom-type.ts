export interface FavouriteState {
  favList: string[]
}

export interface SiteDataState {
  siteData: null
}

export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string;
  image: string
}