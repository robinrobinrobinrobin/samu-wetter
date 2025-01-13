<template>
  <div v-if="data" class="bg-black text-white">
    <iframe
      class="w-full h-[calc(100vh-80px)]"
      :src="`https://player.vimeo.com/video/${data.url}`"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
    ></iframe>
    <div class="text-2xl p-6">
      <div class="flex justify-between">
        <p class="font-bold">{{ data.title }}</p>
        <p class="font-bold float-right">{{ new Date(data.date).getFullYear() }}</p>
      </div>
      <div class="flex gap-x-6 gap-y-2 w-full mb-8 flex-wrap">
        <div v-for="credit in data.credits" class="min-w-[16.66%]">
          <p>{{ credit.title }}</p>
          <p>{{ credit.name }}</p>
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-1">
        <img
          v-for="(frame, index) in data.frames"
          :src="frame"
          :alt="`Frame ${index + 1}`"
          class="object-cover h-full"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { path } = useRoute();
const { data } = await useAsyncData(path, () => queryContent(path).findOne());
</script>
