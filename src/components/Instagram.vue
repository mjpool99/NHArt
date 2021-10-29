<template>
  <button @click="authorize()" class="adminButton">Reauthorize Instagram</button>
</template>
<script>
import axios from "axios"
export default {
    name: "Instagram",
    methods: {
      authorize() {
        axios.get(`https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${process.env.VUE_APP_ACCESS_TOKEN}`).then(result => {
          console.log(result)
          if(result.status === 200){
            alert("Your Instagram token has been refreshed! See you in 60 days!")
          }
        })
      }
    }
}
</script>