import { Ref, ref } from "vue";
import { getLatest } from "../api/requests/latest";
import { getLatestResponse } from "./types";

export const base_code: Ref<string> = ref<string>("USD");
export const latestData: Ref<getLatestResponse | undefined> = ref<
  getLatestResponse | undefined
>(undefined);

export const setCurrentBaseCode = (code: string) => {
  base_code.value = code;
};

export const getLatestData = () => {
  if (!latestData.value) {
    requestGetLatestData();
  } else if (latestData.value?.time_next_update_unix <= Date.now()) {
    requestGetLatestData();
  } else {
    return;
  }
};

export const requestGetLatestData = async () => {
  const data = await getLatest({ base_code: base_code.value });
  console.log(data);
  if (data.data) {
    latestData.value = data.data;
  } else if (!data.data && data.status) {
    latestData.value = data.status;
  }
};
