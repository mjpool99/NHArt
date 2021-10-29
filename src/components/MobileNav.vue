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
      let list = document.querySelector(".list-links");
      let card = document.querySelector(".contact-card");
      if (card.style.display === "flex") {
        card.style.display = "none";
      } else {
        card.style.display = "flex";
      }
      if (list.style.display === "grid") {
        menu.style.height = "0";
        list.style.display = "none";
      }
    },

    closeNav() {
      let menu = document.querySelector(".mobile-nav");
      let list = document.querySelector(".list-links");
      menu.style.height = "0";
      list.style.display = "none";
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