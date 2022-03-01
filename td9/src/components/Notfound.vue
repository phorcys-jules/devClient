<template>
  <div>
    <h2>Page non trouvée</h2>

    <p>La page que vous avez demandée n'existe pas ou plus</p>
    <router-link to="/">Retour à la home page</router-link>

    <div class="error404">Erreur<br/>404</div>


  </div>
</template>

<script>
export default {

  data () {
    return {

    }
  }
}
</script>

<style>
.error404 {
  margin-top: 30px;
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 6em;
  color:green;
}

</style>
