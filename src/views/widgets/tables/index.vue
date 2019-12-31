<template>
  <div>
    <div class="air__utils__heading">
      <h5>Tables Widgets</h5>
    </div>
    <div class="mb-5">
      <div class="row">
        <div class="col-xl-6 col-lg-12">
          <div class="card">
            <div class="card-body">
              <air-table-1 />
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <air-table-2 />
            </div>
          </div>
          <div class="card">
            <air-table-3 />
          </div>
        </div>
        <div class="col-xl-6 col-lg-12">
          <div class="card">
            <div class="card-body">
              <air-table-4 />
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <air-table-5 />
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <air-table-6 />
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <air-table-7 />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AirTable1 from '@/components/widgets/Tables/1/index'
import AirTable2 from '@/components/widgets/Tables/2/index'
import AirTable3 from '@/components/widgets/Tables/3/index'
import AirTable4 from '@/components/widgets/Tables/4/index'
import AirTable5 from '@/components/widgets/Tables/5/index'
import AirTable6 from '@/components/widgets/Tables/6/index'
import AirTable7 from '@/components/widgets/Tables/7/index'

export default {
  components: {
    AirTable1,
    AirTable2,
    AirTable3,
    AirTable4,
    AirTable5,
    AirTable6,
    AirTable7,
  },
}
</script>
