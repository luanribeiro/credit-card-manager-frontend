<template>
  
</template>

<script>
import CategoriesUtilMixin from '~/mixin/CategoriesUtilMixin.vue'

export default {
  
  mixins: [
    CategoriesUtilMixin,
  ],

  created() {
    this.initCategories();
  },

  data() {
    return {
      categories : [ ],
    }
  },

  methods : {

    async initCategories() {
      let categories = await this.$axios.get('/api/v1/categories');

      this.categories = categories.data;
    },

  }
}
</script>
