import { getCodesResponse } from "../../../types";
import { api } from "../../instance";

export const getSupportedCodes = () => api.get<getCodesResponse>("/codes");
