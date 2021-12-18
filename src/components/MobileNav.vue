<template>
  <li>
    <router-link @click="closeNav()" to="/work" class="navItem"
      >Gallery</router-link
    >
  </li>
  <li>
    <router-link @click="closeNav()" to="/about" class="navItem"
      >About</router-link
    >
  </li>
  <li>
    <router-link @click="closeNav()" to="/shows" class="navItem"
      >Shows</router-link
    >
  </li>
  <li><a @click="openCard()" class="navItem">Contact</a></li>
</template>

<script>
export default {
  name: "MobileNav",
  methods: {
    openCard() {
      let menu = document.querySelector(".mobile-nav");
      let card = document.querySelector(".contact-card");
      let button = document.querySelector(".navBtn");
      if (card.style.display === "flex") {
        card.style.display = "none";
      } else {
        card.style.display = "flex";
      }
      if (menu.style.height === "200%") {
        menu.style.height = "0";
                              button.classList.remove("fa-times");
        button.classList.add("fa-bars");
      }
    },

    closeNav() {
      let menu = document.querySelector(".mobile-nav");
      let button = document.querySelector(".navBtn");
      menu.style.height = "0";
                      button.classList.remove("fa-times");
        button.classList.add("fa-bars");
    },
  },
};
</script>

<style scoped>
.navItem {
  font-size: 1.75rem;
  color: rgb(255, 255, 255);
  text-decoration: none;
  margin: 100px 0;
  cursor: pointer;
}
</style>