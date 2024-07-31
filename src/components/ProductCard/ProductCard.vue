<template>
  <div class="rounded-2xl bg-glass backdrop-blur-xl p-4">
    <div class="text-lg font-medium flex items-center justify-between">
      <div>{{ conversion_rates.key }}</div>
      <div clsss="text-base opacity-90">{{ conversion_rates.value }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ProductCardProps } from "./interfaces";

defineProps<ProductCardProps>();
</script>
