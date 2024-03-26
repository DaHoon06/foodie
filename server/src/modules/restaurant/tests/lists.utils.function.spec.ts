import { makeCategoryTag, makeRegionTag } from '../utiils/lists';

describe('list 유틸 함수를 테스트한다.', () => {
  test('지역 정보를 조합하여 하나의 문자열로 반환한다.', () => {
    const region: any = {
      major: '서울',
      district: '구로구',
      town: '구로동',
    };
    const expectedData = '구로구/구로동';
    const mockFn = jest.fn(makeRegionTag);

    expect(mockFn(region)).toBe(expectedData);
  });

  test('카테고리 정보를 조합하여 하나의 문자열로 반환한다.', () => {
    const categories: any = {
      majorCategory: '양식',
      middleCategory: ['치킨', '튀김'],
    };
    const expectedData = '양식/치킨,튀김';
    const mockFn = jest.fn(makeCategoryTag);
    expect(mockFn(categories)).toBe(expectedData);
  });
});
