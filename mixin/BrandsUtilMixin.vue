<template>
  
</template>

<script>

export default {

  methods : {

    brand(id) {
      if(this.brands == undefined) {
        return "";
      }

      let bs = this.brands.filter(brand => brand.id == id);

      if(bs.length == 0) {
        return "";
      }

      return bs[0].name;
    },

  }
}
</script>
