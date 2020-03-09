<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand">
          Credit Card Manager
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <nuxt-link tag="a" to="/" 
                type="button" 
                class="nav-link">
              Home
              <span class="sr-only">(current)</span>
            </nuxt-link>
          </li>
          <li class="nav-item"
              v-if="isAdmin()">
            <nuxt-link tag="a" to="/admin" 
                type="button" 
                class="nav-link">
              Admin
            </nuxt-link>
          </li>
        </ul>


        <form class="form-inline mt-2 mt-md-0" v-if="userLogged == null">
          <button type="button" class="btn btn-secondary"
              @click="toggleLoginModal()">
            Login {{userLogged}}
          </button>
        </form>
        <div class="dropdown" v-if="userLogged != null">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{ userLogged.name }}
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" @click="logout()">
              Logout
            </a>
          </div>
        </div>

      </div>
    </nav>

    <loginModal ref="modal" 
        @user_logged="userLoggedEvent" />
  </div>
</template>

<script>
import UserLogged from '~/mixin/UserLogged.vue'
import LoginModal from '~/components/login/LoginModal.vue'

export default {
  components: {
    LoginModal
  },

  mixins: [
    UserLogged
  ],

  methods : {
    toggleLoginModal() {
      this.$refs.modal.toggle();
    },

    userLoggedEvent(user) {
      if(user.role.localeCompare('ADMIN') == 0) {
        this.$router.push('/admin');
        return;
      }
    },

    logout() {
      this.cleanSession();
      this.$router.push('/');
    }
  },
}
</script>
