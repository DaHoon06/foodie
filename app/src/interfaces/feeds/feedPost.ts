interface LocationItem {
  name: string;
  description: string;
  location: string;
  thumbnail: string;
}

export interface FeedPostBody {
  content: string;
  files: File[];
  items: LocationItem
}