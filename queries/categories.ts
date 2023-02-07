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
interface ICategoryData {
    data?: {
        title: string;
        slug:string;
    }
	
}

export const categoryData = async (context: GetStaticPropsContext<ParsedUrlQuery>) => {
	const slug = context?.params?.slug;
	const query = groq`*[_type == 'category' && slug.current == '${slug}']{
		...,
		'slug': slug.current,
	}`;

	const categoryData: ICategoryData = await sanityStaticProps({context, query});
	return categoryData;
}

//Category Based Recipe Fetch
export const fetchByCategory = async (context: GetStaticPropsContext<ParsedUrlQuery>) => {
	const slug = context?.params?.slug;
	const query = groq`*[type == 'recipe' && category == slug.current == '${slug}']{
		...,
		'slug': slug.current,
	}`;

	
	const filterRecipeData: ICategoryData = await sanityStaticProps({context, query});
	return filterRecipeData;
}