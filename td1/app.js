/**
 * Get current weather informations with openWeather API
 * https://openweathermap.org/
 */

/**
 * Api key authentification
 */
const key = 'ca88bc756da4738f5c72e8dae6ef80d8';
const city = 'Nancy';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?';

/**
 * 
 * @param {string} urlSend url à traité
 * @param {function} success Function de traitement du succès
 * @returns none
 */
function senXhr(urlSend, success) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET',urlSend);
    xhr.responseType = 'json';
    console.log('url :  ',urlSend);
    xhr.send();
    xhr.addEventListener('load', function(response) {
        success(response.target.response);
        let loadingElements = document.getElementsByClassName('loading');
        console.log(loadingElements);
        for(let i = 0; i < loadingElements.length; i++){
            loadingElements[i].classList.remove('loading');
            loadingElements[i].classList.add('loaded');
        }
    });

    xhr.addEventListener('error', function (response) {
        console.log('Data transfert error : '+ response)
    })
}

/**
 * function de tratement des data météo
 * @param {json} data 
 * @returns none
 */
 
function afficherMeteo(data) {
    console.log('data',data);
    document.getElementById('temp').innerHTML+=data.main.temp+'°C';
    document.getElementById('hum').innerHTML+=data.main.humidity+'%';
    document.getElementById('press').innerHTML+=data.main.pressure+'hPA';
    document.getElementById('ress').innerHTML+=data.main.feels_like+'°C';
    document.getElementById('tend').innerHTML+=data.weather[0].description;

}

/**
 * Main : call to API : 
 * On attend que le dom soit chargé pour lancer l'event
 */
document.addEventListener("DOMContentLoaded", function(){
    let option = '&units=metric'+'&lang=fr';
    let weatherUrl = `${apiUrl}q=${city}&appid=${key}${option}`;

    
    senXhr(weatherUrl, afficherMeteo);

});
