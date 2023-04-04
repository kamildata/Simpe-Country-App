import { useState } from "react";
import classes from "./SearchBar.module.css";

const SearchBar = (props) => {
  const [searchCountry, setSearchCountry] = useState("");
  const [region, setRegion] = useState("");

  const searchCountryHandler = (event) => {
    setSearchCountry(event.target.value);
    props.onSearch(event.target.value.toLowerCase().trim(), region);
  };

  const filterCountryHandler = (event) => {
    setRegion(event.target.value);
    props.onSearch(searchCountry, event.target.value);
  };

  return (
    <div className={classes.searchBar}>
      <input
        type="text"
        placeholder="Search for a country"
        onChange={searchCountryHandler}
      ></input>
      <select onChange={filterCountryHandler} name="region" id="region">
        <option value="">Filter by region</option>
        <option value="Europe">Europe</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default SearchBar;
