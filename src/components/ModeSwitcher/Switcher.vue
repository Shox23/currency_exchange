<template>
  <button
    @click="switchValue"
    class="rounded-[40px] w-16 flex p-1 items-center cursor-pointer border-none outline-none relative bg-glass backdrop-blur-xl"
  >
    <input type="checkbox" class="hidden" />
    <span
      class="rounded-full overflow-hidden h-8 w-8 flex items-center justify-center duration-300 ease-in"
      :class="
        currentValue ? ' translate-x-0 bg-[#0a0a0a]' : 'translate-x-6 bg-white'
      "
    >
      <Transition name="slide-up" mode="out-in">
        <img
          loading="eager"
          class="w-6 h-6"
          src="/icons/sun.svg"
          alt="icon"
          v-if="!currentValue"
        />
        <img class="w-6 h-6" src="/icons/moon.svg" alt="icon" v-else />
      </Transition>
    </span>
  </button>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
import { SwitchEmits } from "./interfaces";
import { changeTheme } from "../../utils/theme";

const emits = defineEmits<SwitchEmits>();
const currentValue: Ref<boolean> = ref<boolean>(
  matchMedia("(prefers-color-scheme: dark)").matches
);

const switchValue = () => {
  currentValue.value = !currentValue.value;
  if (currentValue.value) {
    changeTheme("dark");
  } else {
    changeTheme("light");
  }
  // currentValue.value = !currentValue.value;
  // emits("onChange", currentValue.value);
};
</script>
