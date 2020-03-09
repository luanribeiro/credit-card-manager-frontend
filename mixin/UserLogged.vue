<template>
  
</template>

<script>
import vueCookies from 'vue-cookies' 

export default {
  
  components: { 

  },

  props : [
    
  ],

  middleware: "login-middleware" ,

  data() {
    return {
      
    }
  },

  computed: { 
    userLogged() { 
      return this.$store.state.userLogged;
    },
  },


  methods : {
    setUserLogged(user){
      vueCookies.set(
        "userLogged",
        user,
        -1
      );

      localStorage.setItem('userLogged', JSON.stringify(user));

      this.$store.dispatch('setUserlogged', user);
    },

    cleanSession() {
      vueCookies.remove('userLogged');
      localStorage.removeItem('userLogged');
      
      this.$store.dispatch('setUserlogged', null);
    },

    isAdmin() {
      if(this.userLogged == null) {
        return false;
      }
      return this.userLogged.role.localeCompare('ADMIN') == 0;
    },

  }
}
</script>
