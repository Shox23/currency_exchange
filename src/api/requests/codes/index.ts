import { getCodesResponse } from "../../../utils/types";
import { api } from "../../instance";

export const getSupportedCodes = () =>
  api.get<getCodesResponse>('/codes');
