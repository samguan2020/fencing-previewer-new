import { groq } from 'next-sanity'

import { clientFetch, client } from './lib/client'
import { Video } from './schemaTypes/video'

export const getAllVideosQuery = groq`
  *[_type == "video" && authId == $authId]{
    _id,
    title,
    description,
    "imageUrl": mainImage.asset->url,
    videoUrl
  }
  `

export const getAllVideos = async (authId: string) => {
  return await client.fetch<Video[]>(getAllVideosQuery, {authId})
}

export const getVideoByIdQuery = groq`
  *[_type == "video" && _id == $_id]{
    _id,
    title,
    description,
    "imageUrl": mainImage.asset->url,
    videoUrl
  }[0]
  `

export const getVideoById = async (_id:string) => {
  return await clientFetch<Video>(getVideoByIdQuery,{_id:_id})
}

export async function createVideo(video: Video) {
  const result = client.create(video)
  return result
}

export async function deleteVideoById(id: string) {
  const result = client.delete(id)
  return result
}

export async function updateFile(file: File) {
  function rename(name: string) {
    const ext = name.split('.').pop()
    return `${Date.now()}-name.${ext}`
  }

  const result = await client.assets.upload('file', file,{filename: rename(file.name)})
  return result
}

