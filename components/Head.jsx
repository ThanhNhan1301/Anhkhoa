import Head from "next/head";
import { description, brand, logo } from "../configs/main.json";

function HeadComponent() {
  return (
    <Head>
      <title>{brand}</title>
      <meta name="description" content={description} />
      <link rel="icon" href={logo} />
    </Head>
  );
}

export default HeadComponent;
