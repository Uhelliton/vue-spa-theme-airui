<template>
  <div>
    <div class="air__utils__heading">
      <h5>Dashboard Crypto</h5>
    </div>
    <div class="row">
      <div class="col-xl-8 col-lg-12">
        <div class="card">
          <a-tabs defaultActiveKey="2" class="air-tabs-bordered">
            <a-tab-pane tab="Hour" key="1" />
            <a-tab-pane tab="Day" key="2" />
            <a-tab-pane tab="Week" key="3" />
            <a-tab-pane tab="Month" key="4" />
          </a-tabs>
          <div class="card-body">
            <vue-chartist class="height-300" type="Line" :data="data" :options="options"></vue-chartist>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <air-general-7 />
              </div>
            </div>
            <div class="card">
              <air-chart-6 />
            </div>
            <div class="card">
              <div class="card-body">
                <air-general-5 />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <air-List-3 />
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <air-general-12 />
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <air-chart-5 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-12">
        <div class="card">
          <div class="card-header">
            <h5 class="text-dark mb-0">Cryptocurrencies</h5>
          </div>
          <div class="card-body">
            <air-List-6 />
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <air-List-15 />
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <air-chart-1 />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import data from './data.json'
import AirChart1 from '@/components/widgets/Charts/1/index'
import AirChart5 from '@/components/widgets/Charts/5/index'
import AirChart6 from '@/components/widgets/Charts/6/index'
import AirGeneral5 from '@/components/widgets/General/5/index'
import AirGeneral7 from '@/components/widgets/General/7/index'
import AirGeneral12 from '@/components/widgets/General/12/index'
import AirList3 from '@/components/widgets/Lists/3/index'
import AirList6 from '@/components/widgets/Lists/6/index'
import AirList15 from '@/components/widgets/Lists/15/index'
import VueChartist from 'v-chartist'
import ChartistTooltip from 'chartist-plugin-tooltips-updated'

export default {
  components: {
    AirChart1,
    AirChart5,
    AirChart6,
    AirGeneral5,
    AirGeneral7,
    AirGeneral12,
    AirList3,
    AirList6,
    AirList15,
    'vue-chartist': VueChartist,
  },
  data: function () {
    return {
      data,
      options: {
        fullWidth: !0,
        chartPadding: {
          right: 15,
          left: -15,
        },
        low: 0,
        showArea: true,
        plugins: [ChartistTooltip({ anchorToPoint: false, appendToBody: true, seriesName: false })],
      },
    }
  },
}
</script>
