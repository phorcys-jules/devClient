/**
 * L'objectif ici est de récupèrer et manipuler des users github
 */


/**
 * Api key authentification
 */
const key = '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';
const apiUrl = 'https://api.github.com/users';

let loadingElements = document.getElementsByClassName('loading');


/**
 * 
 * @param {string} urlSend url à traité
 * @param {function} success Function de traitement du succès
 * @returns none
 */
function senXhr(urlSend, success) {
    //send to the user we're loadind data
    for (let i = 0; i < loadingElements.length; i++) {
        loadingElements[i].classList.add('loading');
        loadingElements[i].classList.remove('loaded');
    }
    let xhr = new XMLHttpRequest();
    xhr.open('GET', urlSend);
    xhr.responseType = 'json';
    console.log('url :  ', urlSend);
    xhr.send();
    xhr.addEventListener('load', function (response) {
        success(response.target.response);
        //send to the user load data
        //console.log(loadingElements);
        for (let i = 0; i < loadingElements.length; i++) {
            loadingElements[i].classList.add('loaded');
            loadingElements[i].classList.remove('loading');
        }
    });

    xhr.addEventListener('error', function (response) {
        console.log('Data transfert error : ' + response)
    })
}

/**
 * function de tratement de la liste des users
 * @param {json} data 
 * @returns none
 */
function afficherUsers(data) {
    console.log('data', data);
    data.forEach(user => {
        let userElement = document.createElement('div');
        userElement.innerHTML += `
            <h2>Login : ${user.login}</h2>
            <li>UUID : ${user.node_id}</li>
            <img src="${user.avatar_url}">
        `;
        userElement.addEventListener('click', function (e) {
            console.log('click on ',user.login);
            let repoUrl = apiUrl+'/'+user.login+'/repos'        
            document.getElementById('lUser').innerHTML='';
            document.getElementById('lUser').appendChild(userElement);
            senXhr(repoUrl, afficherRepoUser);
        })
        document.getElementById('lUser').appendChild(userElement);
    });
}

function afficherRepoUser(data) {
    console.log('data', data);

    let repoList = document.createElement('ul');
    repoList.setAttribute('id','lRepo');
    data.forEach(repository => {
        let repo = document.createElement('li');
        repo.innerHTML += `
        ${repository.name}
        `;
            
        repoList.appendChild(repo);
    });
    document.getElementById('content').appendChild(repoList);

}

/**
 * Main : call to API : 
 * On attend que le dom soit chargé pour lancer l'event
 */
document.addEventListener("DOMContentLoaded", function () {
    //let option = '&units=metric'+'&lang=fr';
    //let githubUrl = `${apiUrl}q=${city}&appid=${key}${option}`;


    senXhr(apiUrl, afficherUsers);

});
