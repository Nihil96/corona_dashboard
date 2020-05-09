import React, { Component } from "react";
import {
  CountryPicker,
  Cards,
  Chart,
  PieChart,
  NavBar,
  TodayCases,
} from "./components";
import styles from "./App.module.css";
import { fetchData, todayCases } from "./api/";

class App extends Component {
  state = {
    data: {},
    country: "",
    todayCases: {},
  };

  async componentDidMount() {
    const cases = await todayCases();
    const data = await fetchData();
    this.setState({
      todayCases: cases,
      data,
    });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({
      data,
      country,
    });
  };

  render() {
    const { data, country, todayCases } = this.state;

    return (
      <div>
        <NavBar />
        <div className={styles.main_container}>
          <div className={styles.container}>
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            <PieChart data={data} country={country} />
          </div>
          <div>
            <Cards data={data} />
            <Chart data={data} country={country} />
          </div>
          <TodayCases todayCases={todayCases} />
        </div>
      </div>
    );
  }
}

export default App;
