<script setup>
const props = defineProps({
  text: {
    type: String,
  },
});
</script>

<template>
  <h2 class="text-4xl font-serif mb-12 font-semibold">{{ props.text }}</h2>
</template>
