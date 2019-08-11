interface IResponse<T> {
  httpCode: number;
  message?: string;
}

interface IResponseJson<T> extends IResponse<string> {
  data: T;
}

export function ResponseOkJson<T>(
  code: number,
  value: T,
  message?: string
): IResponseJson<T> {
  return { httpCode: code, message, data: value };
}

export function ResponseErrorJson<T>(
  code: number,
  value: T,
  message?: string
): IResponseJson<T> {
  return { httpCode: code, message, data: value };
}
