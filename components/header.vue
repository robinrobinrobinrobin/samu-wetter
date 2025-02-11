<template>
  <header
    class="px-4 sm:px-6 pt-6 pb-4 sticky top-0 backdrop-blur-lg flex justify-between items-center text-lg sm:text-xl lg:text-4xl font-bold z-50"
    :class="
      route.path === '/' || route.path.includes('projects')
        ? 'bg-black/80 text-white'
        : 'bg-white/80 text-black'
    "
  >
    <NuxtLink to="/" class="uppercase hidden sm:block">Samu Wetter</NuxtLink>
    <nav class="flex gap-4 sm:gap-6 ms-auto">
      <NuxtLink
        to="/"
        class="uppercase"
        :class="{ 'text-yellow': route.path === '/' || route.path.includes('projects') }"
        >Projekte</NuxtLink
      >
      <NuxtLink
        to="/prozess"
        class="uppercase"
        :class="{ 'text-yellow': route.path === '/prozess' }"
        >Prozess</NuxtLink
      >
      <NuxtLink
        to="/ueber-mich"
        class="uppercase"
        :class="{ 'text-yellow': route.path === '/ueber-mich' }"
        >Über Mich</NuxtLink
      >
    </nav>
  </header>
</template>

<script lang="ts" setup>
const route = useRoute();
</script>

<style></style>
