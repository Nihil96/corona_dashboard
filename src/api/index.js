import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    return data.map(({ confirmed, deaths, reportDate: date }) => ({
      confirmed: confirmed.total,
      deaths: deaths.total,
      date,
    }));
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};

async function getCountries() {
  let countries = [];
  const ct = await axios.get(`${url}/countries`);
  ct.data.countries.forEach((country) => {
    countries.push(`${url}/countries/${country.name}`);
  });
  return countries;
}

async function getData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
  }
  return {};
}

export async function getCovid19InfoForCountriesOver50K() {
  const countrieInfo = [];
  const countries = await getCountries();
  for (let index = 0; index < countries.length; index++) {
    const url = countries[index];
    const info = await getData(url);
    if (info.confirmed && info.confirmed.value >= 80000) {
      countrieInfo.push(info);
    }
  }
  return countrieInfo;
}
