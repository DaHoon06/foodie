interface ResponseReturnValue<D> {
  result: boolean;
  status: number;
  data: D;
}

export const responseConversion = <T>(data: T): ResponseReturnValue<T> => {
  return {
    result: true,
    status: 200,
    data,
  };
};