import { sanityStaticProps } from 'lib/sanity';
import groq from 'groq';
import { GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { postData } from './chefs';

interface IRecipeData {
	data?: {
		title: string;
	};
}

export const recipeData = async (context: GetStaticPropsContext<ParsedUrlQuery>) => {
	const query = groq`*[_type == 'recipes'][0] {
    ...,
  }`;

	const recipeData: IRecipeData = await sanityStaticProps({ context, query });
	return recipeData;


};

interface IRecipesData {
    data?: {
        title: string;
        slug:string;
    }
}
    export const recipesData = async (context: GetStaticPropsContext<ParsedUrlQuery>) => {
        const slug = context?.params?.slug;
        const query = groq`*[_type == 'recipes' && slug.current == '${slug}'][0]]{
            ...,
            'slug': slug.current,
            author->{
                ...,
            },
        }`;

        const recipesData: IRecipesData = await sanityStaticProps({context, query});
        return recipesData;
    }

