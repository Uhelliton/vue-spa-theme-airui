<template>
  <div>
    <div :class="$style.head">
      <div :class="$style.headItem" class="mb-3 pr-3">
        <div :class="$style.headIcon" class="bg-gray-4 text-white mr-3">
          <i class="fe fe-menu font-size-18" />
        </div>
        <div>
          <div class="text-uppercase text-muted text-nowrap">Cross Earnings</div>
          <div class="font-weight-bold text-dark">+125,367.36</div>
        </div>
      </div>
      <div :class="$style.headItem" class="mb-3">
        <div :class="$style.headIcon" class="bg-gray-4 text-white mr-3">
          <i class="fe fe-cloud font-size-18" />
        </div>
        <div>
          <div class="text-uppercase text-muted text-nowrap">Tax witheld</div>
          <div class="font-weight-bold text-dark">-$12,350.00</div>
        </div>
      </div>
    </div>
    <div class="air__utils__scrollTable mb-4">
      <a-table
        :columns="columns"
        :dataSource="data"
        :pagination="false"
        :scroll="{ x: '100%' }"
      >
        <template slot="location" slot-scope="text">
          <a href="javascript: void(0);" class="text-blue">
            {{text}}
          </a>
        </template>
        <template slot="value" slot-scope="text">
          <span class="font-weight-bold">{{text}}</span>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script>
import data from './data.json'
const columns = [
  {
    title: 'Action name',
    dataIndex: 'actionName',
    class: 'bg-transparent text-gray-6',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    class: 'bg-transparent',
    scopedSlots: { customRender: 'location' },
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
    class: 'text-left text-gray-6 bg-transparent',
  },
  {
    title: 'Value',
    dataIndex: 'value',
    class: 'text-right bg-transparent text-gray-6',
    scopedSlots: { customRender: 'value' },
  },
]

export default {
  name: 'AirTable4',
  data: function() {
    return {
      columns,
      data,
    }
  },
}
</script>
<style lang="scss" module>
  @import './style.module.scss';
</style>
