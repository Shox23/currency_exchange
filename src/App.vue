<template>
  <div class="app">
    <Layout>
      <RouterView />
    </Layout>
  </div>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref } from "vue";
import Layout from "./components/Layout/Layout.vue";
import { changeTheme } from "./utils/theme";

const sysMode: Ref<boolean> = ref<boolean>(
  matchMedia("(prefers-color-scheme: dark)").matches
);

onMounted(() => {
  if (!localStorage.theme) {
    if (sysMode.value) changeTheme("dark");
    else changeTheme("light");
  } else {
    changeTheme(localStorage.theme);
  }

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      if (!localStorage.theme || localStorage.theme == "system") {
        const newColorScheme = event.matches ? "dark" : "light";
        changeTheme("system");
        document.documentElement.setAttribute("data-theme", newColorScheme);
      }
    });
});
</script>
