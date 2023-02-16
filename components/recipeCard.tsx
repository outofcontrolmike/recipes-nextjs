import BlockContent from "@sanity/block-content-to-react";
import { IRecipe } from "../@interfaces/recipe";
import { SanityImage } from "../components/image/SanityImage";

interface Props {
  recipe: {
    slug: any;
    mainImage: string;
    description: any;
    title: any;
    post: any;
  };
  post: IRecipe;
}

export const RecipeCard = (props: Props) => {
  const recipe = props?.recipe;

  console.log("stuff....", props);

  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <a
          href={"/recipes/" + recipe?.slug?.current}
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          <SanityImage
            image={recipe.mainImage}
            alt={recipe.title}
            width={350}
            className="rounded-t-lg"
          />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {recipe?.title}
          </h5>
          <p className="text-gray-700 text-base mb-4">
            <BlockContent blocks={recipe?.description}></BlockContent>
          </p>
          <a href={"/recipes/" + recipe?.slug?.current}>
            <button
              type="button"
              className=" inline-block px-6 py-2.5 text-white-400 bg-teal-400 font-thick text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-500 hover:text-white-100 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              View Recipe
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
