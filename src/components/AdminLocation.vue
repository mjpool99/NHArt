<template>
  <form @submit.prevent="updateLocation()">
    <div class="form">
      <div class="line1">
              <input type="text" id="name" placeholder="Name" />
      </div>
      <div class="line2">
          <input type="text" id="city" placeholder="City" />
      <select id="state" size="1">
        <option value="AK">AK</option>
        <option value="AL">AL</option>
        <option value="AR">AR</option>
        <option value="AZ">AZ</option>
        <option value="CA">CA</option>
        <option value="CO">CO</option>
        <option value="CT">CT</option>
        <option value="DC">DC</option>
        <option value="DE">DE</option>
        <option value="FL">FL</option>
        <option value="GA">GA</option>
        <option value="HI">HI</option>
        <option value="IA">IA</option>
        <option value="ID">ID</option>
        <option value="IL">IL</option>
        <option value="IN">IN</option>
        <option value="KS">KS</option>
        <option value="KY">KY</option>
        <option value="LA">LA</option>
        <option value="MA">MA</option>
        <option value="MD">MD</option>
        <option value="ME">ME</option>
        <option value="MI">MI</option>
        <option value="MN">MN</option>
        <option value="MO">MO</option>
        <option value="MS">MS</option>
        <option value="MT">MT</option>
        <option value="NC">NC</option>
        <option value="ND">ND</option>
        <option value="NE">NE</option>
        <option value="NH">NH</option>
        <option value="NJ">NJ</option>
        <option value="NM">NM</option>
        <option value="NV">NV</option>
        <option value="NY">NY</option>
        <option value="OH">OH</option>
        <option value="OK">OK</option>
        <option value="OR">OR</option>
        <option value="PA">PA</option>
        <option value="RI">RI</option>
        <option value="SC">SC</option>
        <option value="SD">SD</option>
        <option value="TN">TN</option>
        <option value="TX">TX</option>
        <option value="UT">UT</option>
        <option value="VA">VA</option>
        <option value="VT">VT</option>
        <option value="WA">WA</option>
        <option value="WI">WI</option>
        <option value="WV">WV</option>
        <option value="WY">WY</option>
      </select>
      </div>
    </div>
    <div class="saveChanges">
      <button type="submit" class="adminButton">Save Changes</button>
    </div>
  </form>
</template>
<script>
export default {
  name: "AdminLocation",
  methods: {
      updateLocation() {
        let name = document.getElementById("name");
      let city = document.getElementById("city");
      let state = document.getElementById("state");
      fetch("/adminLocation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: name.value,
          City: city.value,
          State: state.value
        })
      }).then(
            name.value = "",
            city.value = "",
            state.value = "AK"
        );
        
    }
  }
};
</script>

<style scoped>
.line1{
  max-width: 100%;
  margin: 0 20px 20px;
}

.line2{
  display: grid;
  grid-template-columns: 75% 25%;
  max-width: 100%;
  margin: 0 20px;
}


input, select{
  font-size: 1.25rem;
  width: 100%;
  background-color: rgb(70, 68, 67);
  border: 1px solid;
  color: rgb(255, 255, 255);
}
</style>