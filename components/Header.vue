<script setup lang="ts">
const navbarVisible = useNavbarVisiblity();

// FIXME: i think it's wrong
const items = computed(() => [
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

const router = useRouter();
router.afterEach(() => (navbarVisible.value = false));
</script>

<template>
  <div class="container">
    <div class="py-12 flex justify-between align-middle">
      <NuxtLink to="/" class="font-semibold text-2xl hover:text-primary md:transition-all grid place-items-center">Furkan Demir</NuxtLink>
      <div class="z-40 flex items-center">
        <div
          class="md:flex hidden self-center transition-all duration-500 fixed top-1/2 left-0 -translate-y-1/2 md:relative"
          :class="{
            '!flex !flex-col ': navbarVisible,
          }"
        >
          <NavLink :text="item.text" :to="item.to" v-for="item in items" />
        </div>

        <span class="pr-3 md:pl-5">
          <ThemeToggle />
        </span>

        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          class="flex justify-center items-center w-12 h-12 rounded-full md:hidden z-20"
          aria-controls="mobile-menu"
          aria-expanded="false"
          @click="navbarVisible = !navbarVisible"
        >
          <span class="sr-only">open main menu</span>
          <div class="flex flex-col w-6 h-auto gap-1">
            <div class="h-[2px] bg-words rounded-sm" v-for="x in 3" :class="{ '!bg-[#fff]': navbarVisible }"></div>
          </div>
        </button>
      </div>
    </div>
    <div class="md:hidden fixed bottom-0 left-0 h-screen w-screen z-10 bg-[#000] -translate-y-full transition-all duration-500 opacity-0" :class="{ '!translate-y-0 !opacity-100': navbarVisible }" />
  </div>
</template>
