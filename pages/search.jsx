import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";
import InfoCard from "../components/cards/InfoCard";
import Map from "../components/Map";

function search({ searchResults }) {
  const router = useRouter();

  const { location, startDate, endDate, numberOfGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yyyy");
  const formattedEndtDate = format(new Date(endDate), "dd MMMM yyyy");
  const range = `${formattedStartDate} - ${formattedEndtDate}`;

  return (
    <div>
      <Head>
        <title>Airbnb App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        placeholder={`${location} | ${range} | ${numberOfGuests} guests`}
      />

      <main className="flex justify-content max-w-7xl mx-auto shadow-xl bg-white pb-5">
        <section className="flex-grow pt-14 px-6">
          <p>
            300+ Stays -{" "}
            <span className="bg-gray-100 rounded-full px-2 py-1">
              {formattedStartDate}
            </span>{" "}
            to{" "}
            <span className="bg-gray-100 rounded-full px-2 py-1">
              {formattedStartDate}
            </span>{" "}
            for {numberOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Places</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex">
            <div className="flex flex-col">
              {searchResults?.map(
                (
                  { img, title, description, location, star, price, total },
                  i
                ) => (
                  <InfoCard
                    key={i}
                    img={img}
                    title={title}
                    description={description}
                    location={location}
                    star={star}
                    price={price}
                    total={total}
                  />
                )
              )}
            </div>
            <div className="hidden xl:inline-flex xl:min-w-[600px] ml-5">
              <Map searchResults={searchResults} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (response) => response.json()
  );

  return { props: { searchResults } };
}
