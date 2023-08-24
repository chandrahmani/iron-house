import LandingBanner from "@/components/common/LandingBanner";
import SubHeader from "@/components/subHeader/SubHeader";
import ProductOverviews from "@/components/tailwind/ProductOverviews";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>iron house</title>
      </Head>
      <SubHeader title="Welcome To IRON HOUSE " />
      <ProductOverviews />
      <LandingBanner />
    </>
  );
}
