<script setup>
import { Github } from "mdue";
</script>

<template>
  <div class="container">
    <div class="py-6 flex justify-between items-center">
      <div>
        <div class="inline-flex gap-3 pr-6 flex-col">
          <span class="font-semibold">2022</span>
          <a href="" class="underline">Furkan Demir</a>
        </div>
        <div class="inline-flex gap-3 pr-6 flex-col">
          <span class="font-semibold">Social</span>
          <div>
            <a href="" class="underline">Twitter</a>
            <span class="px-1">/</span>
            <a href="" class="underline">Github</a>
          </div>
        </div>
      </div>
      <div>
        <a
          href="https://github.com/fdemir"
          target="_blank"
          class="hover:text-primary transition-all duration-300"
        >
          <Github class="text-4xl" />
        </a>
      </div>
    </div>
  </div>
</template>
