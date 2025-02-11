<template>
  <footer class="px-4 sm:px-6 pt-12 pb-8 bg-cream text-black mt-auto text-lg lg:text-2xl">
    <div class="text-center mb-16 md:mb-0">
      <p>Hast du eine Frage an mich?</p>
      <p>Bist du interessiert an meiner Arbeit?</p>
      <a
        href="mailto:hello@samuwetter.com"
        class="bg-black text-white px-12 pt-2 pb-1 inline-block uppercase rounded-lg font-bold mt-4 hover:scale-95 transition-all duration-300"
        >Kontakt</a
      >
    </div>
    <div class="flex justify-between">
      <div>
        <p>Samu Wetter</p>
        <p>Nägelihof 2 - 8001 Zurich</p>
        <p>
          <a href="mailto:hello@samuwetter.com" class="hover:text-black/50 transition-colors"
            >hello@samuwetter.com</a
          >
        </p>
        <p>
          <a href="tel:+41783130946" class="hover:text-black/50 transition-colors"
            >+41 (0)78 313 09 46</a
          >
        </p>
      </div>
      <div class="text-right">
        <p>
          <a
            href="https://www.instagram.com/samuwetter"
            target="_blank"
            class="hover:text-black/50 transition-colors"
            >Instagram</a
          >
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/samu-wetter-9b2b26a3"
            target="_blank"
            class="hover:text-black/50 transition-colors"
            >LinkedIn</a
          >
        </p>
        <p>
          <NuxtLink to="/datenschutz" class="hover:text-black/50 transition-colors"
            >Datenschutz</NuxtLink
          >
        </p>
        <p>
          <NuxtLink to="/impressum" class="hover:text-black/50 transition-colors"
            >Impressum</NuxtLink
          >
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style></style>
