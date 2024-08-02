<template>
  <div
    class="fixed left-1/2 -translate-x-1/2 bottom-10 duration-300 ease-in-out"
  >
    <div
      ref="indicatorParent"
      class="flex relative overflow-hidden items-center w-max duration-300 ease-in-out gap-2 bg-glass backdrop-blur-md p-2 rounded-[40px]"
    >
      <div
        v-for="(item, idx) in menuItems"
        :key="item.text"
        class="rounded-full p-3 duration-300 ease-in-out nav-element"
        @click="setIndicatorPosition(idx)"
      >
        <RouterLink
          class="flex items-center gap-3 duration-300 ease-in-out nav-link"
          :to="item.link"
        >
          <img
            class="w-6 h-6"
            :class="
              currentTheme === 'light' ? ' text-white' : ' text-[#0a0a0a]'
            "
            :src="`/icons/${item.icon}.svg`"
            alt="icon"
          />
          <span class="font-medium">{{ item.text }}</span>
        </RouterLink>
      </div>
      <div
        ref="indicator"
        class="duration-300 ease-out opacity-85 absolute h-12 w-10 rounded-full p-3 z-[-1] backdrop-blur-xl"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import { currentTheme } from "../../utils/theme";
import { useRoute } from "vue-router";

const activeItem = ref<number>(0);
const indicator = ref<HTMLDivElement | null>(null);
const indicatorParent = ref<HTMLDivElement | null>(null);
const route = useRoute();
const menuItems = [
  {
    link: "/",
    text: "Home",
    icon: "home",
  },
  {
    link: "/conversions",
    text: "Conversions",
    icon: "change",
  },
];

const setIndicatorPosition = (newVal: number) => {
  if (indicator.value) {
    let parent = indicatorParent.value;
    if (parent) {
      let parentElements = parent.querySelectorAll(".nav-element");
      let currentElement = parentElements[newVal];
      let left: string =
        currentElement.getBoundingClientRect().left -
        parent.getBoundingClientRect().left +
        "px";
      indicator.value.style.width =
        currentElement.getBoundingClientRect().width.toString() + "px";
      indicator.value.style.left = left;
    }
  }
};

watch(
  () => route.fullPath,
  () => {
    if (route.fullPath !== "/") {
      activeItem.value = 1;
    }
    setIndicatorPosition(activeItem.value);
  }
);

onMounted(() => {
  setIndicatorPosition(activeItem.value);
});
</script>
