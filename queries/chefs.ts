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
	const query = groq`*[_type == 'author']`;

	const chefsData: IChefsData = await sanityStaticProps({ context, query });
	return chefsData;
};

interface IChefData {
	data?: {
		title: string;
		slug: string;
	};
}
    //Chef Slug - probably similar to postData in Sanity
    export const chefData = async (context: GetStaticPropsContext<ParsedUrlQuery>) => {
        const slug = context?.params?.slug;
        const query = groq`*[_type == 'author' && slug.current == '${slug}'][0]{
            ...,
            'slug': slug.current,
            author->{
                ...,
            },
        }`;
    
        const chefData: IChefData = await client.fetch(query);({ context, query });
        return chefData;
    };
