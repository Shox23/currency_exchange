<template>
  <header class="w-full">
    <div class="flex items-center justify-between p-3" v-if="isMobile">
      <div class="p-1 rounded-full backdrop-blur-xl bg-glass">
        <RouterLink to="/">
          <img
            :class="
              currentTheme === 'light' ? 'stroke-[#0a0a0a]' : 'stroke-white'
            "
            src="/icons/logo.svg"
            alt="logo"
          />
        </RouterLink>
      </div>
      <div class="flex items-center gap-2">
        <div><ModeSwitcher /></div>
      </div>
    </div>
    <div v-else></div>
  </header>
</template>

<script lang="ts" setup>
import ModeSwitcher from "../ModeSwitcher/Switcher.vue";
import { RouterLink } from "vue-router";
import { useScreen } from "../../utils/screen";
import { currentTheme } from "../../utils/theme";

const { isMobile } = useScreen();
</script>
