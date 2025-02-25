export interface SiteDataState {
  siteData: Post[] | null,
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
  views: number;
  userId: number;
  thisPostCappedText?: string;
  author: {
    name: string,
    avatar: string
  }
}