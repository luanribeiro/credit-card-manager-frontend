<template>
  <div>
    <navbar />

    <div style="margin-top: 8rem;" >
      <cardInfiteScroll 
          :cards="cards" />  

      <loading :loading="loading" />
    </div>
    
  </div>
</template>

<script>
import Navbar from '~/components/template/Navbar.vue'
import CardInfiteScroll from '~/components/card/CardInfiteScroll.vue'
import UserLogged from '~/mixin/UserLogged.vue'
import Loading from '~/components/template/Loading.vue'

export default {
  mixins: [
    UserLogged
  ],

  components: {
    Navbar,
    CardInfiteScroll,
    Loading
  },

  data() {
    return {
      cards : undefined,
      loading : false,
      page : 1,
      totalPages : undefined,
    }
  },

  created() {
    this.loadPage(this.page);

    this.initInfinteScroll();
  },

  methods : {
    initInfinteScroll() {
      window.onscroll = () => {
        if(this.loading) {
          return;
        }

        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight >= document.documentElement.offsetHeight;
        
        if (bottomOfWindow && (this.totalPages == undefined || this.page < this.totalPages) ){
          this.loadPage(this.page+1);
        }
      };
    },

    async loadPage(page) {
      this.loading = true;

      let cards = await this.$axios.get('/api/v1/cards', {
        params: { page : page}
      }); 
      
      if(this.cards == undefined) {
        this.cards = [];
      }
      this.cards = this.cards.concat( cards.data.data );
      this.page = cards.data.current_page;
      this.totalPages = cards.data.last_page;

      this.loading = false;
    },
  }
}
</script>
