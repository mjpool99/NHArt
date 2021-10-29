<template>
  <div class="content">
    <transition name="fade" mode="out-in">
    <Navbar v-if="this.$route.path !== '/'" />
    </transition>
    <ContactCard v-if="this.$route.path !== '/'" />
      <router-view v-slot="{ Component, route }">
        <transition
          :enter-active-class="route.meta.enterClass"
          :leave-active-class="route.meta.leaveClass"
        >
          <component :is="Component"></component>
        </transition>
      </router-view>
    </div>
</template>
<script>
import ContactCard from "./components/ContactCard.vue";
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
    ContactCard,
  },
};
</script>
<style>
::-webkit-scrollbar{
  display: none;
}

h1, h2, h3, p, a{
  font-family: Shadows Into Light Two;
}

body {
  margin: 0;
  background-color: #a19981;
  overflow-x: hidden;
}

.content {
  height: 100%;
}

.page{
  position: absolute;
  width: 100%;
}

.page-content {
  margin: 20px 0;  
  width: 100%;
}
</style>
