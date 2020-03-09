<template>
  <div >
    <alerts ref="alerts" />

    <form v-on:submit.prevent="submit()" >
      <fieldset v-if="card != undefined">
        <legend>
          {{ card.id != undefined && card.id > 0 ? "Update card" : "Create card" }}
        </legend>

        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input type="text" class="form-control" 
              id="exampleInputEmail1" placeholder="Name"
              v-model="card.name" >
        </div>
        <div class="form-group">
          <label for="exampleInputSlug">Slug</label>
          <input type="text" class="form-control" 
              id="exampleInputSlug" placeholder="Slug"
              v-model="card.slug" >
        </div>
        <div class="form-group">
          <label for="exampleInputImage">Image</label>
          <input type="text" class="form-control" 
              id="exampleInputImage" placeholder="Image"
              v-model="card.image" >
        </div>
        <div class="form-group">
          <label for="selectBrand">Brand</label>
          <select class="form-control" id="selectBrand" v-model="card.brand_id" >
            <option v-for="category in categories" :value="category.id">{{ category.name }}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="selectCategory">Category</label>
          <select class="form-control" id="selectCategory" v-model="card.category_id">
            <option v-for="brand in brands" :value="brand.id">{{ brand.name }}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleInputLimit">Limit</label>
          <input type="text" class="form-control" 
              id="exampleInputLimit" placeholder="Limit"
              v-model="card.limit">
        </div>
        <div class="form-group">
          <label for="exampleInputAnnualFee">Annual Fee</label>
          <input type="text" class="form-control" 
              id="exampleInputAnnualFee" placeholder="Annual Fee"
              v-model="card.annual_fee">
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </fieldset>
    </form>

  </div>
</template>

<script>
import Alerts from '~/components/template/Alerts.vue'

export default {

  components: {
    Alerts
  },

  props : {
    card : { required: true },
    brands : { default : () => [] },
    categories : { default : () => [] },
  },

  data() {
    return {
      loading : false,
    }
  },

  methods : {
    submit() {
      if( this.card.id == 0 ) {
        this.addCard();
        return;
      }
      this.updateCard();
    },

    addCard() {
      let self = this;
      this.loading = true;
      self.$refs.alerts.clear();

      this.$axios.post('/api/v1/cards', this.card)
        .then(function (response) {
          self.$emit('card-created', response.data);
          self.loading = true;
        })
        .catch(error => {
          self.$refs.alerts.addMessagesError(error.response.data.message);
        });
    },

    updateCard() {
      let self = this;
      this.loading = true;
      self.$refs.alerts.clear();

      this.$axios.put('/api/v1/cards/' + this.card.id, this.card)
        .then(function (response) {
          self.$emit('card-updated', response.data);
          self.loading = true;
        })
        .catch(error => {
          self.$refs.alerts.addMessagesError(error.response.data.message);
        });
    }
    
  }
}
</script>
