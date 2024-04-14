export interface Address {
  address_name: string;
  b_code: string;
  h_code: string;
  main_address: string;
  mountain_yn: string;
  region_1depth_name: string;
  region_2depth_name: string;
  region_3depth_name: string;
  region_3depth_h_name: string;
  sub_address_no: string;
  x: string;
  y: string;
}

export interface RoadAddress {
  address_name: string;
  building_name: string;
  main_building_no: string;
  region_1depth_name: string;
  region_2depth_name: string;
  region_3depth_name: string;
  road_name: string;
  sub_building_no: string;
  underground_yn: string;
  x: string;
  y: string;
  zone_no: string;
}

export interface KakaoAddressDocument {
  address: Address;
  address_name: string;
  address_type: string;
  road_address: RoadAddress
  x: string;
  y: string;
}

export interface KakaoAddress {
  address: string;
  addressEnglish: string;
  addressType: string;
  apartment: string;
  autoJibunAddress: string;
  autoJibunAddressEnglish: string;
  autoRoadAddress: string;
  autoRoadAddressEnglish: string;
  bcode: string;
  bname: string;
  bnameEnglish: string;
  bname1: string;
  bname1English: string;
  bname2: string;
  bname2English: string;
  buildingCode: string;
  buildingName: string;
  jibunAddress: string;
  jibunAddressEnglish: string;
  noSelected: string;
  postCode: string;
  postCode1: string;
  postCode2: string;
  postCodeSeq: string;
  query: string;
  roadAddress: string;
  roadAddressEnglish: string;
  roadname: string;
  roadnameCode: string;
  roadnameEnglish: string;
  sido: string;
  sidoEnglish: string;
  sigungu: string;
  sugunguEnglish: string;
  userLanguageType: string;
  userSelectedType: string;
  zonecode: string;
}
