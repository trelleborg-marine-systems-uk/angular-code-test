
// Model that gets returned by the OpenWeather API
export class City {
    public id: number;
    public name: string;
    public coord: Coordinate;
    public weather: WeatherStatus;
    public main: TemperatureInfo;
}

export class Coordinate {
    public lon: number;
    public lat: number;
}

export class WeatherStatus {
    public main: string;
    public description: string;
}

export class TemperatureInfo {
    public temp: number;
    public pressure: number;
    public humidity: number;
    public tempMin: number;
    public tempMax: number;
}
