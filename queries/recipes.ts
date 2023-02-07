import groq from 'groq';
import { GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { sanityStaticProps } from '../lib/sanity';


interface IRecipesData {
	data?: {
		name: string;
	};
}

//Get all recipes
export const recipesData = async (context: GetStaticPropsContext<ParsedUrlQuery>) => {
	const query = groq`*[_type == 'recipe']{
        ...,
        categories[]->,
        subCategory[]->
    }`;


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
            author->,
            categories[]->,
            subCategory[]->
        }`;

        const recipesData: IRecipeData = await sanityStaticProps({context, query});
        return recipesData;
    }


    //Fetch data that filters for category slug
    export const categoryFilteredData = async (context: GetStaticPropsContext<ParsedUrlQuery>) => {
         const slug = context?.params?.slug;
        const query = groq`*[count((categories[]->slug.current)[@ in ['${slug}']]) > 0]`;

        const recipesData: IRecipeData = await sanityStaticProps({context, query});
        return recipesData;
    }

    // Fetch recipes by subCategory slug

    export const subCategoryFilteredData = async (context: GetStaticPropsContext<ParsedUrlQuery>) => {
         const slug = context?.params?.slug;
        const query = groq`*[count((subCategory[]->slug.current)[@ in ['${slug}']]) > 0]`;

        const subCategoryRecipes: IRecipeData = await sanityStaticProps({context, query});
        return subCategoryRecipes;
    }