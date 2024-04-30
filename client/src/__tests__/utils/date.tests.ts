import {formatDate} from "@utils/date";

describe('날짜 변환 테스트 케이스', () => {
  let formatDateMockFn: jest.Mock<string, [Date]>;

  beforeEach(() => {
    formatDateMockFn = jest.fn(formatDate);
  })

  test('"방금"을 반환', () => {
    const expectedValue = '방금';
    expect(formatDateMockFn(new Date())).toEqual(expectedValue);
  });

  test('"1분 전"을 반환', () => {
    const expectedValue = '1분 전';
    const targetDate = new Date('2024-01-01 14:00:00');
    expect(formatDateMockFn(targetDate)).toEqual(expectedValue);
  })

  test('"1시간 전"을 반환', () => {
    const expectedValue = '1시간 전';
    const targetDate = new Date('2024-01-01 13:00:00');
    expect(formatDateMockFn(targetDate)).toEqual(expectedValue);
  })

  test('"8일 전"을 반환', () => {
    const expectedValue = '8일 전';
    const targetDate = new Date('2024-01-01 13:00:00');
    expect(formatDateMockFn(targetDate)).toEqual(expectedValue);
  })
})
