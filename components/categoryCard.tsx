import BlockContent from "@sanity/block-content-to-react";
import { ICategory } from "../@interfaces/category";
import { SanityImage } from "../components/image/SanityImage";

interface Props {
  category: {
    slug: any;
    image: string;
    description: any;
    title: any;
    post: any;
    _type: string;
  }
  post: ICategory;
}

export const CategoryCard = (props: Props) => {
  const category = props?.category;

  let type = ""
  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <a
          href={"/recipes/" + category?.slug?.current}
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          <SanityImage
            image={category?.image}
            alt={category?.title}
            width={350}
            className="rounded-t-lg"
          />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {category?.title}
          </h5>
          <p>
            {category?.description}
          </p>
          {/* <p className="text-gray-700 text-base mb-4">
            <BlockContent blocks={category?.description}></BlockContent>
          </p> */}
               {category?._type === "subCategory" ? type = "subCategories" : type = "categories"}
               <a href={type + "/" + category?.slug?.current}>

            <button
              type="button"
              className=" inline-block px-6 py-2.5 text-white-400 bg-teal-400 font-thick text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-500 hover:text-white-100 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              View Category
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
