<template>
  <div id="loginModal" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <loginForm 
              @close="toggle()"
              @user_logged="userLogged"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '~/components/login/LoginForm.vue'

export default {

  components: {
    LoginForm
  },

  mixins: [ ],

  methods : {
    toggle() {
      $('#loginModal').modal('toggle')
    },

    userLogged(user) {
      this.toggle();

      this.$emit("user_logged", user);
    }
  },
  
}
</script>
