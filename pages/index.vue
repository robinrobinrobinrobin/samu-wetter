<template>
  <div class="grid grid-cols-3 gap-2 bg-black pb-2">
    <NuxtLink v-for="project in projects" class="relative group" :to="project._path">
      <video
        src="/videos/placeholder.mp4"
        autoplay
        loop
        muted
        class="hover:opacity-50 transition-opacity duration-300"
        @mouseover="handleMouseOver"
        @mouseleave="handleMouseLeave"
      ></video>
      <p
        class="absolute top-0 left-0 right-0 bottom-0 text-white text-center flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none text-3xl"
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
