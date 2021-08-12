import Head from "next/head";
import Banner from "../components/Banner";
import LargeCard from "../components/cards/LargeCard";
import MediumCard from "../components/cards/MediumCard";
import Smallcard from "../components/cards/Smallcard";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home({ exploreData, cardData }) {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>Airbnb App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-6xl mx-auto px-8 sm:px-16 shadow-xl bg-white">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* pull from sever */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ location, img, distance }, i) => (
              <Smallcard
                key={i}
                location={location}
                distance={distance}
                img={img}
              />
            ))}
          </div>
        </section>

        <section className="">
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3">
            {cardData?.map(({ img, title }, i) => (
              <MediumCard key={i} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          decription="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardData,
    },
  };
}
