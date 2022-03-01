<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <p>Quel user ID ?
      <input type="number" v-model="checkID" class="idbox">
    </p>

    <ul>
      <li><router-link to="/">Home page</router-link></li>
      <li><router-link to="/tasks">Task list</router-link></li>
      <li><router-link v-bind:to="'/user/'+checkID">Infos User</router-link></li>
      <li><router-link to="/carte">Carte OpenStreetMap</router-link></li>
    </ul>

    <router-view></router-view>

    <div><i>Footer</i></div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Utilisation du router',
      checkID: 0
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.idbox {
  width: 50px;
  font-size: 1em;
}
</style>
