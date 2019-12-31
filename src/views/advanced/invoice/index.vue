<template>
  <div>
    <div class="air__utils__heading">
      <h5>Invoice</h5>
    </div>

    <div>
      <div class="d-flex flex-wrap">
        <div class="flex-grow-1 d-flex flex-column flex-sm-row mb-4">
          <div class="font-size-18 font-weight-bold text-uppercase mb-4">
            <div>From:</div>
            <div class="text-dark mb-3">Amazon delivery</div>
            <img class="d-block" src="resources/images/content/amazon-logo.jpg" alt="Amazon logo" />
          </div>
          <div class="ml-sm-auto mr-lg-auto pr-3">
            795 Folsom Ave, Suite 600
            <br />San Francisco, CA, 94107
            <br />E-mail: example@amazon.com
            <br />Phone: (123) 456-7890
            <br />Fax: 800-692-7753
          </div>
        </div>
        <div class="flex-grow-1 d-flex flex-column flex-sm-row mb-4">
          <div class="font-size-18 font-weight-bold text-uppercase pb-4">
            <div>To:</div>
            <div class="text-dark mb-3">Invoice info</div>
            <div class="text-dark">W32567-2352-4756</div>
            <div class="text-dark">Artour Arteezy</div>
          </div>
          <div class="mt-auto mt-sm-0 ml-sm-auto pr-3 mr-lg-auto">
            795 Folsom Ave, Suite 600
            <br />San Francisco, CA, 94107
            <br />P: (123) 456-7890
            <br />Invoice Date: January 20, 2016
            <br />Due Date: January 22, 2016
          </div>
        </div>
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
            <a href="javascript: void(0);" class="text-blue">{{text}}</a>
          </template>
          <template slot="quantity" slot-scope="text">
            <div class="font-weight-bold text-dark">{{text}}</div>
          </template>
          <template slot="cost" slot-scope="text">
            <div class="font-weight-bold text-dark">{{text}}</div>
          </template>
          <template slot="overall" slot-scope="text">
            <div class="font-weight-bold text-dark">{{text}}</div>
          </template>
        </a-table>
      </div>
      <div class="text-right font-size-18 text-dark">
        <div>
          Sub - Total amount:
          <span class="font-weight-bold">$406,472.50</span>
        </div>
        <div>
          VAT:
          <span class="font-weight-bold">$81,294.50</span>
        </div>
        <div>
          Grand Total:
          <span class="font-weight-bold">$487,767.00</span>
        </div>
        <a href="javascript: void(0);" class="btn btn-outline-success mr-3 mt-3">Proceed Payment</a>
        <a href="javascript: void(0);" class="btn btn-outline-success mt-3">Print</a>
      </div>
    </div>
  </div>
</template>
<script>
import data from './data.json'
const columns = [
  {
    title: 'Product',
    dataIndex: 'product',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    scopedSlots: { customRender: 'location' },
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    className: 'text-right',
    scopedSlots: { customRender: 'quantity' },
  },
  {
    title: 'Unit Cost',
    dataIndex: 'cost',
    className: 'text-right',
    scopedSlots: { customRender: 'cost' },
  },
  {
    title: 'Summary',
    dataIndex: 'overall',
    className: 'text-right',
    scopedSlots: { customRender: 'overall' },
  },
]

export default {
  data: function () {
    return {
      columns,
      data,
      selectedRowKeys: ['1', '2', '3'],
    }
  },
  methods: {
    onSelectChange(selectedRowKeys) {
      this.selectedRowKeys = selectedRowKeys
    },
  },
}
</script>
