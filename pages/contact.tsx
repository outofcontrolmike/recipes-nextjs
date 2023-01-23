import Head from "next/head";
import Image from "next/image";
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

      <h1>Contact Us</h1>
      <p>
        We would love to read any comments or questions that you'd like to
        share. We would also love contributions to our recipe database. Who
        knows, if this project gets out of control we made need writers for our
        sanity.io studio.
      </p>
      <div className="p-4">
        <form action="/send-data-here" method="post">
          <label htmlFor="message">Your Message</label>
          <textarea className="textDecoration: outline m-4 w-500" rows={5}>
            Please leave a comment here.
          </textarea>
          <h1>
            If you'd like to contribute a recipe, click here and fill out the
            form{" "}
          </h1>

          <label htmlFor="name">Recipe Name:</label>
          <input
            type="text"
            className="textDecoration: outline m-4"
            id="name"
            name="name"
          />
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            className="textDecoration: outline m-4"
          />
          <label htmlFor="subcategory">Sub Category</label>
          <input
            type="text"
            id="subcategory"
            name="subcategory"
            className="textDecoration: outline m-4"
          />
          <label htmlFor="servings">Servings</label>
          <input
            type="text"
            id="servings"
            name="servings"
            className="textDecoration: outline m-4"
          />

          <label htmlFor="prep_time">Prep Time</label>
          <input
            type="text"
            id="prep_time"
            name="prep_time"
            className="textDecoration: outline m-4"
          />
          <label htmlFor="cook_time">Cook Time</label>
          <input
            type="text"
            id="cook_time"
            name="cook_time"
            className="textDecoration: outline m-4"
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
          >
            Please list out all ingredients here.
          </textarea>
          <label htmlFor="directions">Directions</label>
          <textarea
            name="directions"
            className="textDecoration: outline m-4 w-500"
            rows={5}
          >
            Please List Directions Here....
          </textarea>
          <h1>
            If you'd like to be listed as a chef on our site, please fill out
            the form below.
          </h1>
          <hr></hr>
          <button type="submit" className="mt-10">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
