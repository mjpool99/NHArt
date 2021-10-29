<template>
  <div class="page">
    <div class="shows page-content">
      <div class="shows-card">
        <div class="showtimes">
          <div class="header">
            <h3>Dates</h3>
          </div>
          <div class="showdates">
            <span v-for="date in date" :key="date">{{date.date}}</span>
          </div>
        </div>
        <div class="map-div">
          <iframe
          v-for="location in location"
          :key="location"
            class="map"
            :src="location.url"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import axios from "axios";
import Footer from "../components/Footer.vue";
export default {
  name: "Shows",
  components: {
    Footer,
  },
  data() {
    return {
      date: null,
      location: null,
    };
  },
  mounted() {
    axios.get("/showDates").then((response) => (this.date = response.data));
    axios
      .get("/showLocation")
      .then((response) => (this.location = response.data));
  },
};
</script>

<style scoped>
.shows {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}
.shows-card {
  height: fit-content;
  max-width: 100%;
  width: 1200px;
  height: 600px;
  margin: 20px 30px;
  padding: 30px;
  background-color: #171717;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-auto-flow: column;
  border-radius: 10px;
}

.showdates{
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: clamp(1rem, 5vw,1.75rem);
}

.showdates span{
  margin: 0 0 20px 0;
}

.showtimes {
  color: white;
  display: grid;
  grid-template-rows: 20% 80%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #242424;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.showtimes h3{
  font-size: clamp(2rem,8vw,2.75rem);
  text-align: center;
}

.map-div {
  display: flex;
  justify-content: center;
  align-items: center;
}

.map {
  height: 100%;
  width: 100%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

@media(max-width: 900px){
  .shows{
      margin-top: 165px;
  }
  .shows-card {
  width: 800px;
  height: 400px;
}
}
@media(max-width: 700px){
  .shows-card {
  max-width: 100%;
  margin: 20px;
  height: 600px;
  grid-auto-flow: row;
  grid-template-columns: 100%;
  grid-template-rows: 50% 50%;
  grid-auto-columns: none;
}

.showtimes{
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.map{
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
}
</style>
