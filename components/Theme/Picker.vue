<script setup>
const visible = useThemePickerVisibility();
</script>

<template>
  <Transition>
    <div class="bg-wordsoff/5 overflow-x-scroll thumb no-scrollbar flex" v-show="visible">
      <ThemeItem v-for="x in 6" />
    </div>
  </Transition>
</template>

<style lang="scss">
.v-enter-active,
.v-leave-active {
  transition: all 300ms ease-in-out;
  max-height: 130px;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  max-height: 0px;
}
</style>
