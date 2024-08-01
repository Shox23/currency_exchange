import { Ref, ref } from "vue";
import { getLatest } from "../api/requests/latest";
import { getLatestResponse } from "./types";

export const base_code: Ref<string> = ref<string>(
  localStorage.base_code ? localStorage.base_code : "USD"
);
export const latestDataLoading: Ref<boolean> = ref<boolean>(false);
export const latestData: Ref<getLatestResponse | undefined> = ref<
  getLatestResponse | undefined
>(localStorage.latest_data ? JSON.parse(localStorage.latest_data) : undefined);

export const setCurrentBaseCode = (code: string) => {
  if (code !== base_code.value) {
    localStorage.base_code = code;
    base_code.value = code;
    requestGetLatestData();
  }
};

export const getLatestData = () => {
  if (!latestData.value) {
    requestGetLatestData();
  } else if (latestData.value?.time_next_update_unix * 1000 <= Date.now()) {
    requestGetLatestData();
  } else {
    return;
  }
};

export const requestGetLatestData = async () => {
  latestDataLoading.value = true;
  const data = await getLatest({ base_code: base_code.value });
  console.log("REQUEST SENT");
  if (data.data) {
    latestData.value = data.data;
    localStorage.latest_data = JSON.stringify(data.data);
  } else if (!data.data && data.status) {
    latestData.value = data.status;
  }
  latestDataLoading.value = false;
};
