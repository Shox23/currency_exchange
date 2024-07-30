import { ref } from "vue";

export const changeTheme = (newTheme: string) => {
  let theme = "dark";
  if (newTheme == "system") {
    theme = matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  } else {
    theme = newTheme;
  }
  document.documentElement.setAttribute("data-theme", theme);
  setTimeout(() => {
    document.body.setAttribute(
      "style",
      "--transition: background 200ms, color 200ms;"
    );
  }, 100);
  localStorage.theme = newTheme;
  currentTheme.value = newTheme
};

export const currentTheme = ref<string>(localStorage.theme);
