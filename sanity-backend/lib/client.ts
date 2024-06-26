import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn, token } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token,
})

// Wrap the cache function in a way that reuses the TypeScript definitions
export const clientFetch = client.fetch.bind(client)

