<template>
  <div class="page">
    <div class="page-content">
      <div class="logout">
        <a class="adminButton" @click="logout()">Logout</a>
      </div>
      <div class="admin-grid-layout">
        <div class="admin-card">
          <div class="dates admin-card-divs">
            <h1>Show Dates</h1>
            <AdminDates />
          </div>
          <div class="location admin-card-divs">
            <h1>Show Location</h1>
            <AdminLocation />
          </div>
          <div class="contactInfo admin-card-divs">
            <h1>Contact Information</h1>
            <AdminContact />
          </div>
          <div class="instagram-reauth admin-card-divs">
            <h1>Instagram Feed</h1>
            <Instagram />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import AdminDates from "../components/AdminDates.vue";
import AdminLocation from "../components/AdminLocation.vue";
import AdminContact from "../components/AdminContact.vue";
import Instagram from "../components/Instagram.vue";
import router from "../router";
import axios from "axios";
import Footer from "../components/Footer.vue";
export default {
  name: "Admin",
  components: {
    Footer,
    AdminDates,
    AdminLocation,
    AdminContact,
    Instagram,
  },
  methods: {
    authorize() {
      axios
        .get(
          "https://api.instagram.com/oauth/authorize?client_id=280102003932878&redirect_uri=nhart.co/admin&scope=user_profile,user_media&response_type=code"
        )
        .then(
          fetch("/instagramAuth", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          })
        );
    },

    logout() {
      axios.get("/logout").then(() => {
        router.push("/login");
      });
    },
  },
};
</script>

<style>
.admin-content {
  height: 100vh;
}
h1 {
  padding-top: 50px;
  text-align: center;
  color: #ffffff;
}
form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
}

.form {
  margin-top: 20px;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.saveChanges {
  margin-top: 50px;
  height: 25%;
}
.admin-card {
  display: grid;
  height: 70vh;
  grid-template-columns: 25% 25% 25% 25%;
  max-width: 100%;
  margin: 20px;
  justify-content: center;
  align-items: center;
}

.dates,
.location,
.contactInfo {
  text-align: center;
}

.admin-card-divs {
  height: 400px;
  display: grid;
  grid-template-rows: 15% 85%;
  justify-content: center;
  align-items: center;
  background-color: rgb(37, 36, 36);
  border-radius: 20px;
  padding: 10px;
  margin: 0 30px;
  border: 2px solid #fff;
}

.adminButton {
  border: 1px solid #810000;
  border-radius: 10px;
  padding: 10px;
  font-size: 1.25rem;
  color: white;
  transition: 0.3s;
  background-color: transparent;
}
.adminButton:hover {
  border: 1px solid #ffffff;
  border-radius: 10px;
  font-size: 1.5rem;
  background-color: #810000;
  cursor: pointer;
}

input {
  font-size: 1.15em;
  background-color: rgb(70, 68, 67);
  border: 1px solid;
  color: rgb(255, 255, 255);
}
.logout {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
}
</style>