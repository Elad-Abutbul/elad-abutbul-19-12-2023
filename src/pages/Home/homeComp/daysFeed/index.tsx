import { Day } from "../day";
import styles from '../../Home.module.css'

interface DaysProps {
     days: Array<object>;
     getDayOfWeek: (dateString: string) => string;
     convertToFahrenheitToCelsius: (fahrenheit: number) => string;
}

export const DaysFeed = ({ days, getDayOfWeek, convertToFahrenheitToCelsius }: DaysProps) => {
     return (
          <div className={styles.daysContainer}>
               {days?.map((day: object) => (
                    <Day day={day} key={day.Date} getDayOfWeek={getDayOfWeek} convertToFahrenheitToCelsius={convertToFahrenheitToCelsius} />
               ))}
          </div>
     );
};

