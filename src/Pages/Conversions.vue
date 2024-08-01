<template>
  <div class="container">
    <h2 class="text-2xl font-bold">Currency converter</h2>
    <div class="bg-glass backdrop-blur p-3 rounded-xl flex flex-col gap-4">
      <form class="flex flex-col gap-2 mt-3" @submit.prevent="isOpen = !isOpen">
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
          type="number"
          v-model="currencyAmount"
          placeholder="Amount"
        />
        <button
          class="rounded-xl backdrop-blur-lg border-none px-3 py-2 cursor-pointer focus:outline-dark"
        >
          Converte
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
          v-if="isOpen"
        >
          <div>{{ currencyAmount }}</div>
          <div>{{ currencyToConverte }}</div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import CustomInput from "../components/CustomInput/CustomInput.vue";
import { afterEnter, enter, leave } from "../utils/animations";

const isOpen = ref<boolean>(false);
const currencyFromConverte = ref<string>("");
const currencyToConverte = ref<string>("");
const currencyAmount = ref<number>();
</script>
