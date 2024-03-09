export type Region = {
  district: string;
  town: string;
};

export type Categories = {
  majorCategory: string;
  middleCategory: string[];
};

/**
 * @description 지역 정보를 조합하여 string으로 반환
 * @param {Region} region 지역 정보 district: string / town: string
 */
export const makeRegionTag = (region: Region): string => {
  const { district, town } = region;
  let base = district;
  if (town && town.length > 0) base = base.concat(`/${town}`);
  return base;
};

/**
 * @description 카테고리 정보를 조합하여 string으로 반환
 * @param {Region} region 지역 정보 majorCategory: string / middleCategory: string[]
 */
export const makeCategoryTag = (categories: Categories): string => {
  const { majorCategory, middleCategory } = categories;
  let base = majorCategory;
  if (middleCategory && middleCategory.length > 0) {
    base = base.concat('/');
    const length = middleCategory.length;
    middleCategory.forEach((category: string, index: number) => {
      if (length === index + 1) base = base.concat(`${category}`);
      else base = base.concat(`${category},`);
    });
  }
  return base;
};
