import Head from "next/head";
import Image from "next/image";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <h1>Privacy Policy</h1>
          <h2>Consent</h2>
          <p>
            By using our Recipes website you consent to the terms and
            information below
          </p>
          <h2>Information That we Potentially Collect</h2>
          <p>
            The purpose of this site is to provide users with public data
            regarding recipes and the ability to publicize those who want to
            share their recipes on this site.
          </p>
          <p></p>
          <p>
            We do not plan to sell any information regarding our viewers or
            contributors.
          </p>
          <h2>Our Dataset Information</h2>
          <p>
            We use{" "}
            <a
              className="font-color: text-red-700"
              target={"_blank"}
              href="https://www.sanity.io/"
            >
              Sanity.IO
            </a>{" "}
            as a headless Content Management Platform for writing content in
            regards to the recipes and chefs listed on the site. As of right
            now, the platform only has one Admin/Editor. Other people do not
            have access to uploading this data at the moment.
          </p>
          <p>
            If you provide us with recipe or author information, please
            understand that we can't do much about someone claiming your recipe
            as their own and posting it in their own blog on another site. We
            vouch not to claim any of your recipes as our own.
          </p>
          <p>
            Lets say you find any false information or some typos in a recipe
            you sent us. if that's the case, please send us an email with a
            topic of altering your content and we will address it asap.
          </p>
          <h2>Closure</h2>
          <p>
            If you have any more questions, please feel free to reach to our
            business email at{" "}
            <a
              className="text-color: text-blue-800"
              href="mailto:outofcontrolmike@gmail.com"
            >
              outofcontrolmike@gmail.com
            </a>
          </p>
        </div>
      </main>
    </>
  );
}
