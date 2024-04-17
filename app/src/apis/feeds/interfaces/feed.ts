export interface FeedListUser {
  userId: string;
  username: string;
  thumbnail?: string;
}

export interface FeedListShop {
  shopId: string;
  shopName: string;
  shopDescription: string;
  shopCategory: string;
  shopAddress: {
    sido: string;
    sigungu: string;
    fullAddress: string;
  }
}

/**@description 전체 피드 리스트 (최신순)*/
export interface FeedListsStateApi {
  feedId: string;
  feedContent: string;
  feedCreatedDate: string;
  user: FeedListUser;
  shop: FeedListShop | null;
}

/**@description 최근 다녀온 여행기*/
export interface RecentlyFeedListsStateApi {
  content: string;
  createdDate: string;
  _id: string;
  shop: {
    category: string;
    description?: string;
    sido: string;
    sigungu: string;
    title: string;
  } | null;
}