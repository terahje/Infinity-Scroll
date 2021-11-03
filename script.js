// import UNSPLASH_API_KEY from './apiKey.js';

// Upsplash API
const count = 10;
const apiKey = 'YOUR_API_KEY';

const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos(){
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // Catch error here
    }
}

// On Load
getPhotos();