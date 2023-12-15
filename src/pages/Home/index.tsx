import { useState } from 'react';
import { CurrentWeatherDetails, DaysFeed, DeleteSearch, FavoritesButton, Search } from './homeComp';
import { Layout } from '../../common';
import useGetCurrentWeather from '../../hooks/useGetCurrentWeather';
import useGet5DaysWeather from '../../hooks/useGet5DaysWeather';
import styles from "./Home.module.css";
import { FaTimes } from 'react-icons/fa';

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
          <Search setSelectedOption={setSelectedOption} selectedOption={selectedOption} />
        </div>

        {(weather && fiveDaysWeather) && (
          <div className={styles.contentBox}>
            <div className={styles.boxHeader}>
              <div className={styles.currentDetailsAndX} >
                <DeleteSearch setSelectedOption={setSelectedOption} />
                <CurrentWeatherDetails cityName={selectedOption?.LocalizedName} tempC={tempC} />
              </div>
              <FavoritesButton />
            </div>

            <DaysFeed days={fiveDaysWeather?.DailyForecasts} getDayOfWeek={getDayOfWeek} convertToFahrenheitToCelsius={convertToFahrenheitToCelsius} />
          </div>
        )}

      </div>
    </Layout>
  );
}

export default Home;
