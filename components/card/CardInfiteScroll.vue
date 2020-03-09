<template>
  <div class="container marketing">

    <cardViewMin 
        v-if="cards != undefined"
        v-for="card in getCards()" 
        :card="card" 
        @selectedCard="showModal" />

    <cardModal 
        ref="cardModal" 
        :card="selectedCard"
        :categories="categories"
        :brands="brands"  />
  </div>
</template>

<script>
import CardViewMin from '~/components/card/CardViewMin.vue'
import CardModal from '~/components/card/CardModal.vue'
import axios from 'axios' 
import BrandsMixin from '~/mixin/BrandsMixin.vue'
import CategoriesMixin from '~/mixin/CategoriesMixin.vue'

export default {

  components: {
    CardViewMin,
    CardModal
  },

  props : {
    cards : { required: true },
  },

  mixins: [
    CategoriesMixin,
    BrandsMixin
  ],

  data() {
    return {
      selectedCard : undefined
    }
  },

  methods : {
    getCards() {
      if(this.cards == undefined) {
        return [];
      }

      return this.cards;
    },

    showModal(card) {
      this.selectedCard = card;

      this.$refs.cardModal.toggle();
    },
    
  }
}
</script>
