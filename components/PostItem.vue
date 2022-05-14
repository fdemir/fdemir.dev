<script setup lang="ts">
import type { PostItem } from "~~/types";

const props = defineProps<{
  data: PostItem;
}>();
</script>

<template>
  <a
    :href="props.data.link"
    target="_blank"
    class="group cursor-pointer border-wordsoff/50 border-2 hover:border-primary flex flex-col justify-between rounded-xl transition-all duration-500 ease-in-out"
  >
    <div class="p-6">
      <h3 class="font-semibold md:text-2xl text-xl py-4">{{ props.data.title }}</h3>
    </div>
    <div class="py-3 px-6 border-wordsoff/50 border-t-2 group-hover:border-primary w-full flex justify-between items-center transition-all duration-500 ease-in-out">
      <span class="text-wordsoff">{{ props.data.pubDate }}</span>
    </div>
  </a>
</template>
