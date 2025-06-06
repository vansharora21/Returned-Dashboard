// ApiService.ts
import axiosInstance from "./axiosConfig";

export interface PaginationInfo {
  page: number;
  pageSize: number;
  total: number;
  [key: string]: any;
}

export interface ApiResponse<T> {
  data: T | any;
  pagination: PaginationInfo;
}

interface ApiCallOptions<P = any, D = any> {
  method?: "get" | "post" | "put" | "delete" | "patch" | "options";
  params?: P;
  data?: D;
  headers?: Record<string, string>;
}

class ApiService {
  async call<T, P = any, D = any>(
    endpoint: string,
    options: ApiCallOptions<P, D> = {}
  ): Promise<ApiResponse<T>> {
    const { method, params, data, headers } = options;

    const response = await axiosInstance.request({
      url: endpoint,
      method,
      params,
      data,
      headers: {
        ...headers, // <- dynamically override/extend headers here
      },
    });

    const responseData = response.data;

    return {
      data: responseData?.data || [],
      pagination: responseData?.pagination || {},
    };
  }
}

export default new ApiService();
