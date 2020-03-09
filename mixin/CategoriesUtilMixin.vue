<template>
  
</template>

<script>

export default {

  methods : {

    category(id) {
      if(this.categories == undefined) {
        return "";
      }

      let cs = this.categories.filter(category => category.id == id);

      if(cs.length == 0) {
        return "";
      }

      return cs[0].name;
    },

  }
}
</script>
