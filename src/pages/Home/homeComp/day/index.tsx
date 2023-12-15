import styles from '../../Home.module.css';
interface DayProps {
     day: {
          Date: string;
          Temperature: {
               Maximum: {
                    Value: number;
               };
          };
     };
     getDayOfWeek: (dateString: string) => string;
     convertToFahrenheitToCelsius: (fahrenheit: number) => string;
}

export const Day = ({ day, getDayOfWeek, convertToFahrenheitToCelsius }: DayProps) => {
     return (
          <div key={day.Date} className={styles.day}>
               <h2>{getDayOfWeek(day.Date)}</h2>
               <h3>{convertToFahrenheitToCelsius(day?.Temperature.Maximum.Value)}</h3>
          </div>
     )
}
