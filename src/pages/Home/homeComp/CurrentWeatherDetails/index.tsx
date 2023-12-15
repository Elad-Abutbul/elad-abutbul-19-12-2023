interface CurrentWeatherDetailsProps {
     cityName: string;
     tempC: string;
}

export const CurrentWeatherDetails = ({ cityName, tempC }: CurrentWeatherDetailsProps) => (
     <div>
          <h3>{cityName}</h3>
          <h3>{tempC}</h3>
     </div>
);
