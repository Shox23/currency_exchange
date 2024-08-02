<template>
  <div class="container">
    <div class="mb-4">
      <h2 class="text-2xl font-bold">Current currency:</h2>
      <Dropdown />
    </div>
    <div
      class="flex flex-col gap-2 max-h-svh overflow-auto"
      v-if="latestData && !latestDataLoading"
    >
      <ProductCard
        v-for="(item, key) in latestData.conversion_rates"
        :key="key"
        :conversion_rates="{ key: key, value: item }"
      />
    </div>
    <div class="flex flex-col gap-2" v-else>
      <ProductCardSkeleton v-for="item in 10" :key="item" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, watch } from "vue";
import ProductCard from "../components/ProductCard/ProductCard.vue";
import {
  base_code,
  getLatestData,
  latestData,
  latestDataLoading,
  requestSupportedCodes,
} from "../utils/currency";
import ProductCardSkeleton from "../components/ProductCard/ProductCardSkeleton.vue";
import Dropdown from "../components/Dropdown/Dropdown.vue";

watch(
  () => base_code.value,
  () => {
    getLatestData();
  }
);

onMounted(() => {
  requestSupportedCodes();
  getLatestData();
});
</script>
