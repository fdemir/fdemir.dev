<script setup lang="ts">
const { pending, data: posts } = useLatestPosts();
</script>

<template>
  <SectionTitle text="Lastest Posts" />
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
    <PostItem v-for="post in posts" v-if="!pending" :data="post" />
    <span v-if="pending"> Loading...</span>
  </div>
</template>
