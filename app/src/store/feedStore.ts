import { FeedItem } from "@interfaces/feeds/feedPost";
import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";

type FeedInitialState = {
  item: FeedItem;
};

type SetFeedStore = {
  setFeedItem: (item: FeedItem) => void;
};

const initialState: FeedInitialState = {
  item: {
    title: "",
    category: "",
    sigungu: "",
    dong: "",
  },
};

const useFeedStore = create(
  devtools(
    combine<FeedInitialState, SetFeedStore>(initialState, (set) => ({
      setFeedItem: (item: FeedItem) => set(() => ({ item })),
    }))
  )
);

export default useFeedStore;
