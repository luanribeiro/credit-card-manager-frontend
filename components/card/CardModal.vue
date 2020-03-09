<template>
  <div id="cardModal" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content" v-if="card != undefined">
        <div class="modal-header">
          <h5 class="modal-title">{{ card.name }}</h5>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-3 text-right">
              Brand:
            </div>
            <div class="col-9" >
              {{ brand(card.brand_id) }}
            </div>
          </div>
          <div class="row">
            <div class="col-3 text-right">
              Category:
            </div>
            <div class="col-9" >
              {{ category(card.category_id) }}
            </div>
          </div>
          <div class="row">
            <div class="col-3 text-right">
              Limit:
            </div>
            <div class="col-9" >
              {{ card.limit }}
            </div>
          </div>
          <div class="row">
            <div class="col-3 text-right">
              Annual fee:
            </div>
            <div class="col-9" >
              {{ card.annual_fee }}
            </div>
          </div>
          <div class="row" v-if="isAdmin()" >
            <div class="col-3 text-right">
              Created at:
            </div>
            <div class="col-9" >
              {{ card.created_at }}
            </div>
          </div>
          <div class="row" v-if="isAdmin()" >
            <div class="col-3 text-right">
              Updated at:
            </div>
            <div class="col-9" >
              {{ card.updated_at }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserLogged from '~/mixin/UserLogged.vue'
import BrandsUtilMixin from '~/mixin/BrandsUtilMixin.vue'
import CategoriesUtilMixin from '~/mixin/CategoriesUtilMixin.vue'

export default {

  components: {
    
  },

  props : {
    card : { required: true },
    brands : { default : () => [] },
    categories : { default : () => [] },
  },

  mixins: [
    UserLogged,
    BrandsUtilMixin,
    CategoriesUtilMixin
  ],

  methods : {
    toggle() {
      $('#cardModal').modal('toggle')
    },
  },
  
}
</script>
