<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> 
      <router-link :to="{name:'FavoritesPage', params:{userid}}">Favorites</router-link>     
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data(){
      return{
          userid:"bootcamp"
      }
  }
};
</script>

<style scoped>

#nav {
box-sizing: border-box;
  padding: 30px;
  display:flex;
  gap:10px;
  width:100%;
  background-color: lightcyan;
  justify-content: flex-end;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
