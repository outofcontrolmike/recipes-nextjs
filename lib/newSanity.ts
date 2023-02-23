import sanityClient from '@sanity/client';

export const configuredSanityClient = sanityClient({
	projectId: "clj5orum",
	dataset: 'production',
	useCdn: true,
  apiVersion: '2022-05-22'
});
