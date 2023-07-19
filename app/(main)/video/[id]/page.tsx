"use client"

import useSWR from "swr";
import { getVideoById } from "~/sanity/queries";
import VideoPlayer from "../VideoPlayer";
import { firstVideo } from "~/data/video";

export default function VideoPage({ params }: { params: { id: string } }) {
  const { data: video, error } = useSWR(`/api/video/${params.id}`, () => {
    if (Number(params.id) === 1) return firstVideo

    return getVideoById(params.id)
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!video) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <VideoPlayer video={video}></VideoPlayer>
    </>
  )
}