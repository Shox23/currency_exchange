import { getLatestResponse } from "../../../utils/types";
import { api } from "../../instance";

export interface GetLatestParams {
  base_code: string;
}

// export type GetLatestConfig = AxiosRequestConfig<GetLatestParams>;

export const getLatest = async (params: GetLatestParams) =>
  api.get<getLatestResponse>(`/latest/${params.base_code}`);
