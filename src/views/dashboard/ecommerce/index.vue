<template>
  <div>
    <div class="air__utils__heading">
      <h5>Dashboard Ecommerce</h5>
    </div>
    <div class="row">
      <div class="col-xl-8 col-lg-12">
        <div class="card">
          <a-tabs defaultActiveKey="2" class="air-tabs-bordered">
            <a-tab-pane tab="Orders" key="1" />
            <a-tab-pane tab="Revenue" key="2" />
          </a-tabs>
          <div class="card-body">
            <air-chart-3 />
          </div>
        </div>
        <div class="card">
          <a-tabs defaultActiveKey="1" class="air-tabs-bordered">
            <a-tab-pane tab="Bestsellers" key="1" />
            <a-tab-pane tab="Most Viewed" key="2" />
            <a-tab-pane tab="Highest Rated" key="3" />
          </a-tabs>
          <div class="card-body">
            <div class="row">
              <div class="col-lg-6" v-for="(product, index) in products" :key="index">
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
        </div>
      </div>
      <div class="col-xl-4 col-lg-12">
        <div class="card text-white bg-success">
          <div class="card-body">
            <air-general-2v3 />
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <air-general-2 />
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <air-general-2v1 />
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <air-general-2v2 />
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <air-list-11 />
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <air-list-12 />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AirChart3 from '@/components/widgets/Charts/3/index'
import AirGeneral2 from '@/components/widgets/General/2/index'
import AirGeneral2v1 from '@/components/widgets/General/2v1/index'
import AirGeneral2v2 from '@/components/widgets/General/2v2/index'
import AirGeneral2v3 from '@/components/widgets/General/2v3/index'
import AirGeneral16 from '@/components/widgets/General/16/index'
import AirList11 from '@/components/widgets/Lists/11/index'
import AirList12 from '@/components/widgets/Lists/12/index'
import products from './data.json'

export default {
  components: {
    AirChart3,
    AirGeneral2,
    AirGeneral2v1,
    AirGeneral2v2,
    AirGeneral2v3,
    AirGeneral16,
    AirList11,
    AirList12,
  },
  data: function () {
    return {
      products,
    }
  },
}
</script>
