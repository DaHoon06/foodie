interface LocationItem {
  name: string;
  description: string;
  location: string;
  thumbnail: string;
}

interface User {
  username: string;
  id: string;
}

export interface FeedPostBody {
  content: string;
  files: File[];
  items: LocationItem;
  user: User;
}
