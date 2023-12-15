import { useState } from 'react';
import { DaysFeed, Search } from './homeComp';
import { Layout } from '../../common';
import useGetCurrentWeather from '../../hooks/useGetCurrentWeather';
import useGet5DaysWeather from '../../hooks/useGet5DaysWeather';
import styles from "./Home.module.css";
import { FaHeart } from 'react-icons/fa';

const Home = () => {
  const [selectedOption, setSelectedOption] = useState({});
  const { weather } = useGetCurrentWeather(selectedOption);
  const { fiveDaysWeather, getDayOfWeek, convertToFahrenheitToCelsius } = useGet5DaysWeather(selectedOption);
  const tempC = weather && `${weather[0].Temperature.Imperial.Value} C°`;
  const tempF = weather && `${weather[0].Temperature.Metric.Value} F°`;

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.search}>
          <Search setSelectedOption={setSelectedOption} />
        </div>
        <div className={styles.contentBox}>
          <div className={styles.boxHeader}>
            <div>
              <h3>{selectedOption?.LocalizedName}</h3>
              <h3>{tempC}</h3>
            </div>
            <button>
              <FaHeart color={'black'} /> Favorites
            </button>
          </div>
          <div>
            <DaysFeed days={fiveDaysWeather?.DailyForecasts} getDayOfWeek={getDayOfWeek} convertToFahrenheitToCelsius={convertToFahrenheitToCelsius} />
          </div>
        </div>

      </div>
    </Layout>
  );
}

export default Home;
