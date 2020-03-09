<template>

  <div class="card" >
    <div class="card-body">
      <h5 class="card-title">{{ card.name }}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      
      <a @click="viewCard()" class="btn btn-primary text-white">View</a>
    </div>
  </div>
</template>

<script>

export default {

  components: {
  },

  props : {
    card : { required: true },
  },

  methods : {
    viewCard() {
      this.$emit('selectedCard', this.card);
    }
  }
}
</script>
