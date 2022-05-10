<template>
  <div
    class="w-48 border-words/30 border bg-[#fff] rounded-lg p-4 flex flex-col justify-between flex-shrink-0 my-6 mx-3"
  >
    <span class="font-semibold">Default</span>
    <div class="flex flex-wrap">
      <div class="rounded-full border-[#fff] border-2 bg-primary h-6 w-6 -ml-2 first:ml-0" v-for="x in 6"></div>
    </div>
  </div>
</template>
