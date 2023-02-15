import client from "../client";
import groq from 'groq';
import { GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { sanityStaticProps } from "../lib/sanity";

interface IChefsData {
	data?: {
		title: string;
	};
}
//collection
export const chefsData = async (context: GetStaticPropsContext<ParsedUrlQuery>) => {
	const query = groq`*[_type == 'author']{
        image,
        title,
        name,
        slug,
        microBiography,
    }`;

	const chefsData: IChefsData = await sanityStaticProps({ context, query });
	return chefsData;
};

interface IChefData {
	data?: {
		title: string;
		slug: string;
	};
}
    //Chef Slug
    export const chefData = async (context: GetStaticPropsContext<ParsedUrlQuery>) => {
        const slug = context?.params?.slug;
        const query = groq`*[_type == 'author' && slug.current == '${slug}'][0]{
            ...,
            'slug': slug.current,
            featuredRecipes[]->{
                slug,
                mainImage,
                title,
                description,
            }
        }`;
    
        const chefData: IChefData = await sanityStaticProps({ context, query });
        return chefData;
    };
