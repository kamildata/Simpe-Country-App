import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContent from "./components/MainContent";
import CountryDetail, {
  loader as countryLoader,
} from "./components/CountryDetail";
import RootElement from "./components/RootElement";
import Navigation from "./components/Navigation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContent />,
  },
  {
    path: "/country/:code",
    element: <CountryDetail />,
    loader: async ({ params }) => {
      const res = await fetch(
        `https://restcountries.com/v3.1/alpha/${params.code}`
      );
      const [country] = await res.json();
      const countryDetail = {
        capital: country.capital && country.capital[0],
        population: country.population.toLocaleString(),
        name: country.name,
        nativeName: Object.values(country.name.nativeName)[0].official,
        code: country.cioc,
        region: country.region,
        subRegion: country.subregion,
        topLevelDomain: country.topLevelDomain,
        currencies: Object.values(country.currencies)
          .map((currency) => currency.name)
          .join(", "),
        languages: Object.values(country.languages).join(", "),
        flagUrl: country.flags.png,
        tld: country.tld[0],
        borders: country.borders,
      };
      return countryDetail;
    },
  },
]);

function App() {
  return (
    <>
      {" "}
      <Navigation />
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
