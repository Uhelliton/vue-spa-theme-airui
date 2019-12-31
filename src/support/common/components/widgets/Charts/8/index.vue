<template>
  <div>
    <div class="air__utils__textDivider mb-2">
      <h4 class="air__utils__textDivider__content font-size-24 font-weight-bold">
        Waiting actions
      </h4>
    </div>
    <div class="air__utils__scrollTable mb-4">
      <a-table
        :columns="columns"
        :dataSource="tableData"
        :pagination="false"
        :scroll="{ x: '100%' }"
        :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
      >
        <template slot="userName" slot-scope="user">
          <div>
            <div>{{user.name}}</div>
            <div className="text-gray-4">{{user.position}}</div>
          </div>
        </template>
        <template slot="location" slot-scope="text">
          <a href="javascript: void(0);" class="text-blue">
            {{text}}
          </a>
        </template>
        <template slot="value" slot-scope="text">
          <span class="font-weight-bold">{{text}}</span>
        </template>
        <template slot="chart" slot-scope="chartData">
          <vue-chartist
            type="Line"
            :data="chartData"
            :options="options"
          />
        </template>
      </a-table>
    </div>
  </div>
</template>
<script>
import tableData from './data.json'
import VueChartist from 'v-chartist'

const columns = [
  {
    title: 'User Name',
    dataIndex: 'userName',
    scopedSlots: { customRender: 'userName' },
  },
  {
    title: 'Location',
    dataIndex: 'location',
    scopedSlots: { customRender: 'location' },
  },
  {
    title: 'Value',
    dataIndex: 'value',
    className: 'text-right text-gray-6',
    scopedSlots: { customRender: 'Value' },
  },
  {
    title: 'Last week profit',
    dataIndex: 'chart',
    className: 'text-right',
    scopedSlots: { customRender: 'chart' },
  },
]
export default {
  name: 'AirChart8',
  components: {
    'vue-chartist': VueChartist,
  },
  data: function () {
    const options = {
      width: '110px',
      height: '50px',
      chartPadding: {
        right: 0,
        left: 0,
        top: 5,
        bottom: 5,
      },
      fullWidth: true,
      showPoint: false,
      lineSmooth: true,
      axisY: {
        showGrid: false,
        showLabel: false,
        offset: 0,
      },
      axisX: {
        showGrid: false,
        showLabel: false,
        offset: 0,
      },
      showArea: false,
    }
    return {
      tableData,
      options,
      selectedRowKeys: [],
      columns,
    }
  },
  methods: {
    onSelectChange(selectedRowKeys) {
      this.selectedRowKeys = selectedRowKeys
    },
  },
}
</script>
<style lang="scss" module>
  @import './style.module.scss';
</style>
