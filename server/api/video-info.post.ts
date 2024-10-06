import { client } from "../utility/youtube";

export default defineEventHandler(async (event) => {
  const { videoId } = await readBody(event);
  const video = await client.videos.list({
    id: videoId,
    part: ["contentDetails"],
    key: process.env.YOUTUBE_API_KEY,
  });
  return video;
});
