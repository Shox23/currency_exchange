import { getPairResponse } from "../../../types";
import { api } from "../../instance";

export interface GetPairParams {
  amount: number;
  base_code: string;
  target_code: string;
}

export type GetPairConfig = AxiosRequestConfig<GetPairParams>;

export const getPairCurrency = ({ params }: GetPairConfig) =>
  api.get<getPairResponse>(
    `/pair/${params.base_code}/${params.target_code}/${params.amount}`
  );
