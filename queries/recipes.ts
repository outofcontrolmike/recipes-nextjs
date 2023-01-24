import groq from 'groq';
import { GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import client from '../client';

interface IRecipesData {
	data?: {
		title: string;
	};
}

//Get all recipes
export const recipesData = async (context: GetStaticPropsContext<ParsedUrlQuery>) => {
	const query = groq`*[_type == 'recipes'] {
    ...,
  }`;

  const recipesData: IRecipesData = await client.fetch(query);({ context, query });
  return recipesData;


};

interface IRecipeData {
    data?: {
        title: string;
        slug:string;
    }
}
    export const recipeData = async (context: GetStaticPropsContext<ParsedUrlQuery>) => {
        const slug = context?.params?.slug;
        const query = groq`*[_type == 'recipes' && slug.current == '${slug}'][0]]{
            ...,
            'slug': slug.current,
            author->{
                ...,
            },
        }`;

        const recipesData: IRecipeData = await client.fetch(query);({context, query});
        return recipesData;
    }

