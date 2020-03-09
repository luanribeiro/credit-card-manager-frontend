<template>
  
</template>

<script>
import BrandsUtilMixin from '~/mixin/BrandsUtilMixin.vue'

export default {
  
  mixins: [
    BrandsUtilMixin,
  ],

  created() {
    this.initBrands();
  },

  data() {
    return {
      brands : [ ],
    }
  },

  methods : {

    async initBrands() {
      let brands = await this.$axios.get('/api/v1/brands');

      this.brands = brands.data;
    },

  }
}
</script>
