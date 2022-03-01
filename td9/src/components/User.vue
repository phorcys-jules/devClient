<template>
  <div>
    <h2>Page d'info du user</h2>
    <p>Cette page se trouve dans User.Vue</p>

    <h3>l'ID du user est : {{$route.params.user_id}}</h3>

    <div v-if="id<userList.length">

      <p>nom : {{userList[id].name}}</p>
      <p>métier : {{userList[id].job}}</p>
      <p>num tél : {{userList[id].phone}}</p>

    </div>

    <div v-else>
        <p>Il n'y a pas d'utilisateur correspondant à l'ID : {{id}}</p>
    </div>

  </div>
</template>

<script>
export default {

  data () {
    return {
      userList: [
          {name:'Joe', job:'boulanger', phone:'67576645'},
          {name:'Steve', job:'mécano', phone:'8768756765'},
          {name:'Guthrie', job:'ébéniste', phone:'67867798'},
          {name:'Gary', job:'photographe', phone:'76565465'}
        ]
    }
  },

  computed: {
    // on recrée en clair les parametres de la route
    id() { return this.$route.params.user_id }
  }
}
</script>

<style>

</style>
