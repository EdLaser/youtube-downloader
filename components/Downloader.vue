<template>
  <div class="container mx-auto p-4 flex items-center justify-center mt-20">
    <Card class="w-full max-w-6xl shadow-lg">
      <CardHeader class="pb-0">
        <CardTitle class="text-4xl font-bold text-center gap-2 mb-6">
          Input your Song
        </CardTitle>
        <div class="flex space-x-2 mb-10">
          <Input
            type="text"
            placeholder="Paste YouTube music video URL here"
            class="flex-grow"
            v-model="videoUrl"
          />
          <Button @click="handleGetInfo" :disabled="isLoading">
            <template v-if="isLoading">
              <Loader2 class="mr-2 h-4 w-4 animate-spin" />
              Loading
            </template>
            <template v-else> Get Music Info </template>
          </Button>
        </div>
      </CardHeader>
      <CardContent class="p-0 mb-10" v-if="videoUrl">
        <Separator :label="randomEmoji" class="my-8" />
        <div class="flex flex-col md:flex-row min-h-52">
          <template v-if="isLoading">
            <div
              class="w-full md:w-1/2 aspect-video bg-gray-200 animate-pulse"
            ></div>
          </template>
          <template v-else>
            <NuxtImg
              :src="thumbnailUrl"
              alt="Music video thumbnail"
              class="w-full md:w-1/2 aspect-video object-cover rounded-md"
              v-if="thumbnailUrl"
            />
          </template>
          <div class="p-6 w-full md:w-1/2 space-y-4">
            <template v-if="isLoading">
              <div class="space-y-4 animate-pulse">
                <div class="h-8 bg-gray-200 rounded w-3/4"></div>
                <div class="h-4 bg-gray-200 rounded w-full"></div>
                <div class="h-4 bg-gray-200 rounded w-full"></div>
                <div class="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            </template>
            <template v-else>
              <h2 class="text-2xl font-semibold">Shape of You - Ed Sheeran</h2>
              <p class="text-sm text-gray-600">
                "Shape of You" is a hit song by English singer-songwriter Ed
                Sheeran. It was released as a digital download on 6 January 2017
                as one of the double lead singles from his third studio album ÷
                (2017).
              </p>
              <div class="flex justify-between text-sm text-gray-500">
                <span>3,456,789,012 views</span>
                <span>23,456,789 likes</span>
              </div>
              <div class="space-y-2">
                <div class="flex justify-between text-sm">
                  <span>Song Duration</span>
                  <span>3:54</span>
                </div>
                <Progress :value="33" class="h-2" />
              </div>
              <div class="flex space-x-4 pt-4">
                <Button
                  class="flex-1 bg-green-500 hover:bg-green-600 text-white"
                >
                  <Download class="mr-2 h-4 w-4" /> Download MP3
                </Button>
                <Button variant="outline" class="flex-1">
                  <RefreshCw class="mr-2 h-4 w-4" /> Change Video
                </Button>
              </div>
            </template>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, RefreshCw, Loader2 } from "lucide-vue-next";
import { Progress } from "@/components/ui/progress";

const emojiLabels = [
  "ᕕ(⌐■_■)ᕗ ♪♬",
  "ヾ(⌐■_■)/",
  "♪┌|∵|┘♪",
  "ヾ(●ω●)ノ",
  "( ﾉ･o･ )ﾉ",
  "ヾ(^ ^ゞ",
  "ƪ(˘⌣˘)ʃ",
];
const randomEmoji = useState(
  "randomEmoji",
  () => emojiLabels[Math.floor(Math.random() * emojiLabels.length)]
);

const isLoading = ref(false);
const videoUrl = ref("");
const videoId = computed(() => {
  if (!videoUrl.value) return "";
  return videoUrl.value.split("v=")[1];
});
const thumbnailUrl = computed(() => {
  if (!videoId.value) return "";
  return `https://img.youtube.com/vi/${videoId.value}/maxresdefault.jpg`;
});

const router = useRouter();

watch(videoId, (newVal) => {
  if (newVal) {
    router.push({ query: { videoId: newVal } });
  } else {
    router.push({ query: {} });
  }
});

const handleGetInfo = async () => {
  isLoading.value = true;
  try {
    const result = await $fetch("/api/video-info", {
      method: "POST",
      body: JSON.stringify({ videoId: videoId.value }),
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};
</script>
