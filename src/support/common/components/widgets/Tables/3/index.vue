<template>
  <div>
    <a-tabs defaultActiveKey="1" class="air-tabs-bordered">
      <a-tab-pane tab="History" key="1" />
      <a-tab-pane tab="Actions" key="2" />
      <a-tab-pane key="3">
        <a-dropdown slot="tab" placement="bottomRight" :trigger="['click']">
          <a
            class="nav-link dropdown-toggle"
            href="javascript: void(0);"
            role="button"
          >
            Dropdown
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;">Action</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">Another action</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">Something else here</a>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item>
              <a href="javascript:;">Separated link</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </a-tab-pane>
    </a-tabs>
    <div class="air__utils__scrollTable mb-4 px-4">
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
          <div>
            <button type="button" class="btn btn-primary mr-2">
              <i class="fe fe-plus-circle" />
            </button>
            <button type="button" class="btn btn-light">
              <i class="fe fe-settings text-blue" />
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
  name: 'AirTable3',
  data: function() {
    return {
      columns,
      data,
    }
  },
}
</script>
