import axios from 'axios';

const url = 'https://corona-api.com/';
var countryCodes = {};
var customCoordinates = { //custom coordinates for the coordinates that the API does not provide
    'RU': { //russia
        latitude: '61.5240',
        longitude: '105.3188'
    },
    'AQ': { //antarctica
        latitude: '82.8628',
        longitude: '135.0000'
    },
    'TW': { //taiwan
        latitude: '23.6978',
        longitude: '120.9605'
    },
    'AO': { //angola
        latitude: '11.2027',
        longitude: '17.8739'
    },
    'AI': { //anguilla
        latitude: '18.2206',
        longitude: '63.0686'
    }
};

export const fetchCountries = async () => {
    try {
        return await axios.get(`${url}/countries`).then((response)=>{
            const {data: { data: countries } }  = response;
            return countries;
        }).catch(error => {

        });
    }
    catch(error) {

    }
}

export const fetchCountryData = async (country) => {
    try {
        if(country !== 'Global'){
            return await axios.get(`${url}/countries/${countryCodes[country.toLowerCase()]}`).then((response)=>{
                const {data: { data: { latest_data } } } = response;
                return latest_data;
            }).catch(error => {
    
            });
        }
    }
    catch(error) {

    }
}

export const fetchGlobalData = async () => {
    try{
        return await axios.get(`${url}/timeline`).then((response)=>{
            const {data: { data: latest_data } } = response;
            return latest_data[0];
        }).catch(error => {

        });
    }
    catch(error){

    }
}

export const fetchCoordinates = async () => {
    try {
        return await axios.get(`${url}/countries`).then((response)=>{
            const {data: { data: countries } } = response;
            let coordinateArray = [];
            
            countries.map(countryObj => {
                //set all country codes
                countryCodes[countryObj.name.toLowerCase()] = countryObj.code;
                coordinateArray.push({
                    lat: customCoordinates[countryObj.code] ? customCoordinates[countryObj.code].latitude : countryObj.coordinates.latitude,
                    long: customCoordinates[countryObj.code] ? customCoordinates[countryObj.code].longitude : countryObj.coordinates.longitude,
                    cases: countryObj.latest_data.confirmed,
                    country: countryObj.name
                });
            });
            return (coordinateArray);
        }).catch(error => {

        });
    }
    catch(error) {

    }
}