import { TEMPERATURE } from "../../../../constants";
import { weatherService } from "../../../../services";

interface CurrentWeatherDetailsProps {
     cityName: string;
     temperature: number;
     changeDegrees: boolean;
}

export const CurrentWeatherDetails = ({ cityName, temperature, changeDegrees }: CurrentWeatherDetailsProps) => (
     <div>
          <h3>{cityName}</h3>
          <h3>
               {changeDegrees ? `${temperature} ${TEMPERATURE.F}` : `${weatherService.convertToFahrenheitToCelsius(temperature)} ${TEMPERATURE.C}`}
          </h3>
     </div>
);
