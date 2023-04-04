import { Link, useLoaderData, useParams } from "react-router-dom";

import classes from "./CountryDetail.module.css";

const CountryDetail = () => {
  const country = useLoaderData();

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
