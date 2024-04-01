export interface FeedUser {
  username: string;
  id: string;
}

export interface FeedPostBody {
  content: string;
  files: File[];
  item: FeedItem;
  user?: FeedUser;
}

export interface FeedItem {
  title: string;
  category: string;
  sigungu: string;
  dong: string;
}
