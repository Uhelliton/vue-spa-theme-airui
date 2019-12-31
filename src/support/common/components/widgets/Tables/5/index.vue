<template>
  <div>
    <div class="text-nowrap text-dark font-size-50 font-weight-bold">
      $29,931 <sup class="text-uppercase text-gray-6 font-size-30">paid</sup>
    </div>
    <div class="air__utils__scrollTable mb-4">
      <a-table
        :columns="columns"
        :dataSource="data"
        :pagination="false"
        :scroll="{ x: '100%' }"
      >
        <template slot="avatar" slot-scope="link">
          <div class="air__utils__avatar">
            <img :src="link" alt="User" />
          </div>
        </template>
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
        <template slot="action">
          <div class="text-nowrap">
            <button type="button" class="btn btn-light">
              <span class="text-blue">Add</span>
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
    dataIndex: 'avatar',
    className: 'bg-transparent text-gray-6 width-50',
    scopedSlots: { customRender: 'avatar' },
  },
  {
    title: 'User Name',
    dataIndex: 'userName',
    className: 'bg-transparent',
    scopedSlots: { customRender: 'userName' },
  },
  {
    title: 'Location',
    dataIndex: 'location',
    className: 'bg-transparent',
    scopedSlots: { customRender: 'location' },
  },
  {
    dataIndex: 'action',
    className: 'bg-transparent text-right',
    scopedSlots: { customRender: 'action' },
  },
]

export default {
  name: 'AirTable5',
  data: function() {
    return {
      columns,
      data,
    }
  },
}
</script>
