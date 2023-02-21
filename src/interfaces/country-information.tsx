export interface CountryInformation {
    flags: HTMLImageElement;
    name: string;
    nativeName: string;
    population: number;
    region: string;
    subregion: string;
    capital: string;
    topLevelDomain: Array<string> | string;
    currencies: Array<any>;
    languages: any;
    latlng: Array<number>;

}