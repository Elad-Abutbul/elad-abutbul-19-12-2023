import { TEMPERATURE } from '../../../../constants';
import { weatherService } from '../../../../services';
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
     const { getDayOfWeek, convertToFahrenheitToCelsius } = weatherService
     return (
          <div key={day.Date} className={styles.day}>
               <h2>{getDayOfWeek(day.Date)}</h2>
               <h3>{changeDegrees ? `${day?.Temperature.Maximum.Value} ${TEMPERATURE.F}` : `${convertToFahrenheitToCelsius(day?.Temperature.Maximum.Value)} ${TEMPERATURE.C}`}</h3>
          </div>
     )
}
