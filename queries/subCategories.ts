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

interface ISubCategoryData {
    data?: {
        title: string;
        slug:string;
    }
	
}


//Slug of Sub Category
export const subCategoryData = async (context: GetStaticPropsContext<ParsedUrlQuery>) => {
	const slug = context?.params?.slug;
	const query = groq`*[_type == 'subCategory' && slug.current == '${slug}']{
		...,
		'slug': slug.current,
	}`;

	const subCategoryData: ISubCategoryData = await sanityStaticProps({context, query});
	return subCategoryData;
}
