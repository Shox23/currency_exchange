<template>
  <div
    class="rounded-2xl bg-glass backdrop-blur-xl p-4 flex items-start justify-between"
  >
    <div class="text-lg font-medium">
      <span>Europe</span>
      <span class="opacity-75 font-normal">/EUR</span>
    </div>
    <div>1.23412</div>
  </div>
</template>

<script lang="ts" setup>
import { ProductCardProps } from './interfaces';

defineProps<ProductCardProps>()
</script>
