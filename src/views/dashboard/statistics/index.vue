<template>
  <div>
    <div class="air__utils__heading">
      <h5>Dashboard Statistics</h5>
    </div>
    <div class="row">
      <div class="col-xl-4 col-lg-12">
        <div class="card">
          <div class="card-body">
            <air-general-2 />
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <air-chart-9 />
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <air-chart-10 />
          </div>
        </div>
        <div class="card">
          <div class="card-body bg-gray-2">
            <air-general-12v3 />
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-12">
        <div class="card">
          <div class="card-body">
            <air-general-2v1 />
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <air-general-1 />
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <air-list-18 />
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <air-list-11 />
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-12">
        <div class="card">
          <div class="card-body">
            <air-general-2v2 />
          </div>
        </div>
        <div class="card">
          <air-general-13v1 />
        </div>
        <div class="card">
          <air-chart-6 />
        </div>
      </div>
      <div class="col-xl-12">
        <div class="card">
          <div class="card-body">
            <air-table-7 />
          </div>
        </div>
      </div>
      <div class="col-lg-12 col-xl-6">
        <div class="card">
          <div class="card-body">
            <air-table-5 />
          </div>
        </div>
      </div>
      <div class="col-lg-12 col-xl-6">
        <div class="card">
          <div class="card-body">
            <air-table-4 />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AirGeneral1 from '@/components/widgets/General/1/index'
import AirGeneral2 from '@/components/widgets/General/2/index'
import AirGeneral2v1 from '@/components/widgets/General/2v1/index'
import AirGeneral2v2 from '@/components/widgets/General/2v2/index'
import AirGeneral12v3 from '@/components/widgets/General/12v3/index'
import AirGeneral13v1 from '@/components/widgets/General/13v1/index'
import AirChart9 from '@/components/widgets/Charts/9/index'
import AirChart6 from '@/components/widgets/Charts/6/index'
import AirChart10 from '@/components/widgets/Charts/10/index'
import AirList11 from '@/components/widgets/Lists/11/index'
import AirList18 from '@/components/widgets/Lists/18/index'
import AirTable4 from '@/components/widgets/Tables/4/index'
import AirTable5 from '@/components/widgets/Tables/5/index'
import AirTable7 from '@/components/widgets/Tables/7/index'

export default {
  components: {
    AirGeneral1,
    AirGeneral2,
    AirGeneral2v1,
    AirGeneral2v2,
    AirGeneral12v3,
    AirGeneral13v1,
    AirChart9,
    AirChart6,
    AirChart10,
    AirList11,
    AirList18,
    AirTable4,
    AirTable5,
    AirTable7,
  },
}
</script>
