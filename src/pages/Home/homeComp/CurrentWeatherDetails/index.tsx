interface CurrentWeatherDetailsProps {
     cityName: string;
     tempC: string;
     tempF: string
     changeDegrees: boolean

}

export const CurrentWeatherDetails = ({ cityName, tempC, tempF, changeDegrees }: CurrentWeatherDetailsProps) => (
     <div>
          <h3>{cityName}</h3>
          <h3>{changeDegrees ? tempF : tempC}</h3>
     </div>
);
