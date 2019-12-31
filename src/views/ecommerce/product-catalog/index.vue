<template>
  <div>
    <div class="air__utils__heading">
      <h5>Ecommerce: Product Catalog</h5>
    </div>
    <div class="row">
      <div class="col-xl-4 col-lg-6" v-for="(product, index) in products" :key="index">
        <air-general-16
          :isNew="product.isNew"
          :isFavorite="product.isFavorite"
          :image="product.image"
          :name="product.name"
          :price="product.price"
          :oldPrice="product.oldPrice"
        />
      </div>
    </div>
  </div>
</template>
<script>
import AirGeneral16 from '@/components/widgets/General/16/index'
import products from './data.json'

export default {
  components: {
    AirGeneral16,
  },
  data: function () {
    return {
      products,
    }
  },
}
</script>
