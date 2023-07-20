import { createClient } from 'next-sanity'
import { cache } from 'react'

import { apiVersion, dataset, projectId, useCdn, token } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token,
})

// Wrap the cache function in a way that reuses the TypeScript definitions
export const clientFetch = cache(client.fetch.bind(client))

