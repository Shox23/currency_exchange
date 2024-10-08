import { onBeforeUnmount, onMounted, Ref } from "vue";

export default function useDetectOutsideClick(
  component: Ref<HTMLDivElement>,
  callback: () => {}
) {
  if (!component) return;
  const listener = (event: Event) => {
    if (
      event.target !== component.value &&
      event.composedPath().includes(component.value)
    ) {
      return;
    }
    if (typeof callback === "function") {
      callback();
    }
  };
  onMounted(() => {
    window.addEventListener("click", listener);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("click", listener);
  });

  return { listener };
}
