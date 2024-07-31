<template>
  <div class="container">
    <Transition name="slide-up" mode="out-in">
      <div
        class="flex flex-col gap-2 max-h-svh overflow-auto"
        v-if="latestData"
      >
        <ProductCard
          v-for="(item, key) in latestData.conversion_rates"
          :key="key"
          :conversion_rates="{ key: key, value: item }"
        />
      </div>
      <div v-else>Loading...</div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import ProductCard from "../components/ProductCard/ProductCard.vue";
import { getLatestData, latestData } from "../utils/currency";

onMounted(() => {
  getLatestData();
});
</script>
