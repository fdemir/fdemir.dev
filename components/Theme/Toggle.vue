<script setup>
import Palette from "~icons/mdi/palette";

const themePickerVisible = useThemePickerVisibility();
const navbarVisible = useNavbarVisiblity();
const router = useRouter();

watch(themePickerVisible, () => (navbarVisible.value = false));
router.afterEach(() => (themePickerVisible.value = false));
</script>

<template>
  <button class="bg-words/10 rounded-full h-12 w-12 inline-flex items-center justify-center text-2xl" :class="{ 'text-[#fff]': navbarVisible }" @click="themePickerVisible = !themePickerVisible">
    <span class="sr-only">open theme picker</span>
    <Palette />
  </button>
</template>
