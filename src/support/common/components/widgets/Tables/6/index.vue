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
        :dataSource="data"
        :pagination="false"
        :scroll="{ x: '100%' }"
        :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
      >
        <template slot="userName" slot-scope="user">
          <div>
            <div>{{user.name}}</div>
            <div class="text-gray-4">{{user.position}}</div>
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
        <template slot="action">
          <div class="text-nowrap">
            <button type="button" class="btn btn-outline-danger mr-2 mb-2">
              Decline
            </button>
          </div>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script>
import data from './data.json'
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
    key: 'value',
    className: 'text-right text-gray-6',
    scopedSlots: { customRender: 'value' },
  },
  {
    dataIndex: 'action',
    className: 'text-right',
    scopedSlots: { customRender: 'action' },
  },
]

export default {
  name: 'AirTable6',
  data: function() {
    return {
      columns,
      data,
      selectedRowKeys: [],
    }
  },
  methods: {
    onSelectChange (selectedRowKeys) {
      this.selectedRowKeys = selectedRowKeys
    },
  },
}
</script>
