import useGet5DaysWeather from '../../../../hooks/useGet5DaysWeather';
import styles from '../../Home.module.css';
interface DayCardProps {
     day: {
          Date: string;
          Temperature: {
               Maximum: {
                    Value: number;
               };
          };
     };
     changeDegrees: boolean
}

export const DayCard = ({ day, changeDegrees }: DayCardProps) => {
     const { getDayOfWeek, convertToFahrenheitToCelsius } = useGet5DaysWeather();
     return (
          <div key={day.Date} className={styles.day}>
               <h2>{getDayOfWeek(day.Date)}</h2>
               <h3>{changeDegrees ? `${day?.Temperature.Maximum.Value} F°` : convertToFahrenheitToCelsius(day?.Temperature.Maximum.Value)}</h3>
          </div>
     )
}
