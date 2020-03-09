<template>
  <nav class="mx-auto" aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li :class="classPrevious()"
          @click="pagination.data.current_page > 1 ? loadPrevious() : ''" >
        <a class="page-link" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </a>
      </li>

      <li class="page-item" v-if="farFromFirstPage()">
        <a class="page-link disabled" >
          ...
        </a>
      </li>

      <li class="page-item" 
          v-if="pagination.data.current_page > 1"
          v-for="i in range(pagesPrevious(), pagination.data.current_page-1)" >
        <a class="page-link" 
            @click="loadPage(i)" >
          {{ i }}
        </a>
      </li>

      <li class="page-item active">
        <a class="page-link" >
          {{ pagination.data.current_page }}
        </a>
      </li>

      <li class="page-item"
          v-if="pagination.data.current_page < pagination.data.last_page"
          v-for="i in range(pagination.data.current_page+1, pagesNext())" >
        <a class="page-link" 
            @click="loadPage(i)" >
          {{ i }}
        </a>
      </li>

      <li class="page-item"  v-if="farFromLastPage()">
        <a class="page-link disabled" >
          ...
        </a>
      </li>
      
      <li :class="classNext()" 
          @click="pagination.data.current_page < pagination.data.last_page ? loadNext() : ''" >
        <a class="page-link" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {

  props : {
    pagination : { required: true },
  },

  methods : {
    classPrevious() {
      let _class = 'page-item';

      if( this.pagination.data.current_page == 1) {
        _class += ' disabled';
      }

      return _class;
    },

    classNext() {
      let _class = 'page-item';

      if( this.pagination.data.current_page == this.pagination.data.last_page) {
        _class += ' disabled';
      }

      return _class;
    },

    farFromFirstPage() {
      return this.pagination.data.current_page > 4;
    },

    farFromLastPage() {
      return this.pagination.data.current_page < this.pagination.data.last_page - 3;
    },

    pagesPrevious() {
      return Math.max(1, this.pagination.data.current_page - 3)
    },

    pagesNext() {
      return Math.min(this.pagination.data.current_page+3, this.pagination.data.last_page);
    },

    range(from, to) {
      let ar = [];

      for (var i = from; i <= to; i++) {
        ar.push(i)
      }

      return ar;
    },

    loadPage(page) {
      this.pagination.data.data = undefined;

      this.pagination.loadPage(page);
    },

    loadPrevious() {
      this.loadPage(this.pagination.data.current_page-1);
    },

    loadNext() {
      this.loadPage(this.pagination.data.current_page+1);
    }
    
  }
}
</script>
