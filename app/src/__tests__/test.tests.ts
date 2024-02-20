/**
 * @description 콜렉터 URL 생성
 * @param {string} baseUrl 기존 api 호출 경로
 * @param {string} unisurvey baseUrl 기준 콜렉터 url로 변경해야하는지
 *  true: unisurvey, false: collector
 *  @param {number} parameterCount 넘기는 파라미터 개수에 따라 콜렉터 url 위치 조정
 */
export const makeApiUrl = (
  baseUrl: string,
  unisurvey: boolean,
  parameterCount: number,
): string => {
  let url = baseUrl;
  if (!unisurvey) {
    const splitUrl: string[] = baseUrl.split("/");
    const addIndex = splitUrl.length - parameterCount; // 맨 마지막에서 앞에
    splitUrl.splice(addIndex, 0, "collector");
    url = splitUrl.join("/");
  }
  return url;
};

describe("URL CONVERT", () => {
  test("유니서베이에서 사용되는 URL을 변환... test 셋업이 안되어있어서 여기서 테스트", () => {
    const SNUM = 6522;
    const baseUrl = `/project/payment/info/${SNUM}`;
    const expectedUrl = `/project/payment/info/collector/${SNUM}`;

    const maker = jest.fn(makeApiUrl);
    expect(maker(baseUrl, false, 1)).toEqual(expectedUrl);
  });
});

const DEFAULT_NUMBER = 1000000;

/**
 * @param {number} SNUM 프로젝트 번호
 * 유니서베이 콜렉터 전용 설문 확인 체크
 * true일 경우 유니서베이 콜렉터 설문
 * false의 경우 metaSurvey 설문
 */
export const collectorSurveyCheck = (SNUM: number): boolean => {
  const collectorNumber = Number(+process.env.COLLECTOR_PROJECT_NUMBER);
  if (process.env.COLLECTOR_PROJECT_NUMBER && !isNaN(collectorNumber))
    return SNUM >= collectorNumber;
  else return SNUM >= DEFAULT_NUMBER;
};

describe("process.env.COLLECTOR_PROJECT_NUMBER CHECK", () => {
  test.skip("process.env.COLLECTOR_PROJECT_NUMBER을 읽을 수 있는지 체크한다.", () => {
    const expectedNumber = 10000000;
    const number = process.env.COLLECTOR_PROJECT_NUMBER;
    expect(number).not.toEqual(expectedNumber);
  });

  test.skip("process.env.COLLECTOR_PROJECT_NUMBER가 숫자형인지 체크한다.", () => {
    const expectedNumber = 10000000;
    const number = +process.env.COLLECTOR_PROJECT_NUMBER;
    expect(typeof number).toEqual(typeof expectedNumber);
  });

  test.skip("process.env.COLLECTOR_PROJECT_NUMBER에 문자열이 들어갔을 때 NaN을 반환하는지 체크한다.", () => {
    const number = +process.env.COLLECTOR_PROJECT_NUMBER;
    expect(Number(number)).toBeNaN();
  });

  test.skip("SNUM을 넘겼을 때 boolean 값을 넘겨 받는지 체크한다.", () => {
    const SNUM = 9999999;
    const collectorCheckFn = jest.fn(collectorSurveyCheck);
    expect(collectorCheckFn(SNUM)).toBeTruthy();
  });

  test.skip("process.env.COLLECTOR_PROJECT_NUMBER 가 NaN 일 때 DEFAULT_NUMBER를 반환하는지 확인", () => {
    const SNUM = 9999999;
    const collectorCheckFn = jest.fn(collectorSurveyCheck);
    expect(collectorCheckFn(SNUM)).toEqual(DEFAULT_NUMBER);
  });

  test.skip("최종 함수 테스트 콜렉터는 true, 메타서베이는 false를 반환해야한다.", () => {
    const SNUM = 1000001; // 유니 설문
    const collectorCheckFn = jest.fn(collectorSurveyCheck);
    expect(collectorCheckFn(SNUM)).toBeTruthy();
  });
});

const DB = [
  {
    questionIndex: 1,
    questionNumber: "DESC",
  },
  {
    questionIndex: 2,
    questionNumber: "SQ1",
  },
  {
    questionIndex: 3,
    questionNumber: "SQ2",
  },
  {
    questionIndex: 4,
    questionNumber: "SQ2_RECODE",
  },
  {
    questionIndex: 5,
    questionNumber: "SQ3",
  },
  {
    questionIndex: 6,
    questionNumber: "QUOTA_SQ1_SQ2",
  },
];
type InsertQuestionDto = {
  questionIndex: number;
  questionNumber: string;
};
/**@description 쿼터 모듈 추가 - SQ2 문항 뒤로 순서 바꾸기
 * @param {InsertQuestionDto[]} question 설문 정보가 담긴 배열 data
 * @param {string} cursor 이동할 문항의 인덱스가 될 questionNumber
 * @param {string} target 이동시킬 문항 questionNumber
 * */
export const changeQuestionsIndex = (
  question: InsertQuestionDto[],
  cursor: string,
  target: string,
): InsertQuestionDto[] => {
  const cursorIndex = question.findIndex((v) => v.questionNumber === cursor);
  const targetIndex = question.findIndex((v) => v.questionNumber === target);

  function moveValue(
    array: InsertQuestionDto[],
    fromIndex: number,
    toIndex: number,
  ) {
    const item = array.splice(fromIndex, 1)[0];
    array.splice(toIndex, 0, item);
  }

  moveValue(question, targetIndex, cursorIndex);

  return question
    .map((value, index) => {
      return {
        ...value,
        questionIndex: index + 1,
      };
    })
    .sort((a, b) => a.questionIndex - b.questionIndex);
};

describe("유니서베이 문항 순서 변환 테스트", () => {
  test("쿼터 문항의 위치를 SQ_RECODE 뒤 쪽에 위치하도록 한다.", () => {
    const expectedValue = [
      {
        questionIndex: 1,
        questionNumber: "DESC",
      },
      {
        questionIndex: 2,
        questionNumber: "SQ1",
      },
      {
        questionIndex: 3,
        questionNumber: "SQ2",
      },
      {
        questionIndex: 4,
        questionNumber: "SQ2_RECODE",
      },
      {
        questionIndex: 5,
        questionNumber: "QUOTA_SQ1_SQ2",
      },
      {
        questionIndex: 6,
        questionNumber: "SQ3",
      },
    ];

    const mockFunction = jest.fn(changeQuestionsIndex);
    const target = "QUOTA_SQ1_SQ2";
    const cursor = "SQ3";
    expect(mockFunction(DB, cursor, target)).toEqual(expectedValue);
  });
});

const getHashTag = (text: string) => {
  const value = text.replace("\n", "");
  return value.match(/#[^\s]+/g) || "";
};

const getDate = (milliSeconds: number): string => {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const data = new Date(milliSeconds); //Date객체 생성

  const year = data.getFullYear(); //0000년 가져오기
  const month = data.getMonth() + 1; //월은 0부터 시작하니 +1하기
  const date = data.getDate(); //일자 가져오기
  const day = days[data.getDay()]; //요일 가져오기

  return `${year}.${month}.${date}. (${day})`;
};

describe("해시태그 뽑아내기", () => {
  test("주어진 문자열에서 해시태그를 찾아 배열로 반환", () => {
    const TEXT =
      "#광고\n" +
      "인천국제공항을 접수하러 온 KB국민은행?!\n" +
      "\n" +
      "인천국제공항 상공에 귀여운 스타프렌즈가 붙은 비행기가 등장하자\n" +
      "공항이 기다렸다는 듯 천장을 열고,\n" +
      "낙하산에 매달린 선물 같은 ATM기가 공항 안으로 착륙합니다.\n" +
      "\n" +
      "최근 인천국제공항 입점을 기념하여 KB국민은행이 제작한 FOOH (Fake Out Of Home) 영상이 화제인데요 ~ \n" +
      "2024년 1월부터 인천공항 곳곳에서 KB국민은행의 영업점, 환전소, 그리고 ATM기를 이용할 수 있다고 하니\n" +
      "3천만 국민은행 주거래 고객에게 반가운 새해 소식이 될 것 같습니다~\n" +
      "\n" +
      "#인천공항은행 #KB국민은행 #환전 #국민은행 #FOOH";
    const expectedValue = [
      "#광고",
      "#인천공항은행",
      "#KB국민은행",
      "#환전",
      "#국민은행",
      "#FOOH",
    ];
    const mockFunction = jest.fn(getHashTag);
    expect(mockFunction(TEXT)).toEqual(expectedValue);
  });

  test("밀리초를 넘겨 날짜를 반환 받는다.", () => {
    const millSeconds = 1649772049;
    const expectedValue = "롸";
    const mockFunction = jest.fn(getDate);
    expect(mockFunction(millSeconds)).toEqual(expectedValue);
  });
});

interface Pagination {
  page: number;
  total_count: number;
  total_page: number;
  unit: number;
}

const paginationFunction = (pagination: Pagination) => {
  const { page, total_page, total_count, unit } = pagination;
};

describe("페이지네이션 번호 만들기", () => {
  test("페이징 처리 case 1 1 ~ 10", () => {
    const mockFn = jest.fn(paginationFunction);
  });

  test("페이징 처리 case 2 2 ~ 20", () => {
    const mockFn = jest.fn(paginationFunction);
  });
});
