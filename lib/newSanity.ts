import sanityClient from '@sanity/client';

export const configuredSanityClient = sanityClient({
	projectId: process?.env?.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
	dataset: process?.env?.NEXT_PUBLIC_SANITY_DATASET as string,
	useCdn: true,
  apiVersion: '2022-05-22'
});
