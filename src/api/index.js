import axios from "axios";

const url = "https://covid19.mathdro.id/api";
const url2 = "https://coronavirus-19-api.herokuapp.com/countries";
const url3 = "https://corona.lmao.ninja/v2/countries";

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

export const todayCases = async () => {
  try {
    const data = await axios.get(url2);
    return data.data[0];
  } catch (error) {
    return error;
  }
};

export const fetchCountriesForMap = async () => {
  try {
    const data = await axios.get(url3);
    return data.data;
  } catch (error) {
    return error;
  }
};

// async function getCountries() {
//   let countries = [];
//   const ct = await axios.get(`${url}/countries`);
//   ct.data.countries.forEach((country) => {
//     countries.push(`${url}/countries/${country.name}`);
//   });
//   return countries;
// }

// export async function getCovid19InfoForCountriesOver80K() {
//   const countrieInfo = [];
//   const countries = await getCountries();
//   const arrayOfCountries = spliteArray(countries, 30);
//   for (let index = 0; index < arrayOfCountries.length; index++) {
//     const urls = arrayOfCountries[index];
//     const arrayOfData = await makeRequest(urls);
//     arrayOfData.forEach((info) => {
//       if (info.confirmed && info.confirmed.value >= 80000)
//         countrieInfo.push(info);
//     });
//   }
//   return countrieInfo;
// }

// // splite the array to list of small array
// function spliteArray(array, size) {
//   const arrays = [];
//   while (array.length > 0) {
//     let chunk = array.splice(0, size);
//     arrays.push(chunk);
//   }
//   return arrays;
// }

// async function makeRequest(array) {
//   return await Promise.all(
//     array.map((url) =>
//       axios
//         .get(url)
//         .then((response) => {
//           return response.data;
//         })
//         .catch((error) => {
//           return error.response.data;
//         })
//     )
//   );
// }

// // getCovid19InfoForCountriesOver80K().then(data => {
// //   console.log(data);
// // })
