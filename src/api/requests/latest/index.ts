import { getLatestResponse } from "../../../utils/types";
import { api } from "../../instance";

export interface GetLatestParams {
  id: string;
}

export type GetLatestConfig = AxiosRequestConfig<GetLatestParams>;

export const getLatest = async ({params, config}: GetLatestConfig) =>
  api.get<getLatestResponse>(`/latest/${params.id}`, config);