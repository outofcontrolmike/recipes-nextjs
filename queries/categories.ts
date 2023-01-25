import groq from 'groq';
import { GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { sanityStaticProps } from "../lib/sanity";

interface IcategoriesData {
	data?: {
		title: string;
	};
}

export const categoriesData = async (context: GetStaticPropsContext<ParsedUrlQuery>) => {
	const query = groq`*[_type == 'category']`;

	const categoriesData: IcategoriesData = await sanityStaticProps ({ context, query });
	return categoriesData;

    
};

//Maybe set it up to get slug view of category eventually
