import { groq } from 'next-sanity'

import { clientFetch, client } from '~/sanity/lib/client'
import {Video} from '~/sanity/schemas/video'

export const getAllVideosQuery = groq`
  *[_type == "video" && authId == $authId]
  `

export const getAllVideos = async (authId: string) => {
  return await clientFetch<Video[]>(getAllVideosQuery, {authId})
}

export const getVideoByIdQuery = groq`
  *[_type == "video" && _id == $_id][0]{
    _id,
    title,
    description,
    mainImage {
      _ref,
      asset->{
        url,
      }
    },
    video {
      _ref,
      asset->{
        url,
      }
    }
  }
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