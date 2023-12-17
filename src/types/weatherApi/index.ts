export interface WeatherApi {
     name: string;
     locationKey: string;
     weatherService: (loactionKey: string) => Promise<any>;
   }