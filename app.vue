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
  description:
    "Samu Wetter ist ein Filmemacher aus Zürich. Er realisiert Projekte in den Bereichen Werbung, Brand-Film und Event gerne ganzheitlich: vom Filmen über den Schnitt und bis hin zum Colorgrading.",
  ogDescription: "Samu Wetter ist ein weltbekannter Filmemacher und Fotograf.",
  ogImage: "/og-image.png",
});
</script>
