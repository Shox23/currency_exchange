<template>
  <div
    class="relative bg-none backdrop-blur-md rounded-lg overflow-hidden"
    ref="dropdownRef"
  >
    <input
      @focus="isOpen = true"
      @input="filterItems"
      @blur="isOpen = false"
      v-model="model"
      class="w-full px-3 bg-transparent py-2 border-none outline-none placeholder:text-dark placeholder:opacity-70"
      :placeholder="placeholder"
      :type="type"
      :inputmode="inputMode ? 'numeric' : 'text'"
    />
    <Transition
      name="expand"
      @enter="enter"
      @leave="leave"
      @after-enter="afterEnter"
    >
      <ul
        class="bg-glass top-10 left-0 max-h-36 h-fit overflow-auto w-full"
        v-if="list && isOpen"
      >
        <li
          @click="setModelValue(item[0])"
          class="py-2 px-3 cursor-pointer flex items-center justify-between text-sm sm:text-base hover:backdrop-blur-2xl"
          v-for="item in filteredList"
        >
          <span>
            {{ item[0] }}
          </span>
          <span class="text-[10px] sm:text-sm">{{ item[1] }}</span>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { afterEnter, enter, leave } from "../../utils/animations";
import { supportedCodes } from "../../utils/currency";
import { CustomInputProps } from "./interface";
import useDetectOutsideClick from "../../utils/useDetectOutside";

const dropdownRef = ref<HTMLDivElement | null>(null);
const isOpen = ref<boolean>(false);
const props = defineProps<CustomInputProps>();
const model = defineModel<props.modelType>();
const filteredList = ref<Array<string[]>>(supportedCodes.value);

const filterItems = () => {
  if (supportedCodes.value) {
    filteredList.value = supportedCodes.value.filter((item) =>
      item[0].toLowerCase().includes(model.value.toLowerCase())
    );
  }
};

const setModelValue = (value: string) => {
  console.log(value);
  model.value = value;
  isOpen.value = false;
};

useDetectOutsideClick(dropdownRef, () => {
  isOpen.value = false;
});
</script>
