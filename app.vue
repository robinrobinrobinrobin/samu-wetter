<template>
  <NuxtLayout>
    <div class="flex flex-col min-h-screen">
      <Header />
      <NuxtPage />
      <Footer />
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
useSeoMeta({
  title: "Samu Wetter",
  ogTitle: "Samu Wetter",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
});
</script>
