import config from './api.info';
const { apiKey } = config;

export const getArtists = (country) => {
    const apiURL = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${country}&api_key=${apiKey}&format=json`;
    return fetch(apiURL)
        .then(res => res.json())
        .then(json => json.topartists.artist);
};