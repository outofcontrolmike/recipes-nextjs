import client from "../client";
import groq from 'groq';
import { GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { sanityClient, sanityStaticProps } from "../lib/sanity";

interface ISubCategoriesData {
	data?: {
		title: string;
	};
}

export const subCategoriesData = async (context: GetStaticPropsContext<ParsedUrlQuery>) => {
	const query = groq`*[_type == 'subCategory'] `;

	const subCategoriesData: ISubCategoriesData  = await sanityStaticProps({ context, query });
	return subCategoriesData;

    
};

