import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>MAW Recipes Project</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div
          className={
            "container bg-white text-center mx-auto m-10 p-10 rounded overflow-hidden shadow-xl mt-4 flex-none"
          }
        >
          <h1>Welcome to the Recipes Project</h1>
          <p>
            We are a community based group of average people looking to share
            our recipes and find inspiration from new ones.
          </p>
          <hr style={{ borderBottomColor: "black" }}></hr>
          <br></br>
          <h2>Vist our Recipes page to view all of the goodness.</h2>
          <p>There will be a picture here eventually.</p>
          <br></br>
          <h2>Learn more about our Chefs and Writers by clicking here.</h2>
          <br></br>
          <h2>Are you interested in listing a recipe or writing for us?</h2>
          <br></br>
          <button>
            <a href="/contact">Fill out this form</a>
          </button>
        </div>
      </main>
    </>
  );
}
