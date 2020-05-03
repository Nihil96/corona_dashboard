import React, { Component } from "react";
import {
  CountryPicker,
  Cards,
  Chart,
  CountryTable,
  PieChart,
} from "./components";
import styles from "./App.module.css";
import { fetchData, getCovid19InfoForCountriesOver50K } from "./api/";

class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await getCovid19InfoForCountriesOver50K();

    this.setState({
      data,
    });
    console.log(data);
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({
      data,
      country,
    });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.main_container}>
        <div className={styles.container}>
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <PieChart data={data} country={country} />
        </div>
        <div>
          <Cards data={data} />
          <Chart data={data} country={country} />
        </div>
        <CountryTable />
      </div>
    );
  }
}

export default App;
