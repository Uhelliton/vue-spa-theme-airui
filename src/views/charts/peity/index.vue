<template>
  <div>
    <div class="air__utils__heading">
      <h5>
        <span class="mr-3">Peity</span>
        <a href="http://benpickles.github.io/peity/" target="_blank" class="btn btn-sm btn-light">
          Official Documentation
          <i class="fe fe-corner-right-up" />
        </a>
      </h5>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-xl-6 col-lg-12">
            <h4 class="text-black">
              <strong>Blue Color</strong>
            </h4>
            <div class="mb-5">
              <table class="table table-hover table-vertical-middle">
                <tbody>
                  <tr>
                    <td>Pie Charts</td>
                    <td>
                      <span v-for="(pieItemData, index) in pieData" :key="index" class="mr-2">
                        <peity
                          :type="'pie'"
                          :options="{ 'fill': ['#01a8fe', '#72cfff', '#c6eafd'], 'radius': 11 }"
                          :data="pieItemData"
                        ></peity>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Donut Charts</td>
                    <td>
                      <span v-for="(donutItemData, index) in donutData" :key="index" class="mr-2">
                        <peity
                          :type="'donut'"
                          :options="{ 'fill': ['#01a8fe', '#72cfff', '#c6eafd'], 'radius': 11 }"
                          :data="donutItemData"
                        ></peity>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Line Charts</td>
                    <td>
                      <span v-for="(lineItemData, index) in lineData" :key="index" class="mr-2">
                        <peity
                          :type="'line'"
                          :options="{ 'fill': ['#72cfff'], 'stroke': '#01a8fe', 'height': 22, 'width': 44, 'strokeWidth': 1, }"
                          :data="lineItemData"
                        ></peity>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Bar Charts</td>
                    <td>
                      <span v-for="(barItemData, index) in barData" :key="index" class="mr-2">
                        <peity
                          :type="'bar'"
                          :options="{ 'fill': ['#01a8fe'], 'height': 22, 'width': 44, }"
                          :data="barItemData"
                        ></peity>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Dynamic Charts</td>
                    <td>
                      <span class="mr-2">
                        <peity
                          :type="'line'"
                          :options="{ 'fill': ['#72cfff'], 'stroke': '#01a8fe', 'height': 22, 'width': 44, 'strokeWidth': 1, }"
                          :data="lineDataDinamycFirst"
                        ></peity>
                      </span>
                      <span class="mr-2">
                        <peity
                          :type="'line'"
                          :options="{ 'fill': ['#72cfff'], 'stroke': '#01a8fe', 'height': 22, 'width': 44, 'strokeWidth': 1, }"
                          :data="lineDataDinamycSecond"
                        ></peity>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-xl-6 col-lg-12">
            <h4 class="text-black">
              <strong>Green Color</strong>
            </h4>
            <div class="mb-5">
              <table class="table table-hover table-vertical-middle">
                <tbody>
                  <tr>
                    <td>Pie Charts</td>
                    <td>
                      <span v-for="(pieItemData, index) in pieData" :key="index" class="mr-2">
                        <peity
                          :type="'pie'"
                          :options="{ 'fill': ['#46be8a', '#79dcb1', '#b1f8d9'], 'radius': 11 }"
                          :data="pieItemData"
                        ></peity>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Donut Charts</td>
                    <td>
                      <span v-for="(donutItemData, index) in donutData" :key="index" class="mr-2">
                        <peity
                          :type="'donut'"
                          :options="{ 'fill': ['#46be8a', '#79dcb1', '#b1f8d9'], 'radius': 11 }"
                          :data="donutItemData"
                        ></peity>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Line Charts</td>
                    <td>
                      <span v-for="(lineItemData, index) in lineData" :key="index" class="mr-2">
                        <peity
                          :type="'line'"
                          :options="{ 'fill': ['#79dcb1'], 'stroke': '#46be8a', 'height': 22, 'width': 44, 'strokeWidth': 1, }"
                          :data="lineItemData"
                        ></peity>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Bar Charts</td>
                    <td>
                      <span v-for="(barItemData, index) in barData" :key="index" class="mr-2">
                        <peity
                          :type="'bar'"
                          :options="{ 'fill': ['#46be8a'], 'height': 22, 'width': 44, }"
                          :data="barItemData"
                        ></peity>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Dynamic Charts</td>
                    <td>
                      <span class="mr-2">
                        <peity
                          :type="'line'"
                          :options="{ 'fill': ['#79dcb1'], 'stroke': '#46be8a', 'height': 22, 'width': 44, 'strokeWidth': 1, }"
                          :data="lineDataDinamycFirst"
                        ></peity>
                      </span>
                      <span class="mr-2">
                        <peity
                          :type="'line'"
                          :options="{ 'fill': ['#79dcb1'], 'stroke': '#46be8a', 'height': 22, 'width': 44, 'strokeWidth': 1, }"
                          :data="lineDataDinamycSecond"
                        ></peity>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Peity from 'vue-peity'

export default {
  components: {
    Peity,
  },
  data() {
    return {
      pieData: ['1/5', '226/360', '0.52/1.561', '1,4', '226,134', '0.52,1.041', '1,2,3,2,2'],
      donutData: ['1/5', '226/360', '0.52/1.561', '1,4', '226,134', '0.52,1.041', '1,2,3,2,2'],
      lineData: ['5,3,9,6,5,9,7,3,5,2', '5,3,2,-1,-3,-2,2,3,5,2', '0,-3,-6,-4,-5,-4,-7,-3,-5,-2'],
      barData: ['5,3,9,6,5,9,7,3,5,2', '5,3,2,-1,-3,-2,2,3,5,2', '0,-3,-6,-4,-5,-4,-7,-3,-5,-2'],
      dynamicDataFirst: [5, 3, 9, 6, 5, 9, 7, 3, 5, 2, 5, 3, 9, 6, 5, 9, 7, 3, 5, 2],
      dynamicDataSecond: [5, 3, 2, 0, 3, 1, 2, 3, 5, 2],
    }
  },
  computed: {
    lineDataDinamycFirst() {
      return this.dynamicDataFirst.toString()
    },
    lineDataDinamycSecond() {
      return this.dynamicDataSecond.toString()
    },
  },
  created() {
    setInterval(() => {
      this.dynamicDataFirst.unshift(this.dynamicDataFirst.pop())
      this.dynamicDataSecond.unshift(this.dynamicDataSecond.pop())
    }, 377)
  },
}
</script>
