<template>
  <NuxtLink
    :to="to"
    class="px-5 inline-flex flex-col gap-1 group last:pr-0 text-[#fff] text-4xl py-4 font-semibold md:font-normal md:text-base md:text-words"
  >
    <span>
      {{ text }}
    </span>
    <div
      class="group-hover:w-full bg-primary h-1 w-0 transition-all duration-500"
    ></div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  text: {
    type: String,
  },
  to: {
    type: String,
  },
});
</script>
