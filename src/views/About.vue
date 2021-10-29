<template>
  <div class="page">
    <div class="about">
      <div class="about-content">
        <img src="ProfilePhoto.jpg" alt="" />
        <p>
          Nick Hubbard is an aspiring artist living in the Atlanta area. Nick
          started at a young age with acrylic animal portraits and has improved his
          skills over time. He enjoys working with different mediums, including
          all kinds of paint, pen and pencil drawings as well as working with
          materials such as wood and metal. He also enjoys working with color
          and also working with patterns in the abstract.
        </p>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from "../components/Footer.vue";
export default {
  name: "About",
  components: {
    Footer,
  },
};
</script>

<style scoped>
@media (min-width: 800px) {
  .about {
    display: flex;
    justify-content: center;
    margin: 100px 0;
    width: 100%;
  }

  .about img {
    max-width: 200px;
    max-height: 200px;
    border-radius: 100%;
    position: absolute;
    right: -100px;
    top: -100px;
    box-shadow: 10px 10px 10px rgb(17, 17, 17);
  }

  .about-content {
    width: 800px;
    max-width: 70%;
    position: relative;
    overflow-x: visible;
  }

  .about-content p {
    font-size: clamp(1.25rem, 3vw, 2rem);
    font-family: Shadows Into Light Two;
    font-weight: 500;
    padding: 50px;
    border: 3px solid #810000;
    box-shadow: 10px 10px 10px rgba(17, 17, 17);
    border-radius: 5px;
  }
}
@media (max-width: 800px) {
  .about-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    top: 50px;
    position: relative;
    margin: 100px 0;
  }

  .about img {
    max-width: 50%;
    width: 300px;
    border-radius: 100%;
    box-shadow: 10px 10px 10px rgb(17, 17, 17);
  }

  .about p {
    font-size: clamp(1.25rem, 4vw, 1.75rem);
    color: #000;
    padding: 10px;
    border: 3px solid #810000;
    box-shadow: 10px 10px 10px rgba(17, 17, 17);
    border-radius: 5px;
    max-width: 80%;
  }
}
</style>
