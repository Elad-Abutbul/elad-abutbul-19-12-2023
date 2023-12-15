import { useEffect, useState } from 'react';
import { Search } from './homeComp'
import { Layout } from '../../common'
import useGetCurrentWeather from '../../hooks/useGetCurrentWeather';
import styles from "./Home.module.css";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState();
  const { currentWeather, getCurrentWeather } = useGetCurrentWeather();
  useEffect(() => {
    const getWeather = async () => {
      if (selectedOption !== null) {
        getCurrentWeather(selectedOption.Key)
      }
    }
    getWeather()
  }, [selectedOption])

  return (
    <Layout>
      <div className={styles.container}>
        <div>
          <Search setSelectedOption={setSelectedOption} />
        </div>
        <div>
          {currentWeather.length !== 0 &&
            <>
              <div>
                <h2>{selectedOption?.LocalizedName}</h2>
                <h3>{currentWeather[0]?.Temperature?.Metric.Value} °C</h3>
              </div>
              <h1>{currentWeather[0]?.WeatherText}</h1>
            </>
          }
          <div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home