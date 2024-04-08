/**
 * @param {Date} payload
 * date 포맷 변환
 */
export const dateConvert = (payload: Date | undefined) => {
  if (!payload) return "";
  const date = new Date(payload);
  const year = date.getFullYear();
  const month = addZeroNumber(date.getMonth() + 1);

  const day = addZeroNumber(date.getDate());
  const hours = addZeroNumber(date.getHours());
  const minutes = addZeroNumber(date.getMinutes());
  const seconds = addZeroNumber(date.getSeconds());

  const formatDate1 = `${year}-${month}-${day}`; // ex) 2023-06-30
  const formatTime = `${hours}:${minutes}:${seconds}`; // ex) 10:23:15

  return `${formatDate1} ${formatTime}`;
};

const addZeroNumber = (value: number): string => {
  let number = String(value);
  if (value < 10) number = `0${number}`;
  return number;
};

/**
 * @param startDate
 * @param endDate
 * @description 종료까지 남은 시간 구하기
 */
export const remainTime = (startDate: Date, endDate: Date): string => {
  const currentTime = startDate.getTime();
  const endTime = endDate.getTime();

  const remainMilliseconds = endTime - currentTime;

  const remainSecond = Math.floor(remainMilliseconds / 1000);
  const remainMinutes = Math.floor(remainSecond / 60); // 분으로 표현
  const remainHours = Math.floor(remainMinutes / 60); // 시간으로 표현
  const remainDays = Math.floor(remainHours / 24); // 하루로 표현

  // 시간, 분, 초를 남은 시간으로 변환
  const hoursRemainder = remainHours % 24;
  const minutesRemainder = remainMinutes & 60;

  if (remainDays > 0)
    return `${remainDays} 일 ${hoursRemainder} 시간 ${minutesRemainder} 분`;
  else if (hoursRemainder > 0)
    return `${hoursRemainder} 시간 ${minutesRemainder} 분`;
  else return `${minutesRemainder}분`;
};
