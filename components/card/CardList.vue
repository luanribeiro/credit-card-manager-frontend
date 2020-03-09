<template>
  <div>
    <div>
      <div class="input-group">
        <input type="text" class="form-control" 
            placeholder="Search card" aria-label="Input group example"
            v-model="searchName" 
            @change="changeInputSearch()">
        <div class="input-group-prepend">
          <button class="input-group-text" id="btnGroupAddonButton"
              @click="search()">
            Search
          </button>
        </div>
        <div class="input-group-prepend">
          <button class="input-group-text" id="btnGroupAddonAddCard"
              @click="showCreateModal()">
            Add card
          </button>
        </div>
      </div>
    </div>

    <table class="table" v-if="true" >
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Brand</th>
          <th scope="col">Category</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="card in pagination.data.data">
          <td>{{ card.name }}</td>
          <td>{{ brand(card.brand_id) }}</td>
          <td>{{ category(card.category_id) }}</td>
          <td>
            <button type="button" class="btn btn-secondary"
                @click="showViewModal(card)">
              View
            </button>
            <button type="button" class="btn btn-secondary"
                @click="showEditModal(card)">
              Edit
            </button>
            <button type="button" class="btn btn-danger"
                @click="remove(card)">
              Remove
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <pages :pagination="pagination" />

    <cardFormModal 
        ref="cardFormModal" 
        :card="cardSelected"
        :categories="categories"
        :brands="brands" 
        @card-updated="cardUpdated"
        @card-created="cardCreated" />

    <cardModal 
        ref="cardModal" 
        :card="cardSelected"
        :categories="categories"
        :brands="brands"  />
  </div>
</template>

<script>
import Pages from '~/components/template/Pages.vue'
import CardFormModal from '~/components/card/CardFormModal.vue'
import CardModal from '~/components/card/CardModal.vue'
import BrandsMixin from '~/mixin/BrandsMixin.vue'
import CategoriesMixin from '~/mixin/CategoriesMixin.vue'

export default {

  components: {
    Pages,
    CardFormModal,
    CardModal,
  },

  mixins: [
    CategoriesMixin,
    BrandsMixin
  ],

  props : {
    pagination : { required: true },
    cardSelected : undefined,
  },

  data() {
    return {
      searchName : '',
    }
  },

  created() {
  },

  methods : {

    changeInputSearch() {
      this.pagination.addParam('name', this.searchName);
    },

    cardUpdated(card) {
      this.search();
    },

    cardCreated(card) {
      this.search();
    },

    search() {
      this.pagination.loadPage(this.pagination.data.current_page);
    },

    showViewModal(card) {
      this.cardSelected = JSON.parse(JSON.stringify(card));

      this.$refs.cardModal.toggle();
    },

    showEditModal(card) {
      this.cardSelected = JSON.parse(JSON.stringify(card));

      this.$refs.cardFormModal.toggle();
    },

    showCreateModal() {
      this.cardSelected = {
        id : 0
      };

      this.$refs.cardFormModal.toggle();
    },

    remove(card) {
      let self = this;

      if(confirm("Are you sure?")) {
        this.$axios.delete('/api/v1/cards/' + card.id)
          .then(function (response) {
            self.pagination.loadPage(self.pagination.data.current_page);
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    
  }
}
</script>
