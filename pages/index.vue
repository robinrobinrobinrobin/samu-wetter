<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 bg-black pb-2">
    <NuxtLink v-for="project in projects" class="relative group" :to="project._path">
      <video
        :src="project.preview"
        autoplay
        loop
        muted
        class="group-hover:opacity-50 transition-opacity duration-300"
        @mouseover="handleMouseOver"
        @mouseleave="handleMouseLeave"
      ></video>
      <p
        class="absolute top-0 left-0 right-0 bottom-0 text-white text-right flex items-end justify-start py-4 px-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none text-2xl"
      >
        {{ project.title }}
      </p>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const { data: projects } = await useAsyncData("projects", () => queryContent("/projects").find());

function handleMouseOver(event: MouseEvent) {
  const videoElement = event.currentTarget as HTMLVideoElement;
  videoElement.pause();
}

function handleMouseLeave(event: MouseEvent) {
  const videoElement = event.currentTarget as HTMLVideoElement;
  videoElement.play();
}
</script>
<style></style>
