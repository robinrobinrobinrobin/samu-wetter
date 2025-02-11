<template>
  <div v-if="data" class="bg-black text-white">
    <iframe
      class="w-full h-[calc(100vh-120px)] sm:h-[calc(100vh-120px)]"
      :src="`https://player.vimeo.com/video/${data.url}`"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
    ></iframe>
    <div class="text-2xl px-4 sm:px-6 py-6">
      <div class="flex justify-between mb-4">
        <p class="uppercase">{{ data.title }}</p>
        <p class="float-right">{{ new Date(data.date).getFullYear() }}</p>
      </div>
      <div class="flex gap-x-6 gap-y-2 w-full mb-8 flex-wrap">
        <div v-for="credit in data.credits" class="w-[16.66%] min-w-[200px] max-w-[400px] grow">
          <p>{{ credit.title }}</p>
          <p class="text-white/50">{{ credit.name }}</p>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1">
        <img
          v-for="(frame, index) in data.frames"
          :src="frame"
          :alt="`${data.title} – Frame ${index + 1}`"
          class="object-cover h-full w-full"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { path } = useRoute();
const { data } = await useAsyncData(path, () => queryContent(path).findOne());
</script>
