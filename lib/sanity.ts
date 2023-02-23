import { setupNextSanity } from 'next-sanity-extra';

const config = {
	projectId: process?.env?.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
	dataset: process?.env?.NEXT_PUBLIC_SANITY_DATASET as string,
	useCdn: process?.env?.NODE_ENV === 'production',
	token: process?.env.NEXT_PUBLIC_SANITY_API_TOKEN as string,
};

export const { sanityClient, imageUrlBuilder, PortableText, sanityStaticProps, useSanityQuery } =
	setupNextSanity(config);
