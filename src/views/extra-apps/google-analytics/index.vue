<template>
  <div>
    <div class="air__utils__heading">
      <h5>Google Analytics</h5>
    </div>
    <div class="row">
      <div class="col-xl-8 col-lg-12">
        <h5 class="text-dark mb-4">Google Analytics Home</h5>
        <div class="card">
          <air-chart-2 />
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <air-chart-9 />
              </div>
            </div>
            <h5 class="text-dark mb-4">How do you acquire users?</h5>
            <div class="card">
              <div class="card-body">
                <air-chart-5 />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <air-chart-10 />
              </div>
            </div>
            <h5 class="text-dark mb-4">How are your active users trending over time?</h5>
            <div class="card">
              <div class="card-body">
                <air-chart-1 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-12">
        <h5 class="text-dark mb-4">Ask analytics Intelligence</h5>
        <div class="card">
          <div class="card-body">
            <air-list-15 />
          </div>
        </div>
        <h5 class="text-dark mb-4">What are your top devices?</h5>
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
import AirChart1 from '@/components/widgets/Charts/1/index'
import AirChart2 from '@/components/widgets/Charts/2/index'
import AirChart5 from '@/components/widgets/Charts/5/index'
import AirChart9 from '@/components/widgets/Charts/9/index'
import AirChart10 from '@/components/widgets/Charts/10/index'
import AirList12 from '@/components/widgets/Lists/12/index'
import AirList15 from '@/components/widgets/Lists/15/index'

export default {
  components: {
    AirChart1,
    AirChart2,
    AirChart5,
    AirChart9,
    AirChart10,
    AirList12,
    AirList15,
  },
}
</script>
