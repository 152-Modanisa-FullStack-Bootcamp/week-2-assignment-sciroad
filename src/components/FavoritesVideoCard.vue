<template>
  <div class="card">
    <router-link :to="{ name: 'WatchPage', query: { id } }">
      <img
        class="videoImage"
        :src="selectedImageSource"
        @mouseover="hovered"
        @mouseout="notHovered"
        alt=""
      />
    </router-link>

    <div class="detail-container">
      <h4>{{ title }}</h4>
      <div class="numericInfo">
        <span>{{ viewCount }}</span>
        <span>{{ publishDateInMonth }} </span>
      </div>
      <div class="ownerInfo">
        <img :src="ownerImage" alt="ownerImage" />
        <span>{{ ownerName }}</span>
      </div>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FavoritesVideoCard",
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
* {
  text-align: left;
}

.card {
  display: flex;
  gap: 10px;
  background-color: lightgray;
  height:200px;
}
.detail-container {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-top: 10px;
}
.detail-container h4 {
  margin: 0;
}
.detail-container img {
  height: 24px;
  width: 24px;
  border-radius: 25px;
  overflow: hidden;
}
.videoImage {
  height: 200px;
  width: 360px;
}
.numericInfo {
  display: flex;
  gap: 10px;
  font-weight: bold;
}
.ownerInfo {
  display: flex;
  gap: 10px;
  font-weight: bold;
}
</style>
