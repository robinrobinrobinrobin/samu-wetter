<template>
  <header
    class="px-6 pt-6 pb-4 sticky top-0 backdrop-blur-lg flex justify-between items-center text-4xl font-bold z-50"
    :class="
      route.path === '/' || route.path.includes('projects')
        ? 'bg-black text-white'
        : 'bg-white text-black'
    "
  >
    <NuxtLink to="/" class="uppercase">Samu Wetter</NuxtLink>
    <nav class="flex gap-6">
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
