<script setup>
import Star from "~icons/mdi/star";
</script>

<template>
  <a class="group cursor-pointer border-wordsoff/50 border-2 flex flex-col justify-between rounded-xl p-6 hover:border-primary transiiton-all duration-500 ease-in-out">
    <div class="flex justify-between mb-6">
      <span class="text-2xl font-semibold">flex-logger</span>
      <div class="flex items-center">
        <span class="italic mr-2">32</span>
        <Star class="text-2xl text-primary" />
      </div>
    </div>
    <p class="lg:h-10 lg:overflow-hidden lg:text-ellipsis block lg:whitespace-nowrap">
      Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
      consectetur.
    </p>
  </a>
</template>
