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
     changeDegrees: boolean
}

export const DaysFeed = ({ days, changeDegrees }: DaysProps) => {
     return (
          <div className={styles.daysContainer}>
               {days?.map((day) => (
                    <DayCard day={day} key={day.Date} changeDegrees={changeDegrees} />
               ))}
          </div>
     );
};
