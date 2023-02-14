import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact MAW Web Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div
          className={
            "container bg-white columns-2 mx-auto m-10 p-10 rounded overflow-hidden shadow-xl mt-4 flex-none"
          }
        >
          <h1>Contact Us</h1>
          <p>
            We would love to read any comments or questions that you'd like to
            share. We would also love contributions to our recipe database. Who
            knows, if this project gets out of control we made need writers for
            our sanity.io studio.
          </p>
          <div className="p-4">
            <form
              action="https://formsubmit.co/3c390be336cb1bf27bb2e1a6ec97299b"
              method="POST"
            >
              {/* Captcha hidden fields */}
              <input
                type="hidden"
                name="_subject"
                value="Email from MAW Recipes website"
              />
              <input
                type="hidden"
                name="_next"
                value="http://mwportfolio.online/thanks"
              />
              <input type="hidden" name="_captcha" value="false" />
              <label htmlFor="message">Your Message</label>
              <textarea className="textDecoration: outline m-4 w-500" rows={5}>
                Please leave a comment here.
              </textarea>
              <h1>
                If you'd like to contribute a recipe, click here and fill out
                the form{" "}
              </h1>

              <label htmlFor="name">Recipe Name:</label>
              <input
                type="text"
                className="textDecoration: outline m-4"
                id="name"
                name="name"
                required
                maxLength={30}
              />
              <label htmlFor="category">Category:</label>
              <input
                type="text"
                id="category"
                name="category"
                required
                className="textDecoration: outline m-4"
              />
              <label htmlFor="subcategory">Sub Category</label>
              <input
                type="text"
                id="subcategory"
                name="subcategory"
                className="textDecoration: outline m-4"
                required
              />
              <label htmlFor="servings">Servings</label>
              <input
                type="text"
                id="servings"
                name="servings"
                className="textDecoration: outline m-4"
                required
              />

              <label htmlFor="prep_time">Prep Time</label>
              <input
                type="text"
                id="prep_time"
                name="prep_time"
                className="textDecoration: outline m-4"
                required
              />
              <label htmlFor="cook_time">Cook Time</label>
              <input
                type="text"
                id="cook_time"
                name="cook_time"
                className="textDecoration: outline m-4"
                required
              />
              <label htmlFor="special_note">Special Note</label>
              <input
                type="text"
                id="special_note"
                name="special_note"
                className="textDecoration: outline m-4"
              />
              <label htmlFor="embedded_link">Embedded Link</label>
              <input
                type="text"
                id="embedded_link"
                name="embedded_link"
                className="textDecoration: outline m-4"
              />
              <label htmlFor="ingredients">Ingredients</label>
              <textarea
                name="ingredients"
                className="textDecoration: outline m-4 w-500"
                rows={5}
                required
              >
                Please list out all ingredients here.
              </textarea>
              <label htmlFor="directions">Directions</label>
              <textarea
                name="directions"
                className="textDecoration: outline m-4 w-500"
                rows={5}
                required
              >
                Please List Directions Here....
              </textarea>
              <hr></hr>
              <br></br>
              <h1>
                If you'd like to be listed as a chef on our site, please fill
                out the form below.
              </h1>
              <div>
                <label htmlFor="chef_name">Your Name</label>
                <input
                  type="text"
                  id="chef_name"
                  name="chef_name"
                  className="textDecoration: outline m-4"
                />
                <label htmlFor="chef_biography">
                  A sentence to sell yourself
                </label>
                <input
                  type="text"
                  id="chef_biography"
                  name="chef_biography"
                  className="textDecoration: outline m-4"
                />
                <label htmlFor="business_link">
                  Portfolio or Business Link
                </label>
                <input
                  type="text"
                  id="business_link"
                  name="business_link"
                  className="textDecoration: outline m-4"
                />
                <label htmlFor="social_media">
                  Social media "example:
                  https://www.instagram.com/explodingsnes/ "
                </label>
                <input
                  type="text"
                  id="social_media"
                  name="social_media"
                  className="textDecoration: outline m-4"
                />
                <label htmlFor="chef_description">Your Description</label>
                <textarea
                  id="chef_description"
                  name="chef_description"
                  rows={5}
                  className="textDecoration: outline m-4"
                />
                <label htmlFor="chef_image">An professional image of you</label>
                <input
                  type="text"
                  id="chef_image"
                  name="chef_image"
                  className="textDecoration: outline m-4"
                />
                <label htmlFor="chef_seo_keywords">
                  Seo Keywords for your page ("Chef in Springfield MO")
                </label>
                <input
                  type="text"
                  id="chef_seo_keywords"
                  name="chef_seo_keywords"
                  className="textDecoration: outline m-4"
                />
              </div>
              {/* Maybe ask if they want any recipes to be featured? */}
              <hr></hr>
              <button type="submit" className="mt-10">
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
