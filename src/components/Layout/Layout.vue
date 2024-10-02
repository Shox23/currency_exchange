<template>
  <div class="w-full h-full relative">
    <Header />
    <div>
      <slot />
    </div>
    <MobileNavigation />
  </div>
</template>

<script setup lang="ts">
import Header from "../Navigation/Header.vue";
import MobileNavigation from "../Navigation/MobileNavigation.vue";
</script>
