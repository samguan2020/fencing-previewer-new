import { defineConfig } from 'sanity'
import { visionTool } from '@sanity/vision'

import {deskTool} from 'sanity/desk'
import { media } from 'sanity-plugin-media'

import {  apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schema'

export default defineConfig({
  title: 'fencing-previewer',
  basePath: '/studio',
  projectId,
  dataset,
  schema:{
    types: schema,
  },
  plugins: [
    deskTool(),
    visionTool({ defaultApiVersion: apiVersion }),
    media(),
  ],
})
