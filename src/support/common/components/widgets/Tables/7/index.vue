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
        <template slot="location" slot-scope="text">
          <a href="javascript: void(0);" class="text-blue">
            {{text}}
          </a>
        </template>
        <template slot="value" slot-scope="text">
          <span class="font-weight-bold">{{text}}</span>
        </template>
        <template slot="users" slot-scope="users">
          <div class="air__utils__avatarGroup" :class="[users.length ? '' : 'd-none']">
            <div class="air__utils__avatar air__utils__avatar--rounded" v-for="user in users" :key="user">
              <img :src="user" alt="User" />
            </div>
            <button type="button" class="air__utils__avatarGroupAdd">
              <i class="fe fe-plus" />
            </button>
          </div>
        </template>
        <template slot="action">
          <div class="text-nowrap">
            <button type="button" class="btn btn-outline-success mr-2 mb-2">
              Accept
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
    title: 'Action name',
    dataIndex: 'actionName',
    className: 'text-gray-6',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    scopedSlots: { customRender: 'location' },
  },
  {
    title: 'Value',
    dataIndex: 'value',
    className: 'text-gray-6',
    scopedSlots: { customRender: 'value' },
  },
  {
    title: 'Description',
    dataIndex: 'description',
    className: 'text-gray-6',
  },
  {
    dataIndex: 'users',
    scopedSlots: { customRender: 'users' },
  },
  {
    dataIndex: 'action',
    className: 'text-right',
    scopedSlots: { customRender: 'action' },
  },
]

export default {
  name: 'AirTable7',
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
