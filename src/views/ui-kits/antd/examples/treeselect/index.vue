<template>
  <div>
    <a-tree-select
      showSearch
      style="width: 300px"
      :value="value"
      :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }"
      placeholder='Please select'
      allowClear
      treeDefaultExpandAll
      @change="onChange"
    >
      <a-tree-select-node value='parent 1' title='parent 1' key='0-1'>
        <a-tree-select-node value='parent 1-0' title='parent 1-0' key='0-1-1'>
          <a-tree-select-node :selectable="false" value='leaf1' title='my leaf' key='random' />
          <a-tree-select-node value='leaf2' title='your leaf' key='random1' />
        </a-tree-select-node>
        <a-tree-select-node value='parent 1-1' title='parent 1-1' key='random2'>
          <a-tree-select-node value='sss' key='random3'>
            <b style="color: #08c" slot="title">sss</b>
          </a-tree-select-node>
        </a-tree-select-node>
      </a-tree-select-node>
    </a-tree-select>
  </div>
</template>
<script>
export default {
  name: 'AirAntdTreeSelectExample',
  data () {
    return {
      treeExpandedKeys: [],
      value: undefined,
    }
  },
  methods: {
    onChange (value) {
      console.log(value)
      this.value = value
    },
  },
}
</script>
