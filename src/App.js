import React from "react";

import { Cards, Charts, CountryPicker } from "./components";
import styles from "./components/App.module.css";

import { fetchData } from "./api";

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
    console.log(country);
  };
  render() {
    const { data } = this.state;
    return (
      <div>
        <div className={styles.container}>
          <Cards data={data} />
          <Charts data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
        </div>
      </div>
    );
  }
}

export default App;
