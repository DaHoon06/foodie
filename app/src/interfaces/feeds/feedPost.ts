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

interface Address {
  name: string;
  sigungu: string,
  sido: string,
  x: string;
  y: string;
}

export interface FeedItem {
  title: string;
  category: string;
  address: Address;
}
