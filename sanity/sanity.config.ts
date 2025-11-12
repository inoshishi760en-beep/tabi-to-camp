import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import post from './schemas/post';
import { SANITY_PROJECT_ID, SANITY_DATASET, SANITY_API_VERSION } from './env';

export default defineConfig({
  name: 'default',
  title: 'Camp Blog',
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: SANITY_API_VERSION,
  basePath: '/studio',
  plugins: [deskTool()],
  schema: { types: [post] },
});

