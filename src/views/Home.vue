<template>
  <div class="home">
    
    
    <HomeVideoCard
      v-for="video in videos"
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
import HomeVideoCard from "@/components/HomeVideoCard";
// @ is an alias to /src,
const axios = require("axios");
export default {
  name: 'Home',
  components: {
    HomeVideoCard
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
  }
}
</script>
<style scoped>

.home{
  display: flex;
  padding: 1rem;
  gap:10px;
  flex-wrap: wrap;
  overflow-y: auto;
  height:100%;
  align-content: flex-start;
}
</style>
