<template>
  <div class="container">
    <h2 class="text-2xl font-bold">Currency converter</h2>
    <div class="bg-glass backdrop-blur p-3 rounded-xl flex flex-col gap-4">
      <form class="flex flex-col gap-2 mt-3" @submit.prevent="sendRequest">
        <CustomInput
          v-model="currencyFromConverte"
          type="text"
          :list="true"
          placeholder="From"
        />
        <CustomInput
          v-model="currencyToConverte"
          type="text"
          :list="true"
          placeholder="To"
        />
        <CustomInput
          v-model="currencyAmount"
          type="number"
          placeholder="Amount"
        />
        <button
          class="rounded-xl backdrop-blur-lg border-none px-3 py-2 cursor-pointer focus:outline-dark"
        >
          Convert
        </button>
      </form>

      <Transition
        name="expand"
        @enter="enter"
        @leave="leave"
        @after-enter="afterEnter"
      >
        <div
          class="mx-auto w-[80%] flex items-center gap-5 justify-center text-lg"
          v-if="responseData !== null"
        >
          <div>{{ responseData.conversion_result }}</div>
          <div>{{ responseData.target_code }}</div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import CustomInput from "../components/CustomInput/CustomInput.vue";
import { afterEnter, enter, leave } from "../utils/animations";
import { GetPairParams } from "../api/requests/pair";
import { requestConvertData } from "../utils/currency";
import { getPairResponse } from "../utils/types";

const currencyFromConverte = ref<string>("");
const currencyToConverte = ref<string>("");
const currencyAmount = ref<number>();
const responseData = ref<getPairResponse | null>(null);

const sendRequest = async () => {
  if (
    currencyAmount.value &&
    currencyFromConverte.value &&
    currencyToConverte.value
  ) {
    const data: GetPairParams = {
      amount: currencyAmount.value,
      base_code: currencyFromConverte.value,
      target_code: currencyToConverte.value,
    };
    responseData.value = await requestConvertData(data);
  }
};
</script>
