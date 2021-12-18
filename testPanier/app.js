'use strict';

(function () {
  let produits = [
    {
      "id": 1,
      "nom": "Boîtier de pédalier TANGE",
      "photo": "https://tools.sopress.net/iut/panier/images/tange-bottom-bracket-68-103.jpg",
      "description": "Super léger, le top du boîtier",
      "prix": 45.56
    },
    {
      "id": 2,
      "nom": "Pédalier SHIMANO",
      "photo": "https://tools.sopress.net/iut/panier/images/shimanopedalierxtfcm785noir.jpg",
      "description": "46 dents",
      "prix": 75.45
    },
    {
      "id": 3,
      "nom": "Tige de selle BLB TRACK",
      "photo": "https://tools.sopress.net/iut/panier/images/tige-de-selle-blb-track-os.jpg",
      "description": "avec intégration de LED lumineuses",
      "prix": 110.99
    }

  ];

  function renderProduit(produits) {
    let produitsElement = document.getElementById('products');
    produits.forEach(e => {
      let article = document.createElement("div");
      article.setAttribute("class", "product");
      console.log(produits);
      article.setAttribute("id", `product ${e.id}`);


      article.innerHTML = `
        <img class="card-img-top" src="${e.photo}" alt="${e.nom}">
        <div class="card-body">
            <h2 class="card-title">${e.nom}</h2>
        
            <p class="card-text">${e.description}</p>
        </div>
        <div class="card-bottom">
            <div class="btn-group">
                <button id="addToCart" type="button" class="btn primary">Ajouter au panier</button>
            </div>
        </div>`
      produitsElement.appendChild(article);

    });
  }



  let panier = (function () {
    return {
      modules: {}
    }
  })();

  panier.modules.actions = (function () {
    return {

    }
  })();

  panier.modules.app = (function () {
    return {
      start() {
        renderProduit(produits);
      }
    }
  })();

  window.addEventListener("load", panier.modules.app.start)
})();