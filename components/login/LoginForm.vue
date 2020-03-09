<template>
  <form class="form-signin" v-on:submit.prevent="login()">
    <div class="form-group">
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" 
          class="form-control" placeholder="Email address" required="" autofocus=""
          v-model="user.email" >
    </div>
    
    <div class="form-group">
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword"
          class="form-control" placeholder="Password" required=""
          v-model="user.password" >
    </div>

    <div class="float-right">
      <button type="button" class="btn btn-secondary"
          @click="$emit('close')">
        Close
      </button>
      <button type="submit" class="btn btn-primary" >
        Login
      </button>
    </div>
  </form>
</template>

<script>
import UserLogged from '~/mixin/UserLogged.vue'

export default {

  components: {
  },

  mixins: [ UserLogged ],

  props : {
  },

  computed: { 
  },

  created() {
    
  },

  data() {
    return {
      user : {
        email : '',
        password : ''
      }
    }
  },

  methods : {
    login() {
      let self = this;
      this.loadingLogin = true;

      this.$axios.post('/api/login', this.user)
        .then(function (response) {
          let token = response.data.token;

          self.$axios.get('/api/v1/user', {
              headers: {
                'Authorization': `Bearer ${token}`
              }
            })
            .then(function (response) {
              let user = response.data.user;
              user.token = token;
              
              self.setUserLogged(user); 
          
              self.$emit("user_logged", user);
            })
            .catch(error => {
              console.log(error);
            });
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
  
}
</script>
