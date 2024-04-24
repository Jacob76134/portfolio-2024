import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';

//
//
//////// Client (Used for all fetches)
export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: true,
    apiVersion: '2021-03-25',
  });
  
export const builder = imageUrlBuilder(client);  