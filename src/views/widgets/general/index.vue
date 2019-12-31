<template>
  <div>
    <div class="air__utils__heading">
      <h5>General Widgets</h5>
    </div>
    <div class="mb-5">
      <div class="row">
        <div class="col-xl-4 col-lg-12">
          <div class="card">
            <div class="card-body">
              <div class="d-flex flex-wrap mb-2">
                <div class="text-dark font-size-18 font-weight-bold mr-auto">Support Chat</div>
                <button type="button" class="btn btn-link p-0 border-0">
                  <i class="fe fe-x-square font-size-21 align-middle text-gray-6" />
                </button>
              </div>
              <air-general-14 />
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <air-general-12 />
            </div>
          </div>
          <div class="card text-white bg-primary">
            <air-general-12v1 />
          </div>
          <div class="card">
            <div class="card-body">
              <air-general-12v2 />
            </div>
          </div>
          <div class="card">
            <div class="card-body bg-gray-2">
              <air-general-12v3 />
            </div>
          </div>
          <div class="card">
            <air-general-13 />
          </div>
          <div class="card">
            <air-general-13v1 />
          </div>
        </div>
        <div class="col-xl-4 col-lg-12">
          <div class="card">
            <div class="card-body">
              <air-general-1 />
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <air-general-1v1 />
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <air-general-9 />
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <air-general-10 />
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <air-general-10v1 />
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <air-general-5v1 />
            </div>
          </div>
          <div class="card">
            <air-general-11 />
          </div>
          <div class="card">
            <air-general-11v1 />
          </div>
        </div>
        <div class="col-xl-4 col-lg-12">
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
          <div class="card text-white bg-success">
            <div class="card-body">
              <air-general-2v3 />
            </div>
          </div>
          <div class="card text-white bg-danger">
            <div class="card-body">
              <air-general-2v4 />
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <air-general-3 />
            </div>
          </div>
          <div class="card bg-primary">
            <div class="card-body">
              <air-general-3v1 />
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <air-general-4 />
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <air-general-5 />
            </div>
          </div>
          <div class="card">
            <air-general-6 />
          </div>
          <div class="card">
            <air-general-6v1 />
          </div>
          <div class="card">
            <div class="card-body">
              <air-general-7 />
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <air-general-8 />
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-12">
          <div class="card">
            <div class="card-body">
              <air-general-15 />
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-12">
          <air-general-16
            :isNew="true"
            :isFavorite="true"
            :image="'resources/images/products/003.jpg'"
            :name="'TP-Link AC1750 Smart WiFi Router - Dual Band Gigabit Wireless Internet Routers for Home'"
            :price="'199.99'"
            :oldPrice="'499.99'"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AirGeneral1 from '@/components/widgets/General/1/index'
import AirGeneral1v1 from '@/components/widgets/General/1v1/index'
import AirGeneral2 from '@/components/widgets/General/2/index'
import AirGeneral2v1 from '@/components/widgets/General/2v1/index'
import AirGeneral2v2 from '@/components/widgets/General/2v2/index'
import AirGeneral2v3 from '@/components/widgets/General/2v3/index'
import AirGeneral2v4 from '@/components/widgets/General/2v4/index'
import AirGeneral3 from '@/components/widgets/General/3/index'
import AirGeneral3v1 from '@/components/widgets/General/3v1/index'
import AirGeneral4 from '@/components/widgets/General/4/index'
import AirGeneral5 from '@/components/widgets/General/5/index'
import AirGeneral5v1 from '@/components/widgets/General/5v1/index'
import AirGeneral6 from '@/components/widgets/General/6/index'
import AirGeneral6v1 from '@/components/widgets/General/6v1/index'
import AirGeneral7 from '@/components/widgets/General/7/index'
import AirGeneral8 from '@/components/widgets/General/8/index'
import AirGeneral9 from '@/components/widgets/General/9/index'
import AirGeneral10 from '@/components/widgets/General/10/index'
import AirGeneral10v1 from '@/components/widgets/General/10v1/index'
import AirGeneral11 from '@/components/widgets/General/11/index'
import AirGeneral11v1 from '@/components/widgets/General/11v1/index'
import AirGeneral12 from '@/components/widgets/General/12/index'
import AirGeneral12v1 from '@/components/widgets/General/12v1/index'
import AirGeneral12v2 from '@/components/widgets/General/12v2/index'
import AirGeneral12v3 from '@/components/widgets/General/12v3/index'
import AirGeneral13 from '@/components/widgets/General/13/index'
import AirGeneral13v1 from '@/components/widgets/General/13v1/index'
import AirGeneral14 from '@/components/widgets/General/14/index'
import AirGeneral15 from '@/components/widgets/General/15/index'
import AirGeneral16 from '@/components/widgets/General/16/index'

export default {
  components: {
    AirGeneral1,
    AirGeneral1v1,
    AirGeneral2,
    AirGeneral2v1,
    AirGeneral2v2,
    AirGeneral2v3,
    AirGeneral2v4,
    AirGeneral3,
    AirGeneral3v1,
    AirGeneral4,
    AirGeneral5,
    AirGeneral5v1,
    AirGeneral6,
    AirGeneral6v1,
    AirGeneral7,
    AirGeneral8,
    AirGeneral9,
    AirGeneral10,
    AirGeneral10v1,
    AirGeneral11,
    AirGeneral11v1,
    AirGeneral12,
    AirGeneral12v1,
    AirGeneral12v2,
    AirGeneral12v3,
    AirGeneral13,
    AirGeneral13v1,
    AirGeneral14,
    AirGeneral15,
    AirGeneral16,
  },
}
</script>
