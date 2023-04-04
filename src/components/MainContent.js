import { useEffect, useState } from "react";
import Cart from "./UI/Cart";
import SearchBar from "./SearchBar";

import { Link } from "react-router-dom";

function MainContent() {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [searchRegion, setSearchRegion] = useState("");
  const [filteredCountry, setFilteredCountry] = useState();

  const [isLoading, setIsLoading] = useState(false);

  const API_URL_ALL = "https://restcountries.com/v3.1/all";

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(API_URL_ALL);
    const data = await response.json();

    const preparedData = data.map((country) => {
      return {
        capital: country.capital && country.capital[0],
        population: country.population.toLocaleString(),
        name: country.name.common,
        code: country.cioc,
        region: country.region,
        flagUrl: country.flags.png,
      };
    });
    setCountries(preparedData);
    setFilteredCountry(preparedData);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchHandler = (value, region) => {
    setSearchCountry(value);
    setSearchRegion(region);
    if (value === "" && region === "") {
      setFilteredCountry(countries);
    } else {
      const filteredCountries = countries.filter((country) => {
        return (
          country.name.toLowerCase().includes(value) &&
          (!region || country.region === region)
        );
      });
      setFilteredCountry(filteredCountries);
    }
  };

  return (
    <>
      <SearchBar onSearch={searchHandler} onFilter={searchHandler} />
      {isLoading && <p className="loading">is loading...</p>}
      <ul className="container">
        {filteredCountry &&
          filteredCountry.map((country) => {
            return (
              <li key={country.code}>
                <Link
                  to={`/country/${country.code}`}
                  style={{ textDecoration: "none" }}
                >
                  <Cart
                    imgSource={country.flagUrl}
                    countryName={country.name}
                    countryPopulation={country.population}
                    countryRegion={country.region}
                    countryCapital={country.capital}
                  />
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default MainContent;
