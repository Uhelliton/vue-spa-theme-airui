<template>
  <div>
    <div class="air__utils__scrollTable mb-4">
      <a-table
        :columns="columns"
        :dataSource="data"
        :pagination="false"
        :scroll="{ x: '100%' }"
      >
        <template slot="description" slot-scope="text">
          <div class="text-wrap width-300">
            <div class="text-dark mb-3">{{text.title}}</div>
            <div>{{text.content}}</div>
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
      </a-table>
    </div>
    <div class="mt-4 d-flex align-items-center flex-wrap">
      <button type="button" class="btn btn-primary mr-2 mb-2">
        Save
      </button>
      <a href="javascript: void(0);" class="btn btn-link mb-2">
        Cancel
      </a>
    </div>
  </div>
</template>
<script>
import data from './data.json'
const columns = [
  {
    title: 'Description',
    dataIndex: 'description',
    className: 'bg-transparent text-gray-6',
    scopedSlots: { customRender: 'description' },
  },
  {
    title: 'Location',
    dataIndex: 'location',
    className: 'text-right bg-transparent',
    scopedSlots: { customRender: 'location' },
  },
  {
    title: 'Value',
    dataIndex: 'value',
    className: 'text-right bg-transparent  text-gray-6',
    scopedSlots: { customRender: 'value' },
  },
]

export default {
  name: 'AirTable2',
  data: function() {
    return {
      columns,
      data,
    }
  },
}
</script>
