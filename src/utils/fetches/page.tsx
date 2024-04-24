import { client } from './client';

export const getPageData = async (slug:string) => {
  const query = `*[ _type == "page" && slug.current == $slug ] {
    ...
  }`;

  const data = await client.fetch(query, { slug });

  return {
    data,
  };
};