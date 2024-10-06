<template>
  <nav class="bg-white shadow-md">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <span
          class="text-xl font-bold bg-gradient-to-t from-fade-start to-fade-end bg-clip-text text-transparent"
          >Hello again</span
        >
        <div class="hidden md:flex items-center space-x-4">
          <NuxtLink
            to="/"
            class="text-gray-600 hover:text-purple-600 flex items-center"
          >
            <Home class="w-4 h-4 mr-1" />
            Home
          </NuxtLink>
          <NuxtLink
            to="/download"
            class="text-gray-600 hover:text-purple-600 flex items-center"
          >
            <Search class="w-4 h-4 mr-1" />
            Search
          </NuxtLink>
          <NuxtLink
            to="/"
            class="text-gray-600 hover:text-purple-600 flex items-center"
          >
            <Library class="w-4 h-4 mr-1" />
            Library
          </NuxtLink>
        </div>
        <div class="flex items-center">
          <Button
            variant="ghost"
            size="sm"
            class="text-gray-600 hover:text-purple-600"
          >
            <UserCircle class="w-5 h-5 mr-2" />
            Login
          </Button>
        </div>
      </div>
    </div>
    <div class="md:hidden border-t border-gray-200">
      <div class="flex justify-around py-2">
        <NuxtLink
          to="/"
          class="text-gray-600 hover:text-purple-600 flex flex-col items-center text-xs"
        >
          <Home class="w-6 h-6 mb-1" />
          Home
        </NuxtLink>
        <NuxtLink
          to="/download"
          class="text-gray-600 hover:text-purple-600 flex flex-col items-center text-xs"
        >
          <Search class="w-6 h-6 mb-1" />
          Search
        </NuxtLink>
        <NuxtLink
          to="/"
          class="text-gray-600 hover:text-purple-600 flex flex-col items-center text-xs"
        >
          <Library class="w-6 h-6 mb-1" />
          Library
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { Button } from "@/components/ui/button";
import { Home, Search, Library, UserCircle } from "lucide-vue-next";
</script>
