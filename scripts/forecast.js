'use strict';

class Forecast{
    constructor(){
    this.key =  'PmzHF7tfGrupHaticKjl44qnAN7lhiNH';
    this.weatherURL = 'https://dataservice.accuweather.com/currentconditions/v1/';
    this.cityURL = 'https://dataservice.accuweather.com/locations/v1/cities/search';

    }
    async updateCity(city){

        const cityDetails = await this.getCity(city);
        const weather = await this.getWeather(cityDetails.Key);

        return{cityDetails, weather};
    }
    
    async getCity(city){
            const query = `?apikey=${this.key}&q=${city}`;
            const response = await fetch(this.cityURL + query);
            const data = await response.json();
            return data[0];
        
    }

    async getWeather(id){
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURL + query);
        const data = await response.json();
        return data[0];
    }
}





