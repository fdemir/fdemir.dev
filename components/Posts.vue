<template>
  <SectionTitle text="Lastest Posts" />
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
    <PostItem v-for="x in 4" />
  </div>
</template>
