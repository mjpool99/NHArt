<template>
  <div class="container">
    <form class="phone" @submit.prevent="updatePhone()">
      <div class="idk-now">
        <input
          type="tel"
          id="phone1"
          pattern="[0-9]{3}"
          maxlength="3"
          size="2"
          placeholder="###"
        />
        
        <input
          type="tel"
          id="phone2"
          pattern="[0-9]{3}"
          maxlength="3"
          size="2"
          placeholder="###"
        />
        
        <input
          type="tel"
          id="phone3"
          pattern="[0-9]{4}"
          maxlength="4"
          size="3"
          placeholder="####"
        />
      </div>
      <div class="btn">
        <button type="submit" class="adminButton">Save</button>
      </div>
    </form>
    <form class="email" @submit.prevent="updateEmail()">
      <div class="idk-now">
              <input type="email" id="email" placeholder="Example@example.com" />
      </div>
        <div class="btn">
                <button type="submit" class="adminButton">Save</button>
        </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "AdminContact",
  methods: {
    updatePhone() {
      let phone1 = document.getElementById("phone1");
      let phone2 = document.getElementById("phone2");
      let phone3 = document.getElementById("phone3");
      fetch("/adminContactPhone", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          phone1: phone1.value,
          phone2: phone2.value,
          phone3: phone3.value,
        }),
      }).then(
        phone1.value = "",
        phone2.value = "",
        phone3.value = ""
      );
    },
    updateEmail() {
      let email = document.getElementById("email");
      fetch("/adminContactEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: email.value,
        }),
      }).then(
        email.value = ""
      );
    },
  },
};
</script>
<style scoped>
input {
  margin: 20px 0;
  font-size: 1.25rem;
}

.idk-now{
  width: 100%;
}
</style>