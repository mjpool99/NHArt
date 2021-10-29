<template>
  <div class="contact-card">
    <div class="card">
      <a @click="closeCard()" class="x">&times;</a>
      <div class="card-content">
        <h2>Interested in my work?</h2>
      <div class="bottom-card">
        <div v-for="data in data" :key="data" class="contact-info">
          <h3>For services and commission</h3>
          <p>Call: {{data.Phone}}</p>
          <p>Email: {{data.Email}}</p>
        </div>
        <div class="social">
          <h3>Follow me!</h3>
          <a href="https://www.instagram.com/arthubart/"
            ><i class="fa fa-instagram social" aria-hidden="true"></i
          ></a>
      </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "ContactCard",
  methods: {
    closeCard() {
      let x = document.querySelector(".contact-card");
      if (x.style.display === "flex") {
        x.style.display = "none";
      }
    },
  },
  data() {
    return {
      data: null,
    };
  },
  mounted() {
     axios.get('/contact').then(response => (this.data = response.data))
  },
};
</script>

<style scoped>
@media(min-width: 800px){
.contact-card {
  height: 100%;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  z-index: 5;
  display: none;
}

.card-content{
  margin: 20px;
}

.card {
  height: fit-content;
  max-width: 100%;
  width: 700px;
  margin: 0 70px;
  background-color: #333333;
  vertical-align: middle;
  text-align: center;
  border: 2px solid white;
  border-radius: 10px;
  position: relative;
}

.bottom-card {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-auto-flow: column;
  margin: 10px auto;
  padding-bottom: 30px;
}

.card h2,
h3,
p {
  color: #fff;
}

h2 {
  margin-top: 30px;
}

.card h3 {
  font-size: clamp(1.25rem, 2vw, 1.75rem);
}

i.social {
  color: #810000;
  font-size: 4rem;
}

.x {
  color: #fff;
  font-size: 2rem;
  position: absolute;
  right: 10px;
  cursor: pointer;
}

.x:hover {
  color: #810000;
}
}

@media(max-width: 800px){
.contact-card {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 5;
  display: none;
}

.card-content{
  margin: 20px;
}

.card {
  height: fit-content;
  width: 80%;
  margin: auto;
  background-color: #333333;
  vertical-align: middle;
  text-align: center;
  border: 2px solid white;
  border-radius: 10px;
  position: relative;
}

.bottom-card {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-auto-flow: column;
  margin: 10px auto;
}

.card h2,
h3,
p {
  color: #fff;
}

h2 {
  margin-top: 30px;
}

.card h3 {
  font-size: clamp(1.25rem, 2vw, 1.75rem);
}

i.social {
  color: #810000;
  font-size: 4rem;
}

.x {
  color: #fff;
  font-size: 2rem;
  position: absolute;
  right: 10px;
  cursor: pointer;
}

.x:hover {
  color: #810000;
}
}
</style>
