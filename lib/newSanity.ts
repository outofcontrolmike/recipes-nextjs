import sanityClient from '@sanity/client';

export const configuredSanityClient = sanityClient({
	projectId: "clj5orum",
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	useCdn: true,
  apiVersion: '2022-05-22'
});
