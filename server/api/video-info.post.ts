import { client } from "../utility/youtube";

export default defineEventHandler(async (event) => {
  const { videoId } = await readBody(event);
  const video = await client.videos.list({
    id: videoId,
    part: ["snippet"],
    key: process.env.YOUTUBE_API_KEY,
  });
  if (!video.data.items || video.data.items?.length === 0) {
    return new Response("Video not found", { status: 404 });
  } else {
    return new Response(JSON.stringify(video.data.items[0].snippet), {
      headers: { "Content-Type": "application/json" },
    });
  }
});
