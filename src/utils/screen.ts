import { ref, computed, watch } from 'vue';

const screenWidth = ref(window.innerWidth);

const isMobile = computed(() => {
  return screenWidth.value <= 760;
});
const isComputer = computed(() => {
  return screenWidth.value > 1048;
});
watch(screenWidth, () => {
  screenWidth.value = window.innerWidth;
});

window.addEventListener('resize', () => {
  screenWidth.value = window.innerWidth;
});

export function useScreen() {
  return {
    isMobile,
    isComputer,
  };
}
