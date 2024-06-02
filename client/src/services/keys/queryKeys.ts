export const queryKeys = {
  feeds: {
    lists: "get_feed_lists_key",
    myLists: "get_my_feed_lists_key",
    recentlyLists: "get_recently_feed_key",
  },
  lists: {
    restaurantLists: "get_restaurant_lists_key",
  },
  maps: {
    marker: "get_marker_data_key",
  },
  users: {
    todayRecommend: "get_today_recommend_key",
  },
} as const;
