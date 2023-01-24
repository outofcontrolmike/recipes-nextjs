import client from "../client";
import groq from 'groq';
import { GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';

interface ISubCategoriesData {
	data?: {
		title: string;
	};
}

export const subCategoriesData = async (context: GetStaticPropsContext<ParsedUrlQuery>) => {
	const query = groq`*[_type == 'subCategory'] {
    ...,
  }`;

	const subCategoriesData: ISubCategoriesData  = await client.fetch(query);({ context, query });
	return subCategoriesData;

    
};

