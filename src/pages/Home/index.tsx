import { useEffect, useState } from 'react';
import { CurrentWeatherDetails, DaysFeed, DeleteSearch, FavoritesButton, Search } from './homeComp';
import useWeather from '../../hooks/useWeather';
import { Layout } from '../../common';
import { weatherService } from '../../services';
import { useLocation } from 'react-router';
import styles from "./Home.module.css";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState({ Key: "", LocalizedName: "" });
  const [changeDegrees, setChangeDegrees] = useState(false);
  const { data: weather } = useWeather(selectedOption.Key, weatherService.getCurrentWeather)
  const { data: fiveDaysWeather } = useWeather(selectedOption.Key, weatherService.get5DaysWeather)

  const tempF = weather && `${weather[0].Temperature.Imperial.Value} F°`;
  const tempC = weather && `${weather[0].Temperature.Metric.Value} C°`;

  const { state } = useLocation()

  useEffect(() => {
    if (state !== null) {
      setSelectedOption(state)
    }
  }, [])

  const favoriteObject = {
    Key: selectedOption?.Key,
    LocalizedName: selectedOption?.LocalizedName,
    weather: { temperature: { tempC, tempF } },
    weatherText: weather && weather[0].WeatherText
  }

  return (
    <Layout>
      <div className={styles.container}>
        <Search setSelectedOption={setSelectedOption} selectedOption={selectedOption} />
        <div>
        </div>
        {(weather && fiveDaysWeather) && (
          <div className={styles.contentBox}>
            <div className={styles.boxHeader}>
              <div className={styles.currentDetailsAndX} >
                <DeleteSearch setSelectedOption={setSelectedOption} />
                <CurrentWeatherDetails cityName={selectedOption?.LocalizedName} tempC={tempC} tempF={tempF} changeDegrees={changeDegrees} />
              </div>
              <button onClick={() => setChangeDegrees(!changeDegrees)}>change degrees</button>
              <FavoritesButton favoriteObject={favoriteObject} />
            </div>
            <DaysFeed days={fiveDaysWeather?.DailyForecasts} changeDegrees={changeDegrees} />
          </div>
        )}

      </div>
    </Layout >
  );
}

export default Home;
