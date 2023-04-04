import { Link, useLoaderData } from "react-router-dom";

import classes from "./CountryDetail.module.css";

const CountryDetail = () => {
  const country = useLoaderData();

  if (country.isError) {
    return (
      <>
        <Link to="/">
          <button className={classes.backBtn}>back</button>
        </Link>
        <div className={classes.wrapper}>
          <h3>Can't fetch data.</h3>
        </div>
      </>
    );
  }

  console.log(country);

  return (
    <div className={classes.container}>
      <Link to="/">
        <button className={classes.backBtn}>back</button>
      </Link>
      <div className={classes.wrapper}>
        {" "}
        <img src={country.flagUrl}></img>
        <div className={classes.content}>
          <h3>{country.name.common}</h3>
          <div className={classes.infoSection}>
            <div className={classes.infoItem}>
              <p>
                Native Name: <span>{country.nativeName}</span>
              </p>
            </div>
            <div className={classes.infoItem}>
              <p>
                Population: <span>{country.population}</span>
              </p>
            </div>
            <div className={classes.infoItem}>
              <p>
                Region: <span>{country.region}</span>
              </p>
            </div>
            <div className={classes.infoItem}>
              <p>
                Sub Region: <span>{country.subRegion}</span>
              </p>
            </div>
            <div className={classes.infoItem}>
              <p>
                Capital: <span>{country.capital}</span>
              </p>
            </div>
            <div className={classes.infoItem}>
              <p>
                Top Level Domain: <span>{country.tld}</span>
              </p>
            </div>
            <div className={classes.infoItem}>
              <p>
                Currencies: <span>{country.currencies}</span>
              </p>
            </div>
            <div className={classes.infoItem}>
              <p>
                Languages: <span>{country.languages}</span>
              </p>
            </div>
            {country.borders === undefined ? (
              ""
            ) : (
              <div className={classes.borderItems}>
                <p>Border Countries: </p>
                {country.borders === undefined ? (
                  <p>none.</p>
                ) : (
                  country.borders.map((element) => {
                    return (
                      <Link to={`/country/${element}`}>
                        <button className={classes.bordersBtn}>
                          {element}
                        </button>
                      </Link>
                    );
                  })
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;

export const fetchCountryDetail = async ({ params }) => {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${params.code}`
  );

  if (!res.ok) {
    return { isError: true, message: "Could not fetch country data" };
  } else {
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
  }
};
