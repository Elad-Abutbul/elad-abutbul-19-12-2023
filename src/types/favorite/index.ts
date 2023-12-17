export interface Favorite {
  Key: string;
  LocalizedName: string;
  weather: {
    temperature: {
      tempC: string;
      tempF: string;
    };
  };
  weatherText: string;
}
