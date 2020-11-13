import React from "react";

import { Cards, Charts, CountryPicker } from "./components";
import styles from "./App.module.css";

import { fetchData } from "./api";

import corona from "./images/1.png";
class App extends React.Component {
  state = {
    country: "",
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div>
        <div className={styles.container}>
          <div className={styles.image}><img src={corona} /></div>
          {/* <div className={styles.test}>COVID19</div> */}
          <Cards data={data} />
          <Charts data={data} country={country} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
        </div>
      </div>
    );
  }
}

export default App;
