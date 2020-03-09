<template>
  <div id="cardFormModal" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content" v-if="card != undefined">
        <div class="modal-body">
          <cardForm :card="card" 
              :categories="categories"
              :brands="brands"
              @card-updated="cardUpdated"
              @card-created="cardCreated" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardForm from '~/components/card/CardForm.vue'

export default {

  components: {
    CardForm
  },

  props : {
    card : { required: true },
    brands : { default : () => [] },
    categories : { default : () => [] },
  },

  mixins: [ ],

  methods : {
    toggle() {
      $('#cardFormModal').modal('toggle')
    },

    cardUpdated(card) {
      this.toggle();
      
      this.$emit('card-updated', card);
    },

    cardCreated(card) {
      this.toggle();
      
      this.$emit('card-created', card);
    },
  },
  
}
</script>
