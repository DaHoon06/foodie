/**@description 오늘의 추천 미식가 리스트*/
export interface RecommendUserListsApi {
  _id: string;
  username: string;
}


export interface UserProfileUpdateBody {
  description: string;
  nickname: string
}
