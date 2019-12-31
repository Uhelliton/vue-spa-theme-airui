<template>
  <div class="air__utils__scrollTable mb-4">
    <a-table
      :columns="columns"
      :dataSource="data"
      :pagination="false"
      :scroll="{ x: '100%' }"
    >
      <template slot="progress" slot-scope="bar">
        <div class="progress">
          <div
            :class="['progress-bar', bar.color]"
            :style="{width: bar.value + '%'}"
            role="progressbar"
          ></div>
        </div>
      </template>
      <template slot="value" slot-scope="text">
        <span class="font-weight-bold">{{text}}</span>
      </template>
    </a-table>
  </div>
</template>
<script>
import data from './data.json'
const columns = [
  {
    title: 'Action name',
    dataIndex: 'actionName',
    className: 'bg-transparent text-gray-6',
  },
  {
    title: 'Progress',
    dataIndex: 'progress',
    className: 'text-right bg-transparent',
    scopedSlots: { customRender: 'progress' },
  },
  {
    title: 'Value',
    dataIndex: 'value',
    className: 'text-right bg-transparent text-gray-6',
    scopedSlots: { customRender: 'value' },
  },
]

export default {
  name: 'AirTable1',
  data: function() {
    return {
      columns,
      data,
    }
  },
}
</script>
