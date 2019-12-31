<template>
  <div>
    <div class="air__utils__heading">
      <h5>
        <span class="mr-3">Ant Design Components</span>
        <a
          href="https://vue.ant.design/docs/vue/introduce/"
          rel="noopener noreferrer"
          target="_blank"
          class="btn btn-sm btn-light"
        >
          Official Documentation
          <i class="fe fe-corner-right-up"></i>
        </a>
      </h5>
    </div>
    <div class="mb-3">
      <button
        v-for="(item, index) in data"
        :key="item.name"
        type="button"
        class="btn btn-light mr-2 mb-2"
        :class="[selectedExampleIndex === index ? 'bg-primary text-white' : 'text-primary']"
        @click="setExample(index)"
      >
        {{item.name}}
      </button>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="d-flex align-items-baseline flex-wrap">
          <h5 class="text-black mb-2 mr-2">
            <strong>{{example.name}}</strong>
          </h5>
          <a
            :href="example.link"
            target="_blank"
            class="air__utils__link air__utils__link__underlined"
          >
            Examples
            <small>
              <i class="icmn-link ml-1"></i>
            </small>
          </a>
        </div>
        <p>{{example.description}}</p>
        <component :is="example.component"></component>
      </div>
    </div>
  </div>
</template>
<script>
import AirAntdButtonExample from '@/views/ui-kits/antd/examples/button/index'
import AirAntdIconExample from '@/views/ui-kits/antd/examples/icon/index'
import AirAntdLayoutExample from '@/views/ui-kits/antd/examples/layout/index'
import AirAntdAvatarExample from '@/views/ui-kits/antd/examples/avatar/index'
import AirAntdBadgeExample from '@/views/ui-kits/antd/examples/badge/index'
import AirAntdCollapseExample from '@/views/ui-kits/antd/examples/collapse/index'
import AirAntdCarouselExample from '@/views/ui-kits/antd/examples/carousel/index'
import AirAntdCardExample from '@/views/ui-kits/antd/examples/card/index'
import AirAntdCalendarExample from '@/views/ui-kits/antd/examples/calendar/index'
import AirAntdListExample from '@/views/ui-kits/antd/examples/list/index'
import AirAntdPopoverExample from '@/views/ui-kits/antd/examples/popover/index'
import AirAntdTreeExample from '@/views/ui-kits/antd/examples/tree/index'
import AirAntdTooltipExample from '@/views/ui-kits/antd/examples/tooltip/index'
import AirAntdTimelineExample from '@/views/ui-kits/antd/examples/timeline/index'
import AirAntdTagExample from '@/views/ui-kits/antd/examples/tag/index'
import AirAntdTabsExample from '@/views/ui-kits/antd/examples/tabs/index'
import AirAntdTableExample from '@/views/ui-kits/antd/examples/table/index'
import AirAntdAutoCompleteExample from '@/views/ui-kits/antd/examples/autocomplete/index'
import AirAntdCheckboxExample from '@/views/ui-kits/antd/examples/checkbox/index'
import AirAntdCascaderExample from '@/views/ui-kits/antd/examples/cascader/index'
import AirAntdDatePickerExample from '@/views/ui-kits/antd/examples/datepicker/index'
import AirAntdFormExample from '@/views/ui-kits/antd/examples/form/index'
import AirAntdInputNumberExample from '@/views/ui-kits/antd/examples/inputnumber/index'
import AirAntdInputExample from '@/views/ui-kits/antd/examples/input/index'
import AirAntdRateExample from '@/views/ui-kits/antd/examples/rate/index'
import AirAntdRadioExample from '@/views/ui-kits/antd/examples/radio/index'
import AirAntdSwitchExample from '@/views/ui-kits/antd/examples/switch/index'
import AirAntdSliderExample from '@/views/ui-kits/antd/examples/slider/index'
import AirAntdSelectExample from '@/views/ui-kits/antd/examples/select/index'
import AirAntdTreeSelectExample from '@/views/ui-kits/antd/examples/treeselect/index'
import AirAntdTransferExample from '@/views/ui-kits/antd/examples/transfer/index'
import AirAntdTimePickerExample from '@/views/ui-kits/antd/examples/timepicker/index'
import AirAntdUploadExample from '@/views/ui-kits/antd/examples/upload/index'
import AirAntdAlertExample from '@/views/ui-kits/antd/examples/alert/index'
import AirAntdDrawerExample from '@/views/ui-kits/antd/examples/drawer/index'
import AirAntdModalExample from '@/views/ui-kits/antd/examples/modal/index'
import AirAntdMessageExample from '@/views/ui-kits/antd/examples/message/index'
import AirAntdNotificationExample from '@/views/ui-kits/antd/examples/notification/index'
import AirAntdProgressExample from '@/views/ui-kits/antd/examples/progress/index'
import AirAntdPopconfirmExample from '@/views/ui-kits/antd/examples/popconfirm/index'
import AirAntdSpinExample from '@/views/ui-kits/antd/examples/spin/index'
import AirAntdSkeletonExample from '@/views/ui-kits/antd/examples/skeleton/index'
import AirAntdAffixExample from '@/views/ui-kits/antd/examples/affix/index'
import AirAntdBreadcrumbExample from '@/views/ui-kits/antd/examples/breadcrumb/index'
import AirAntdDropdownExample from '@/views/ui-kits/antd/examples/dropdown/index'
import AirAntdMenuExample from '@/views/ui-kits/antd/examples/menu/index'
import AirAntdPaginationExample from '@/views/ui-kits/antd/examples/pagination/index'
import AirAntdStepsExample from '@/views/ui-kits/antd/examples/steps/index'
import AirAntdAnchorExample from '@/views/ui-kits/antd/examples/anchor/index'
import AirAntdBackTopExample from '@/views/ui-kits/antd/examples/backtop/index'
import AirAntdDividerExample from '@/views/ui-kits/antd/examples/divider/index'

import data from './data.json'

export default {
  data: function() {
    let selectedExampleIndex = 0
    let example = data[selectedExampleIndex]

    return {
      data,
      selectedExampleIndex,
      example,
    }
  },
  methods: {
    setExample: function (index) {
      this.selectedExampleIndex = index
      this.example = data[index]
    },
  },
  components: {
    'air-antd-button-example': AirAntdButtonExample,
    'air-antd-icon-example': AirAntdIconExample,
    'air-antd-layout-example': AirAntdLayoutExample,
    'air-antd-avatar-example': AirAntdAvatarExample,
    'air-antd-badge-example': AirAntdBadgeExample,
    'air-antd-collapse-example': AirAntdCollapseExample,
    'air-antd-carousel-example': AirAntdCarouselExample,
    'air-antd-card-example': AirAntdCardExample,
    'air-antd-calendar-example': AirAntdCalendarExample,
    'air-antd-list-example': AirAntdListExample,
    'air-antd-popover-example': AirAntdPopoverExample,
    'air-antd-tree-example': AirAntdTreeExample,
    'air-antd-tooltip-example': AirAntdTooltipExample,
    'air-antd-timeline-example': AirAntdTimelineExample,
    'air-antd-tag-example': AirAntdTagExample,
    'air-antd-tabs-example': AirAntdTabsExample,
    'air-antd-table-example': AirAntdTableExample,
    'air-antd-autocomplete-example': AirAntdAutoCompleteExample,
    'air-antd-checkbox-example': AirAntdCheckboxExample,
    'air-antd-cascader-example': AirAntdCascaderExample,
    'air-antd-datepicker-example': AirAntdDatePickerExample,
    'air-antd-form-example': AirAntdFormExample,
    'air-antd-inputnumber-example': AirAntdInputNumberExample,
    'air-antd-input-example': AirAntdInputExample,
    'air-antd-rate-example': AirAntdRateExample,
    'air-antd-radio-example': AirAntdRadioExample,
    'air-antd-switch-example': AirAntdSwitchExample,
    'air-antd-slider-example': AirAntdSliderExample,
    'air-antd-select-example': AirAntdSelectExample,
    'air-antd-treeselect-example': AirAntdTreeSelectExample,
    'air-antd-transfer-example': AirAntdTransferExample,
    'air-antd-timepicker-example': AirAntdTimePickerExample,
    'air-antd-upload-example': AirAntdUploadExample,
    'air-antd-alert-example': AirAntdAlertExample,
    'air-antd-drawer-example': AirAntdDrawerExample,
    'air-antd-modal-example': AirAntdModalExample,
    'air-antd-message-example': AirAntdMessageExample,
    'air-antd-notification-example': AirAntdNotificationExample,
    'air-antd-progress-example': AirAntdProgressExample,
    'air-antd-popconfirm-example': AirAntdPopconfirmExample,
    'air-antd-spin-example': AirAntdSpinExample,
    'air-antd-skeleton-example': AirAntdSkeletonExample,
    'air-antd-affix-example': AirAntdAffixExample,
    'air-antd-breadcrumb-example': AirAntdBreadcrumbExample,
    'air-antd-dropdown-example': AirAntdDropdownExample,
    'air-antd-menu-example': AirAntdMenuExample,
    'air-antd-pagination-example': AirAntdPaginationExample,
    'air-antd-steps-example': AirAntdStepsExample,
    'air-antd-anchor-example': AirAntdAnchorExample,
    'air-antd-backtop-example': AirAntdBackTopExample,
    'air-antd-divider-example': AirAntdDividerExample,
  },
}
</script>
