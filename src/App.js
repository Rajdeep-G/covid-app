import React from "react";
import { Cards, Charts, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import corona from "./images/1.png";
import heart from "./images/heart.svg";
import gmail from "./images/gmail.svg";
import linkedin from "./images/lnn.svg";
import github from "./images/github2.svg";

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
          <div className={styles.image}>
            <img src={corona} />
          </div>
          {/* <div className={styles.test}>COVID19</div> */}
          <Cards data={data} />

          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Charts data={data} country={country} />
          {/* <Footer /> */}
        </div>
        <div className={styles.footer}>
          Made with love{" "}
          <div className={styles.heart}>
            <img src={heart} />
          </div>
          by Rajdeep Ghosh
        </div>

        <div className={styles.contact}>
          <a
            href="mailto:ghoshrajdeep2000@gmail.com"
            style={{ color: "#FFF" }}
            target="_blank"
          >
            <div className={styles.g}>
              <div>ghoshrajdeep2000@gmail.com</div>
              <div>
                <img className={styles.gmail} src={gmail} />
              </div>
            </div>
          </a>
          <a
            href="https://github.com/Rajdeep-G"
            style={{ color: "#FFF" }}
            target="_blank"
          >
            <div className={styles.g}>
              <div>Github</div>
              <div>
                <img className={styles.gmail} src={github} />
              </div>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/rajdeep-ghosh2000rg/"
            style={{ color: "#FFF" }}
            target="_blank"
          >
            <div className={styles.g}>
              <div>Linkedin</div>
              <div>
                <img className={styles.gmail} src={linkedin} />
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default App;
