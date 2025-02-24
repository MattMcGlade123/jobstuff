export interface SiteDataState {
  siteData: Post[] | null,
  listData: Post[] | null,
  noResults: boolean;
  error: any
}

export interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number,
    dislikes: number
  },
  views: number,
  userId: number
  author: {
    name: string,
    avatar: string
  }
}