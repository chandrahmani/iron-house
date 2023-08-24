import LandingBanner from "@/components/common/LandingBanner";
import SubHeader from "@/components/subHeader/SubHeader";
import ProductOverviews from "@/components/tailwind/ProductOverviews";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          CTCab.in | Taxi services | Luxury Car Fleet | Coaches & Volvos |
          Inbound & Outbound Tours International Air Ticketing | Domestic Air
          Ticketing | Holiday & Cruise Packages | Hotel Reservation | Tour
          Guides | School/College Tours
        </title>
      </Head>
      <SubHeader title="Welcome To Kashmir Cab Services " />
      <ProductOverviews />
      <LandingBanner />
    </>
  );
}
