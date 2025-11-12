import { createClient } from 'next-sanity';
import { SANITY_PROJECT_ID, SANITY_DATASET, SANITY_API_VERSION } from '@/sanity/env';

export const sanityClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: SANITY_API_VERSION,
  useCdn: true, // 公開読み取りのみ
});

