<template>
  <section
    class="w-full h-screen py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-fade-start to-fade-end"
  >
    <div class="flex flex-col items-center gap-8 md:gap-4 text-center p-2">
      <div class="space-y-4">
        <h1
          class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-white"
        >
          Download Your Favorite Music Anywhere
        </h1>
        <p class="mx-auto max-w-[700px] text-gray-200 md:text-xl">
          Get your music from multiple platforms with our all-in-one song
          downloader. YouTube, SoundCloud, and Spotify - we've got you covered!
        </p>
      </div>
      <div class="w-full max-w-lg space-y-2">
        <div class="grid grid-cols-3 gap-1 md:gap-2 sm:grid-cols-3 text-sm md:text-xl">
          <div
            class="group flex justify-between items-center rounded-lg bg-white/75 px-3 py-2 text-gray-800"
          >
            <Youtube
              class="group-hover:text-[#FF0000] h-5 w-5 md:h-6 md:w-6 duration-200"
            />
            <span>YouTube</span>
          </div>
          <div
            class="group flex justify-between items-center rounded-lg bg-white/75 px-3 py-2 text-gray-800"
          >
            <SoundCloud
              class="group-hover:text-[#ff7700] duration-20 h-5 w-5 md:h-6 md:w-6"
            />
            <span>SoundCloud</span>
          </div>
          <div
            class="group flex justify-between items-center rounded-lg bg-white/75 px-3 py-2 text-gray-800"
          >
            <Spotify
              class="group-hover:text-[#1DB954] h-5 w-5 md:h-6 md:w-6 duration-200"
            />
            <span>Spotify</span>
          </div>
        </div>
      </div>
      <div class="mt-14">
        <NuxtLink to="/download">
          <Button
            class="bg-white text-2xl font-semibold hover:bg-white hover:scale-110 transition-all group duration-300 p-7"
          >
            <span
              class="bg-gradient-to-l from-fuchsia-500 to-cyan-500 group-hover:bg-gradient-to-r text-transparent bg-clip-text"
            >
              Get your Music now
            </span>
          </Button>
        </NuxtLink>
      </div>
    </div>
  </section>
  <section class="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
    <div class="container px-4 md:px-6">
      <h2
        class="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-800 dark:text-gray-200"
      >
        Download from Your Favorite Platforms
      </h2>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <!-- YouTube Card -->
        <Card class="bg-white dark:bg-gray-900">
          <CardHeader class="flex flex-col items-center">
            <div class="rounded-full bg-red-100 p-3 dark:bg-red-900">
              <Youtube class="h-8 w-8 text-red-600 dark:text-red-400" />
            </div>
            <CardTitle
              class="mt-4 text-xl font-bold text-gray-800 dark:text-gray-200"
              >YouTube</CardTitle
            >
          </CardHeader>
          <CardContent class="text-center">
            <p class="text-gray-600 dark:text-gray-400">
              Download audio from any YouTube video
            </p>
            <ul class="mt-4 space-y-2">
              <li
                class="flex items-center justify-center text-sm text-gray-600 dark:text-gray-400"
              >
                <Download class="mr-2 h-4 w-4" />
                High-quality MP3 extraction
              </li>
              <li
                class="flex items-center justify-center text-sm text-gray-600 dark:text-gray-400"
              >
                <Share class="mr-2 h-4 w-4" />
                Support for playlists and channels
              </li>
              <li
                class="flex items-center justify-center text-sm text-gray-600 dark:text-gray-400"
              >
                <Headphones class="mr-2 h-4 w-4" />
                Background noise reduction
              </li>
            </ul>
          </CardContent>
        </Card>

        <!-- SoundCloud Card -->
        <Card class="bg-white dark:bg-gray-900">
          <CardHeader class="flex flex-col items-center">
            <div class="rounded-full bg-orange-100 p-3 dark:bg-orange-900">
              <Cloud class="h-8 w-8 text-orange-600 dark:text-orange-400" />
            </div>
            <CardTitle
              class="mt-4 text-xl font-bold text-gray-800 dark:text-gray-200"
            >
              SoundCloud
            </CardTitle>
          </CardHeader>
          <CardContent class="text-center">
            <p class="text-gray-600 dark:text-gray-400">
              Download tracks directly from SoundCloud
            </p>
            <ul class="mt-4 space-y-2">
              <li
                class="flex items-center justify-center text-sm text-gray-600 dark:text-gray-400"
              >
                <Download class="mr-2 h-4 w-4" />
                Original quality downloads
              </li>
              <li
                class="flex items-center justify-center text-sm text-gray-600 dark:text-gray-400"
              >
                <Share class="mr-2 h-4 w-4" />
                Batch download for sets and albums
              </li>
              <li
                class="flex items-center justify-center text-sm text-gray-600 dark:text-gray-400"
              >
                <Headphones class="mr-2 h-4 w-4" />
                Automatic metadata tagging
              </li>
            </ul>
          </CardContent>
        </Card>

        <!-- Spotify Card -->
        <Card class="bg-white dark:bg-gray-900">
          <CardHeader class="flex flex-col items-center">
            <div class="rounded-full bg-green-100 p-3 dark:bg-green-900">
              <Spotify class="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <CardTitle
              class="mt-4 text-xl font-bold text-gray-800 dark:text-gray-200"
              >Spotify</CardTitle
            >
          </CardHeader>
          <CardContent class="text-center">
            <p class="text-gray-600 dark:text-gray-400">
              Connect and sync with your Spotify account
            </p>
            <ul class="mt-4 space-y-2">
              <li
                class="flex items-center justify-center text-sm text-gray-600 dark:text-gray-400"
              >
                <Download class="mr-2 h-4 w-4" />
                Sync playlists and liked songs
              </li>
              <li
                class="flex items-center justify-center text-sm text-gray-600 dark:text-gray-400"
              >
                <Share class="mr-2 h-4 w-4" />
                Discover and download similar tracks
              </li>
              <li
                class="flex items-center justify-center text-sm text-gray-600 dark:text-gray-400"
              >
                <Headphones class="mr-2 h-4 w-4" />
                Offline playback for Premium users
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup>
import SoundCloud from "~/components/icons/SoundCloud.vue";
import Spotify from "~/components/icons/Spotify.vue";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Youtube,
  Cloud,
  Music,
  Download,
  Share,
  Headphones,
} from "lucide-vue-next";
</script>
