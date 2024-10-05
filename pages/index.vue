<template>
  <section
    class="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-fade-start to-fade-end"
  >
    <div class="container px-4 md:px-6">
      <div class="flex flex-col items-center space-y-4 text-center">
        <div class="space-y-2">
          <h1
            class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white"
          >
            Download Your Favorite Music Anywhere
          </h1>
          <p class="mx-auto max-w-[700px] text-gray-200 md:text-xl">
            Get your music from multiple platforms with our all-in-one song
            downloader. YouTube, SoundCloud, and Spotify - we've got you
            covered!
          </p>
        </div>
        <div class="w-full max-w-md space-y-2">
          <div class="grid grid-cols-1 gap-2 sm:grid-cols-3">
            <div
              class="flex justify-between items-center space-x-2 rounded-lg bg-white/10 px-3 py-2 text-white"
            >
              <Youtube class="h-5 w-5" />
              <span>YouTube</span>
            </div>
            <div
              class="flex justify-between items-center space-x-2 rounded-lg bg-white/10 px-3 py-2 text-white"
            >
              <SoundCloud class="h-5 w-5" />
              <span>SoundCloud</span>
            </div>
            <div
              class="flex justify-between items-center space-x-2 rounded-lg bg-white/10 px-3 py-2 text-white"
            >
              <Spotify class="h-5 w-5" />
              <span>Spotify</span>
            </div>
          </div>
        </div>
        <div class="space-x-4">
          <NuxtLink to="/download">
            <Button class="bg-white text-purple-600 hover:bg-gray-100"
              >Get your Music now</Button
            >
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Youtube } from "lucide-vue-next";
import SoundCloud from "~/components/icons/SoundCloud.vue";
import Spotify from "~/components/icons/Spotify.vue";
import { Button } from "@/components/ui/button";
</script>
