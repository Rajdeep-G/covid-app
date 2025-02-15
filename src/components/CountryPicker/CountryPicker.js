import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.css";

import { fetchCountries } from "../../api";

const CountryPicker = ({handleCountryChange}) => {
  const [fetchedCountries, setFetchedCounries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCounries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCounries]);
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e)=> handleCountryChange(e.target.value)}>
        <option value="">Select a country</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
