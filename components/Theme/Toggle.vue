<script setup>
import Palette from "~icons/mdi/palette";
const themePickerVisible = useThemePickerVisibility();
</script>

<template>
  <button class="bg-words/10 rounded-full h-12 w-12 inline-flex items-center justify-center text-2xl" @click="themePickerVisible = !themePickerVisible">
    <span class="sr-only">open theme picker</span>
    <Palette />
  </button>
</template>
