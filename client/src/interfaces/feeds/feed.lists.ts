import {
  FeedListsStateApi,
  RecentlyFeedListsStateApi,
} from "@apis/feeds/interfaces/feed";

export interface FeedListsState extends FeedListsStateApi {}

export interface FeedDetailSate extends Omit<FeedListsStateApi, "shop"> {
  shop: {
    shopName: string;
    shopCategory: string;
    shopAddress: {
      name: string;
      sido: string;
      sigungu: string;
      fullAddress: string;
      x: string;
      y: string;
    };
  };
}
export interface RecentlyFeedListsState extends RecentlyFeedListsStateApi {}
