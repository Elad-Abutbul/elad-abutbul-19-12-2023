import { useEffect, useState } from 'react';
import { CurrentWeatherDetails, DeleteSearch, FavoritesButton } from './homeComp';
import { Layout } from '../../common';
import useGetCurrentWeather from '../../hooks/useGetCurrentWeather';
import useGet5DaysWeather from '../../hooks/useGet5DaysWeather';
import { useLocation } from 'react-router';
import styles from "./Home.module.css";
import { Search } from './homeComp/Search';
import { DaysFeed } from './homeComp/DaysFeed';


const Home = () => {
  const [selectedOption, setSelectedOption] = useState({ Key: "", LocalizedName: "" });
  const [changeDegrees, setChangeDegrees] = useState(false);
  const { weather } = useGetCurrentWeather(selectedOption);
  const { fiveDaysWeather } = useGet5DaysWeather(selectedOption);
  
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
