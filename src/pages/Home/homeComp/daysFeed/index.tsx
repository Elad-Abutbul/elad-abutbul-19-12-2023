import { DayCard } from "../DayCard";
import styles from '../../Home.module.css';

interface DaysProps {
     days: Array<{
          Date: string;
          Temperature: {
               Maximum: {
                    Value: number;
               };
          };
     }>;
     getDayOfWeek: (dateString: string) => string;
     convertToFahrenheitToCelsius: (fahrenheit: number) => string;
}

export const DaysFeed = ({ days, getDayOfWeek, convertToFahrenheitToCelsius }: DaysProps) => {
     return (
          <div className={styles.daysContainer}>
               {days?.map((day) => (
                    <DayCard day={day} key={day.Date} getDayOfWeek={getDayOfWeek} convertToFahrenheitToCelsius={convertToFahrenheitToCelsius} />
               ))}
          </div>
     );
};
