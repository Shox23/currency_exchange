import { getLatestResponse } from "../../../types";
import { api } from "../../instance";

export interface GetLatestParams {
  base_code: string;
}

// export type GetLatestConfig = AxiosRequestConfig<GetLatestParams>;

export const getLatest = (params: GetLatestParams) =>
  api.get<getLatestResponse>(`/latest/${params.base_code}`);
