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
     getDayOfWeek: (dateString: string) => string;
     convertToFahrenheitToCelsius: (fahrenheit: number) => string;
}

export const DayCard = ({ day, getDayOfWeek, convertToFahrenheitToCelsius }: DayCardProps) => {
     return (
          <div key={day.Date} className={styles.day}>
               <h2>{getDayOfWeek(day.Date)}</h2>
               <h3>{convertToFahrenheitToCelsius(day?.Temperature.Maximum.Value)}</h3>
          </div>
     )
}
