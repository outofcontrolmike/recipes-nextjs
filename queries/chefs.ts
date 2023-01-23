import { sanityStaticProps } from 'lib/sanity';
import groq from 'groq';
import { GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';

interface IRecipesData {
	data?: {
		title: string;
	};
}

export const homeData = async (context: GetStaticPropsContext<ParsedUrlQuery>) => {
	const query = groq`*[_type == 'chefs'][0] {
    ...,
  }`;

	const recipesData: IRecipesData = await sanityStaticProps({ context, query });
	return recipesData;
};

interface IChefData {
	data?: {
		title: string;
		slug: string;
	};
}
    //Chef Slug - probably similar to postData in Sanity
    export const postData = async (context: GetStaticPropsContext<ParsedUrlQuery>) => {
        const slug = context?.params?.slug;
        const query = groq`*[_type == 'chefs' && slug.current == '${slug}'][0]{
            ...,
            'slug': slug.current,
            author->{
                ...,
            },
        }`;
    
        const chefData: IChefData = await sanityStaticProps({ context, query });
        return chefData;
    };
