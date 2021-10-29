<template>
  <div class="page">
    <div class="admin-body page-content">
      <h1>
        This page is meant for the owner of this site. If you find yourself
        here, please go back to the main content!
      </h1>
      <div class="form-card">
        <h3>Login</h3>
        <form @submit="login">
          <input type="text" placeholder="Username" name="username" required />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <button class="adminButton">Log in</button>
        </form>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import router from "../router";
import axios from "axios";
export default {
  name: "AdminLogin",
  components: {
    Footer,
  },
  methods: {
    login: (e) => {
      e.preventDefault();
      let username = e.target.username;
      let password = e.target.password;
      console.log(e);

      let login = () => {
        let data = {
          username: username.value,
          password: password.value,
        };
        axios
          .post("/login", data)
          .then((response) => {
            console.log(response);
            router.push("/admin");
            (username.value = ""), (password.value = "");
          })
          .catch((errors) => {
            console.log(errors);
            alert("Username or Password is incorrect.");
          });
      };
      login();
    },
  },
};
</script>

<style scoped>
.admin-body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 100px;
}

h1 {
  font-size: 2rem;
  width: 60%;
  text-align: center;
  margin: 0 0 50px 0;
}

h3 {
  color: #fff;
  font-size: 2rem;
  text-align: center;
}

.form-card {
  height: 400px;
  background-color: #1b1717;
  border-radius: 25px;
  border: 1px solid white;
  width: 600px;
  padding: 30px;
  display: grid;
  grid-template-rows: 20% 80%;
  justify-content: center;
  align-items: center;
}

form {
  display: grid;
  grid-template-rows: 15% 20% 33%;
  width: 300px;
  justify-content: center;
  align-items: center;
  margin: 80px 0 0 0;
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
</style>