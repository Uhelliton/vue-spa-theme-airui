<template>
  <div>
    <div class="air__utils__heading">
      <h5>Charts Widgets</h5>
    </div>
    <div class="mb-5">
      <div class="row">
        <div class="col-xl-4 col-lg-12">
          <div class="card">
            <div class="card-body">
              <air-chart-1 />
            </div>
          </div>
          <div class="card">
            <air-chart-2 />
          </div>
        </div>
        <div class="col-xl-4 col-lg-12">
          <div class="card">
            <div class="card-body">
              <air-chart-9 />
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <air-chart-5 />
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-12">
          <div class="card">
            <div class="card-body">
              <air-chart-10 />
            </div>
          </div>
          <div class="card">
            <air-chart-6 />
          </div>
        </div>
        <div class="col-xl-6 col-lg-12">
          <div class="card">
            <div class="card-body">
              <air-chart-3 />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="card">
                <div class="card-body">
                  <air-chart-4 />
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="card">
                <div class="card-body">
                  <air-chart-4v1 />
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="card">
                <div class="card-body">
                  <air-chart-4v2 />
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="card">
                <div class="card-body">
                  <air-chart-4v3 />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-12">
          <div class="card">
            <div class="card-body">
              <air-chart-7 />
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <air-chart-8 />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AirChart1 from '@/components/widgets/Charts/1/index'
import AirChart2 from '@/components/widgets/Charts/2/index'
import AirChart3 from '@/components/widgets/Charts/3/index'
import AirChart4 from '@/components/widgets/Charts/4/index'
import AirChart4v1 from '@/components/widgets/Charts/4v1/index'
import AirChart4v2 from '@/components/widgets/Charts/4v2/index'
import AirChart4v3 from '@/components/widgets/Charts/4v3/index'
import AirChart5 from '@/components/widgets/Charts/5/index'
import AirChart6 from '@/components/widgets/Charts/6/index'
import AirChart7 from '@/components/widgets/Charts/7/index'
import AirChart8 from '@/components/widgets/Charts/8/index'
import AirChart9 from '@/components/widgets/Charts/9/index'
import AirChart10 from '@/components/widgets/Charts/10/index'

export default {
  components: {
    AirChart1,
    AirChart2,
    AirChart3,
    AirChart4,
    AirChart4v1,
    AirChart4v2,
    AirChart4v3,
    AirChart5,
    AirChart6,
    AirChart7,
    AirChart8,
    AirChart9,
    AirChart10,
  },
}
</script>
