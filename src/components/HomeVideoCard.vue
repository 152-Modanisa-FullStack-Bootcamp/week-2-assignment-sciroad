<template>
  <div class="card">
    <router-link :to="{name:'WatchPage', query:{id}}">
      <img
        class="videoImage"
        :src="selectedImageSource"
        @mouseover="hovered"
        @mouseout="notHovered"
        alt=""
      />
    </router-link>

    <div class="detail-container">
      <img :src="ownerImage" alt="ownerImage" />
      <div class="detail">
        <h4>{{ title }}</h4>
        <span>{{ ownerName }}</span>
        <div class="numericInfo">
          <span>{{ viewCount }}</span>
          <span>{{ publishDateInMonth }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeVideoCard",
  props: [
    "coverImage",
    "hoverImage",
    "ownerImage",
    "title",
    "ownerName",
    "publishDateInMonth",
    "viewCount",
    "description",
    "id",
  ],
  data() {
    return {
      selectedImageSource: this.coverImage,
    };
  },
  methods: {
    hovered() {
      this.selectedImageSource = this.hoverImage;
    },
    notHovered() {
      this.selectedImageSource = this.coverImage;
    },
  },
};
</script>

<style scoped>
/*Default Text Align center olarak seçiliydi */
*{
    text-align: left;
}

.card {
  height: fit-content;
  width: 360px;
}
.detail-container {
  display: flex;
  margin-top: 10px;
  gap: 5px;
  
}
.detail-container img {
  height: 36px;
  width: 36px;
  border-radius: 25px;
  overflow: hidden;
}
.videoImage {
  height: 200px;
  width: 360px;
}
.detail {
  display: flex;
  flex-direction: column;
}
.detail h4 {
  margin: 0;
}
.numericInfo {
  display: flex;
  gap: 10px;
  font-weight: bold;
}
</style>
