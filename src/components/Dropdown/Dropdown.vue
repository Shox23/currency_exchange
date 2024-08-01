<template>
  <div
    class="rounded-2xl overflow-hidden duration-300 w-fit bg-glass backdrop-blur-xl"
    @click="isOpen = !isOpen"
  >
    <div class="px-3 py-2 cursor-pointer">{{ base_code }}</div>
    <Transition
      name="expand"
      @enter="enter"
      @leave="leave"
      @after-enter="afterEnter"
    >
      <ul class="w-full max-h-40 overflow-auto" v-if="isOpen">
        <li
          class="flex items-center justify-center py-2 cursor-pointer"
          v-for="item in list"
          :key="item"
          @click.stop="setCurrentCode(item)"
        >
          {{ item }}
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, Ref, ref } from "vue";
import {
  base_code,
  setCurrentBaseCode,
  supportedCodes,
} from "../../utils/currency";
import { afterEnter, enter, leave } from "../../utils/animations";

const isOpen: Ref<boolean> = ref<boolean>(false);
const list: Ref<string[]> = ref<string[]>([]);

const setCurrentCode = (code: string) => {
  setCurrentBaseCode(code);
  isOpen.value = false;
};

onMounted(() => {
  if (supportedCodes.value) {
    supportedCodes.value.forEach((item) => {
      list.value.push(item[0]);
    });
  }
});
</script>
