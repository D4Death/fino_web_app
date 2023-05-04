import axios, { AxiosInstance, AxiosResponse } from "axios";

// function readCookie(name: string) {
//   const match = document.cookie.match(
//     new RegExp("(^|;\\s*)(" + name + ")=([^;]*)")
//   );
//   return match ? decodeURIComponent(match[3]) : null;
// }

declare module "axios" {
  interface AxiosResponse<T = any> extends Promise<T> {}
}

export default abstract class FinoAxios {
  protected readonly instance: AxiosInstance;

  public constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
    });

    this._initializeResponseInterceptor();
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError
    );
  };

  private _handleResponse = ({ data }: AxiosResponse) => data;

  protected _handleError = (error: any) => Promise.reject(error);
}
