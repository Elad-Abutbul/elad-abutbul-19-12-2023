import { useState } from 'react';
import { Search } from './homeComp'
import { Layout } from '../../common'
import useGetCurrentWeather from '../../hooks/useGetCurrentWeather';
import styles from "./Home.module.css";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState({});
  const { weather } = useGetCurrentWeather(selectedOption);

  const tempF = weather && `${weather[0].Temperature.Imperial.Value} C°`
  const tempC = weather && `${weather[0].Temperature.Metric.Value} F°`

  return (
    <Layout>
      <div className={styles.container}>

        <div>
          <Search setSelectedOption={setSelectedOption} />
        </div>

        <div>
          <div>
            <div>
              <h3>{selectedOption?.LocalizedName}</h3>
              <h3>{tempC}</h3>
            </div>
            <div></div>
          </div>

          <div>
          </div>

          <div>
          </div>

        </div>

      </div>
    </Layout>
  )
}

export default Home