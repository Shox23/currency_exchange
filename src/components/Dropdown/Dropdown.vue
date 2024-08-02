<template>
  <div
    class="rounded-2xl duration-300 w-full overflow-hidden bg-glass backdrop-blur-xl"
    @click="isOpen = !isOpen"
    ref="dropdownRef"
  >
    <div class="p-4 cursor-pointer flex items-center justify-between">
      <span>
        {{ base_code }}
      </span>

      <div
        class="h-3 w-3 duration-300 ease border-b-2 border-l-2 border-glass"
        :class="isOpen ? ' rotate-[135deg]' : ' -rotate-45'"
      ></div>
    </div>
    <Transition
      name="expand"
      @enter="enter"
      @leave="leave"
      @after-enter="afterEnter"
    >
      <ul class="w-full max-h-40 overflow-auto hide-scroll" v-if="isOpen">
        <li
          class="flex items-center justify-between p-4 cursor-pointer hover:backdrop-blur-2xl"
          v-for="item in supportedCodes"
          :key="item[1]"
          @click.stop="setCurrentCode(item[0])"
        >
          <span>
            {{ item[0] }}
          </span>
          <span class="text-sm sm:text-base">{{ item[1] }}</span>
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
import useDetectOutsideClick from "../../utils/useDetectOutside";

const dropdownRef = ref<HTMLDivElement | null>(null);
const isOpen: Ref<boolean> = ref<boolean>(false);
const list: Ref<string[]> = ref<string[]>([]);

const setCurrentCode = (code: string) => {
  setCurrentBaseCode(code);
  isOpen.value = false;
};

useDetectOutsideClick(dropdownRef, () => {
  isOpen.value = false;
});

onMounted(() => {
  if (supportedCodes.value) {
    supportedCodes.value.forEach((item) => {
      list.value.push(item[0]);
    });
  }
});
</script>
