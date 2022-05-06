<script setup lang="ts">
// FIXME: i think it's wrong
const items = reactive([
  {
    text: "Home",
    to: "/",
  },
  {
    text: "Writing",
    to: "/writings",
  },
  {
    text: "Projects",
    to: "/projects",
  },
  {
    text: "About",
    to: "/about",
  },
]);
const isOpen = ref<boolean>(false);

const router = useRouter();
router.afterEach(() => {
  isOpen.value = false;
});
</script>

<template>
  <div class="container">
    <div class="py-12 flex justify-between align-middle">
      <NuxtLink
        to="/"
        class="font-semibold text-xl hover:text-primary md:transition-all grid place-items-center"
        >Furkan Demir</NuxtLink
      >
      <div class="z-40">
        <div
          class="md:flex hidden self-center transition-all duration-500 fixed top-1/2 left-0 -translate-y-1/2 md:relative"
          :class="{
            '!flex !flex-col ': isOpen,
          }"
        >
          <NavLink :text="item.text" :to="item.to" v-for="item in items" />
        </div>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          class="flex justify-center items-center w-12 h-12 rounded-full md:hidden z-20"
          aria-controls="mobile-menu"
          aria-expanded="false"
          @click="isOpen = !isOpen"
        >
          <span class="sr-only">open main menu</span>
          <div class="flex flex-col w-6 h-auto gap-1">
            <div
              class="h-[2px] bg-words rounded-sm"
              :class="{ '!bg-[#fff]': isOpen }"
            ></div>
            <div
              class="h-[2px] bg-words rounded-sm"
              :class="{ '!bg-[#fff]': isOpen }"
            ></div>
            <div
              class="h-[2px] bg-words rounded-sm"
              :class="{ '!bg-[#fff]': isOpen }"
            ></div>
          </div>
        </button>
      </div>
    </div>
    <div
      class="md:hidden fixed bottom-0 left-0 h-screen w-screen z-10 bg-[#000] -translate-y-full transition-all duration-500 opacity-0"
      :class="{ '!translate-y-0 !opacity-100': isOpen }"
    />
  </div>
</template>
