<script setup lang="ts">
import type { PostItem } from "~~/types";

const props = defineProps<{
  data: PostItem;
}>();
</script>

<template>
  <a :href="props.data.link" target="_blank" class="group cursor-pointer border-wordsoff/50 border-2 flex flex-col justify-between rounded-xl">
    <div class="p-6">
      <h3 class="font-semibold md:text-2xl text-xl py-4">{{ props.data.title }}</h3>
    </div>
    <div class="py-3 px-6 border-wordsoff/50 border-t-2 w-full flex justify-between items-center">
      <span class="text-wordsoff">{{ props.data.pubDate }}</span>
    </div>
  </a>
</template>
