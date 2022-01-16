<template>
  <div class="favorites">
    
    
    <FavoritesVideoCard
      v-for="video in favoriteVideos"
      :key="video.id"
      :id="video.id"
      :coverImage="video.coverImage"
      :hoverImage="video.hoverImage"
      :ownerImage="video.ownerImage"
      :title="video.title"
      :description="video.description"
      :ownerName="video.ownerName"
      :publishDateInMonth="video.publishDateInMonth"
      :viewCount="video.viewCount"

    />
  </div>
</template>

<script>
import FavoritesVideoCard from "@/components/FavoritesVideoCard";
// @ is an alias to /src,
const axios = require("axios");
export default {
  name: 'FavoritesPage',
  components: {
    FavoritesVideoCard
  },
  data(){
    return{
      videos:[],
    }
  },
  async mounted(){
    const response =await axios.get('https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos')
    this.videos=response.data;
    console.log(this.videos);
  },
  computed:{
    favoriteVideos(){
      return this.videos.filter((video)=>video.favorite)
    }
  }
}
</script>
<style scoped>

.favorites{
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap:10px;
  overflow-y: auto;
  height:100%;
  padding: 20px 200px;
}
</style>
