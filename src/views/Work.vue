<template>
  <div class="page">
    <div class="work page-content">
      <div class="work-slideshow">
        <div class="instafeed">
          <div v-for="img in img" :key="img" class="span animate__animated animate__fadeIn">
            <a :href="img.media_url">
              <img class="instafeed-img" :src="img.media_url"
            /></a>
          </div>
        </div>
      </div>
    </div>
    <div class="back-to-top">
      <h3>
        More work available to view on my
        <a href="https://www.instagram.com/arthubart/">Instagram</a>! All work
        is available in a print!
      </h3>
      <div class="scrollTop">
        <a @click="scrollToTop">Back to top</a>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import axios from "axios";
import Footer from "../components/Footer.vue";
export default {
  name: "Work",
  components: {
    Footer,
  },
  data() {
    return {
      img: null,
    };
  },
  mounted() {
    const url = `https://graph.instagram.com/me/media?fields=id,media_url&access_token=${process.env.VUE_APP_ACCESS_TOKEN}`;
    axios.get(url).then((response) => (this.img = response.data.data));
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.instafeed {
  max-width: 100%;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.work-slideshow {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.instafeed-img {
  object-fit: cover;
  margin: 3px;
  padding: 3px;
  background-color: #1b1717;
  height: 225px;
  width: 225px;
}

.back-to-top {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: clamp(1rem, 5vw, 2rem);
  color: #000;
  margin: 20px 0;
  text-align: center;
  max-width: 100%;
  margin: 0 20px;
}

.back-to-top a {
  color: #000;
  transition: color 0.2s;
  cursor: pointer;
}
.back-to-top a:hover {
  color: #810000;
}

@keyframes instaImg {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.span:nth-of-type(1){
  animation-delay: .1s;
}
.span:nth-of-type(2){
  animation-delay: .2s;
}
.span:nth-of-type(3){
  animation-delay: .3s;
}
.span:nth-of-type(4){
  animation-delay: .4s;
}
.span:nth-of-type(5){
  animation-delay: .5s;
}
.span:nth-of-type(6){
  animation-delay: .6s;
}
.span:nth-of-type(7){
  animation-delay: .7s;
}
.span:nth-of-type(8){
  animation-delay: .8s;
}
.span:nth-of-type(9){
  animation-delay: .9s;
}
.span:nth-of-type(10){
  animation-delay: 1s;
}
.span:nth-of-type(11){
  animation-delay: 1.1s;
}
.span:nth-of-type(12){
  animation-delay: 1.2s;
}
.span:nth-of-type(13){
  animation-delay: 1.3s;
}
.span:nth-of-type(14){
  animation-delay: 1.4s;
}
.span:nth-of-type(15){
  animation-delay: 1.5s;
}
.span:nth-of-type(16){
  animation-delay: 1.6s;
}
.span:nth-of-type(17){
  animation-delay: 1.7s;
}
.span:nth-of-type(18){
  animation-delay: 1.8s;
}
.span:nth-of-type(19){
  animation-delay: 1.9s;
}
.span:nth-of-type(20){
  animation-delay: 2s;
}
.span:nth-of-type(21){
  animation-delay: 2.1s;
}
.span:nth-of-type(22){
  animation-delay: 2.2s;
}
.span:nth-of-type(23){
  animation-delay: 2.3s;
}
.span:nth-of-type(24){
  animation-delay: 2.4s;
}
.span:nth-of-type(25){
  animation-delay: 2.5s;
}

@media (max-width: 900px) {
  .work {
    margin-top: 165px;
  }

  .instafeed-img {
    height: 30vw;
    width: 30vw;
  }
  .instafeed {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>
