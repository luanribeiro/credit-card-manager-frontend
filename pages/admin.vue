<template>
  <div>
    <navbar />

    <div style="margin-top: 8rem;" class="container">
      <cardList :pagination="pagination"/>

      <loading :loading="pagination.data.data == undefined" />
    </div>
    
  </div>
</template>

<script>
import Navbar from '~/components/template/Navbar.vue'
import CardList from '~/components/card/CardList.vue'
import UserLogged from '~/mixin/UserLogged.vue'
import Loading from '~/components/template/Loading.vue'
import { PaginationService } from '~/services/PaginationService.js'

export default {
  middleware: ['login-middleware', 'admin'],

  mixins: [
    UserLogged,
  ],

  components: {
    Navbar,
    CardList,
    Loading
  },

  data() {
    return {
      pagination : new PaginationService(this.$axios, '/api/v1/cards'),
    }
  },

  created() {
    this.pagination.addParam("size", 10);
    
    this.loadPage(1);
  },

  methods : {

    async loadPage(page) {
      this.loading = true;

      let cards = await this.pagination.loadPage(page);

      this.loading = false;
    },
  }
}
</script>
