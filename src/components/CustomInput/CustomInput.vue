<template>
  <div class="relative bg-none backdrop-blur-md rounded-lg overflow-hidden">
    <input
      v-model="model"
      class="w-full px-3 bg-transparent py-2 border-none outline-none placeholder:text-dark placeholder:opacity-70"
      :placeholder="placeholder"
      :type="type"
      :inputmode="inputMode ? 'numeric' : 'text'"
    />
    <ul v-if="list">
      <li></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { CustomInputProps } from "./interface";

defineProps<CustomInputProps>();
const model = defineModel();
</script>
