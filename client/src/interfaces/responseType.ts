interface ResponseReturnValue<T> {
  result: boolean;
  status: number;
  data: T;
}
