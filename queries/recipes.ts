import groq from 'groq';
import { GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { sanityClient, sanityStaticProps } from '../lib/sanity';

//Paths
export const getCategoryPaths = async () => {
	const client = sanityClient('authenticated');
	const query = groq`*[_type == 'recipe'][0]{
		recipe[]->{
			'slug': slug.current,
		},
	}`;

    //No wonder this doesnt work, client.fetch needs to be sanitystaticprops isn't real
	const {categories} = await client.fetch(query).then((data) => data);
	return categories;
};

interface IRecipesData {
	data?: {
		name: string;
	};
}

//Get all recipes
export const recipesData = async (context: GetStaticPropsContext<ParsedUrlQuery>) => {
	const query = groq`*[_type == 'recipe']`;


  const recipesData: IRecipesData = await sanityStaticProps({ context, query });
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
        const query = groq`*[_type == 'recipe' && slug.current == '${slug}']{
            ...,
            'slug': slug.current,
            author->{
                ...,
            },
        }`;

        const recipesData: IRecipeData = await sanityStaticProps({context, query});
        return recipesData;
    }

