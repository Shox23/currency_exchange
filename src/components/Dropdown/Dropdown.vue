<template>
  <div
    class="rounded-2xl overflow-hidden duration-300 w-fit bg-glass backdrop-blur-xl"
    @click="isOpen = !isOpen"
  >
    <div class="px-3 py-2">{{ currentValue }}</div>
    <Transition
      name="expand"
      @enter="enter"
      @leave="leave"
      @after-enter="afterEnter"
    >
      <ul class="w-full max-h-40 overflow-auto" v-if="isOpen">
        <li
          class="flex items-center justify-center py-2"
          v-for="item in 10"
          :key="item"
        >
          {{ currentValue }}
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref } from "vue";

const isOpen: Ref<boolean> = ref<boolean>(false);
const currentValue: Ref<string> = ref<string>("USD");

const enter = (element: Element) => {
  const el = element as HTMLElement;
  el.style.height = "auto";
  const height = getComputedStyle(el).height;
  el.style.height = "0";
  getComputedStyle(el);
  setTimeout(() => {
    el.style.height = height;
  });
};

const afterEnter = (element: Element) => {
  const el = element as HTMLElement;
  el.style.height = "auto";
};

const leave = (element: Element) => {
  const el = element as HTMLElement;
  el.style.height = getComputedStyle(el).height;
  getComputedStyle(el);
  setTimeout(() => {
    el.style.height = "0";
  });
};
</script>
