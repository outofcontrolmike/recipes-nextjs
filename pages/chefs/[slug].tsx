import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Slug for Chef</title>
        <meta name="description" content="Information about specific chef" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <Image
            src="/aboutUs.jpg"
            width="600"
            height="1200"
            alt="about My wife and I photo"
          />
          <p>Chef Name</p>
          <p>Sub Name: </p>
          <label>Chef Description:</label>
          <p>
            Lorem ipsum dolor sit amet. Ut doloribus voluptas ab numquam tempora
            et sint asperiores nam omnis excepturi et nobis deleniti qui
            accusamus cupiditate ad vitae exercitationem. Ut dolorem sint ab
            nihil modi qui quibusdam dicta rem minima molestiae est cumque
            dolorem ut aliquid odit a repellendus minima. 33 excepturi velit id
            placeat accusamus est corrupti autem eum voluptate distinctio ut
            nobis similique et esse magni ut omnis Quis? Qui dolor quidem in
            inventore iure et itaque facilis ea quasi provident. Eum iusto
            quidem sit molestias veniam non velit quasi aut commodi deleniti ut
            accusamus quae. Qui ullam voluptate ut inventore eaque ea veritatis
            pariatur? Et deleniti voluptatum ut voluptate modi aut voluptatibus
            voluptas ut rerum libero. Sit aliquid voluptatem est ipsam velit non
            maxime iste et quidem saepe id iusto deserunt eos nihil vitae et
            totam sapiente.
          </p>
          <p>Date Joined:</p>
          <p>social 1</p>
          <p>Social 2</p>
          <p>Contact?</p>
          <h2>Featured Recipes</h2>
          <h2>Table or recipes</h2>
        </div>
      </main>
    </>
  );
}
