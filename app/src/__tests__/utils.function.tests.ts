import { widthCaculation } from "@components/ui/rating/star";

/**
 * @description 별점 계산
 * 0 ~ 5 점의 평균 점수가 넘어온다.
 *
 *
 */

describe("평균 점수를 가지고 너비 구하기", () => {
  let widthCaculationMockfn: jest.Mock;

  beforeEach(() => {
    widthCaculationMockfn = jest.fn(widthCaculation);
  });

  test("0 ~ 0.5 점일 경우 별 0.5칸 반환 : 10%", () => {});
  test("0.6 ~ 1 점일 경우 별 1칸 반환 : 20%", () => {});
  test("1.1 ~ 1.5 점일 경우 별 1.5칸 반환 : 30%", () => {});
  test("1.6 ~ 2 점일 경우 별 2칸 반환 : 40%", () => {});
  test("2.1 ~ 2.5 점일 경우 별 2.5칸 반환 : 50%", () => {});
  test("2.6 ~ 3 점일 경우 별 3칸 반환 : 60%", () => {});
  test("3.1 ~ 4 점일 경우 별 3.5칸 반환 : 70%", () => {});
  test("4.1 ~ 4.5 점일 경우 별 4칸 반환 : 80%", () => {});
  test("4.6 ~ 4.9 점일 경우 별 4.5칸 반환 : 90%", () => {});
  test("5 점일 경우 별 5칸 반환 : 100%", () => {});
});
