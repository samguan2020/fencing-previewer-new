import { env } from '../env.mjs'

export const apiVersion = '2023-07-19'

export const dataset = assertValue(
  env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  "od7yaz7l", //env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const useCdn = env.NEXT_PUBLIC_SANITY_USE_CDN

export const token = env.NEXT_PUBLIC_SANITY_API_TOKEN

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
