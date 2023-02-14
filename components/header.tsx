import Image from "next/image";

const customLoader = ({ src }: { src: any }) => {
  return src;
};

export default function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <a href="/" className="mr-6">
        <Image
          loader={customLoader}
          src="/logo.png"
          alt="MAW Web Services LLC Logo"
          width={75}
          height={50}
          priority
        />
      </a>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-medium lg:flex-grow">
          <a
            href="/recipes"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-600 hover:text-black mr-6"
          >
            Recipes
          </a>
          <a
            href="/chefs"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-600 hover:text-black mr-6"
          >
            Chefs
          </a>
          <a
            href="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-600 hover:text-black mr-6"
          >
            About
          </a>
          <a
            href="/contact"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-600 hover:text-black"
          >
            Contact
          </a>
        </div>
        <div>
          <a
            href="/contact"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Sign Up!
          </a>
        </div>
      </div>
    </nav>
  );
}
