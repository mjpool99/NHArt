<template>
  <div id="footer">
    <div class="copyright"><router-link class="footer-link" to="/login">©2021 Nick Hubbard</router-link>
    <br>
    <p class="footer-link">All Rights Reserved.</p></div>
    <div class="dev">Site Developer: <a href="https://mjpool.dev">Mason Pool</a></div>
  </div>
</template>

<script>

export default {
  name: "Footer"
};
</script>

<style scoped>
#footer {
  background-color: #1b1717;
  height: 150px;
  width: 100%;
  text-align: center;
  animation: footer 2s linear; 
  padding-bottom: 20px;
}

@keyframes footer{
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}

.copyright {
  padding-top: 40px;
}

.footer-link{
  color: #ffffff;
  pointer-events: none;
  text-decoration: none;
}

.dev {
  color: #ffffff;
}

.dev a {
  color: #c50000;
  text-decoration: none;
}
</style>
