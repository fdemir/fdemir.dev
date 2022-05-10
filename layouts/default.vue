<template>
  <div class="min-h-screen bg-body text-words">
    <ThemePicker />
    <Header />
    <div class="min-h-screen">
      <slot />
    </div>
    <Footer />
  </div>
</template>
