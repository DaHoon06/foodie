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

  test("0 ~ 0.5 점일 경우 별 0.5칸 반환 : 10%", () => {
    const expected = "10";
    const average = 0.2;
    expect(widthCaculationMockfn(average)).toEqual(expected);
  });
  test("0.6 ~ 1 점일 경우 별 1칸 반환 : 20%", () => {
    const expected = "20";
    const average = 1;
    expect(widthCaculationMockfn(average)).toEqual(expected);
  });
  test("1.1 ~ 1.5 점일 경우 별 1.5칸 반환 : 30%", () => {
    const expected = "30";
    const average = 1.1;
    expect(widthCaculationMockfn(average)).toEqual(expected);
  });
  test("1.6 ~ 2 점일 경우 별 2칸 반환 : 40%", () => {
    const expected = "40";
    const average = 1.8;
    expect(widthCaculationMockfn(average)).toEqual(expected);
  });
  test("2.1 ~ 2.5 점일 경우 별 2.5칸 반환 : 50%", () => {
    const expected = "50";
    const average = 2.2;
    expect(widthCaculationMockfn(average)).toEqual(expected);
  });
  test("2.6 ~ 3 점일 경우 별 3칸 반환 : 60%", () => {
    const expected = "60";
    const average = 2.9;
    expect(widthCaculationMockfn(average)).toEqual(expected);
  });
  test("3.1 ~ 4 점일 경우 별 3.5칸 반환 : 70%", () => {
    const expected = "70";
    const average = 4;
    expect(widthCaculationMockfn(average)).toEqual(expected);
  });
  test("4.1 ~ 4.5 점일 경우 별 4칸 반환 : 80%", () => {
    const expected = "80";
    const average = 4.2;
    expect(widthCaculationMockfn(average)).toEqual(expected);
  });
  test("4.6 ~ 4.9 점일 경우 별 4.5칸 반환 : 90%", () => {
    const expected = "90";
    const average = 4.8;
    expect(widthCaculationMockfn(average)).toEqual(expected);
  });
  test("5 점일 경우 별 5칸 반환 : 100%", () => {
    const expected = "100";
    const average = 5;
    expect(widthCaculationMockfn(average)).toEqual(expected);
  });
});
