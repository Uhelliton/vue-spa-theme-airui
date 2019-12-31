<template>
  <div>
    <div class="air__utils__heading">
      <h5>
        <span class="mr-3">Bootstrap Components</span>
        <a
          href="https://bootstrap-vue.js.org/"
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
import AirBootstrapAlertExample from '@/views/ui-kits/bootstrap/examples/alert/index'
import AirBootstrapBadgesExample from '@/views/ui-kits/bootstrap/examples/badges/index'
import AirBootstrapBreadcrumbExample from '@/views/ui-kits/bootstrap/examples/breadcrumb/index'
import AirBootstrapButtonsExample from '@/views/ui-kits/bootstrap/examples/buttons/index'
import AirBootstrapButtonGroupExample from '@/views/ui-kits/bootstrap/examples/button-group/index'
import AirBootstrapButtonToolbarExample from '@/views/ui-kits/bootstrap/examples/button-toolbar/index'
import AirBootstrapCardsExample from '@/views/ui-kits/bootstrap/examples/cards/index'
import AirBootstrapCarouselExample from '@/views/ui-kits/bootstrap/examples/carousel/index'
import AirBootstrapCollapseExample from '@/views/ui-kits/bootstrap/examples/collapse/index'
import AirBootstrapDropdownsExample from '@/views/ui-kits/bootstrap/examples/dropdowns/index'
import AirBootstrapEmbedExample from '@/views/ui-kits/bootstrap/examples/embed/index'
import AirBootstrapFormExample from '@/views/ui-kits/bootstrap/examples/form/index'
import AirBootstrapFormCheckboxExample from '@/views/ui-kits/bootstrap/examples/form-checkbox/index'
import AirBootstrapFormFileExample from '@/views/ui-kits/bootstrap/examples/form-file/index'
import AirBootstrapFormGroupExample from '@/views/ui-kits/bootstrap/examples/form-group/index'
import AirBootstrapFormInputExample from '@/views/ui-kits/bootstrap/examples/form-input/index'
import AirBootstrapFormRadioExample from '@/views/ui-kits/bootstrap/examples/form-radio/index'
import AirBootstrapFormSelectExample from '@/views/ui-kits/bootstrap/examples/form-select/index'
import AirBootstrapFormTextareaExample from '@/views/ui-kits/bootstrap/examples/form-textarea/index'
import AirBootstrapImageExample from '@/views/ui-kits/bootstrap/examples/image/index'
import AirBootstrapInputGroupExample from '@/views/ui-kits/bootstrap/examples/input-group/index'
import AirBootstrapJumbotronExample from '@/views/ui-kits/bootstrap/examples/jumbotron/index'
import AirBootstrapLayoutExample from '@/views/ui-kits/bootstrap/examples/layout/index'
import AirBootstrapLinkExample from '@/views/ui-kits/bootstrap/examples/link/index'
import AirBootstrapListGroupExample from '@/views/ui-kits/bootstrap/examples/list-group/index'
import AirBootstrapMediaExample from '@/views/ui-kits/bootstrap/examples/media/index'
import AirBootstrapModalExample from '@/views/ui-kits/bootstrap/examples/modal/index'
import AirBootstrapNavExample from '@/views/ui-kits/bootstrap/examples/nav/index'
import AirBootstrapNavbarExample from '@/views/ui-kits/bootstrap/examples/navbar/index'
import AirBootstrapPaginationExample from '@/views/ui-kits/bootstrap/examples/pagination/index'
import AirBootstrapPaginationNavExample from '@/views/ui-kits/bootstrap/examples/pagination-nav/index'
import AirBootstrapPopoverExample from '@/views/ui-kits/bootstrap/examples/popover/index'
import AirBootstrapProgressExample from '@/views/ui-kits/bootstrap/examples/progress/index'
import AirBootstrapSpinnerExample from '@/views/ui-kits/bootstrap/examples/spinner/index'
import AirBootstrapTableExample from '@/views/ui-kits/bootstrap/examples/table/index'
import AirBootstrapTabsExample from '@/views/ui-kits/bootstrap/examples/tabs/index'
import AirBootstrapToastExample from '@/views/ui-kits/bootstrap/examples/toast/index'
import AirBootstrapTooltipExample from '@/views/ui-kits/bootstrap/examples/tooltip/index'

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
    'air-bootstrap-alert-example': AirBootstrapAlertExample,
    'air-bootstrap-badges-example': AirBootstrapBadgesExample,
    'air-bootstrap-breadcrumb-example': AirBootstrapBreadcrumbExample,
    'air-bootstrap-buttons-example': AirBootstrapButtonsExample,
    'air-bootstrap-button-group-example': AirBootstrapButtonGroupExample,
    'air-bootstrap-button-toolbar-example': AirBootstrapButtonToolbarExample,
    'air-bootstrap-cards-example': AirBootstrapCardsExample,
    'air-bootstrap-carousel-example': AirBootstrapCarouselExample,
    'air-bootstrap-collapse-example': AirBootstrapCollapseExample,
    'air-bootstrap-dropdowns-example': AirBootstrapDropdownsExample,
    'air-bootstrap-embed-example': AirBootstrapEmbedExample,
    'air-bootstrap-form-example': AirBootstrapFormExample,
    'air-bootstrap-form-checkbox-example': AirBootstrapFormCheckboxExample,
    'air-bootstrap-form-file-example': AirBootstrapFormFileExample,
    'air-bootstrap-form-group-example': AirBootstrapFormGroupExample,
    'air-bootstrap-form-input-example': AirBootstrapFormInputExample,
    'air-bootstrap-form-radio-example': AirBootstrapFormRadioExample,
    'air-bootstrap-form-select-example': AirBootstrapFormSelectExample,
    'air-bootstrap-form-textarea-example': AirBootstrapFormTextareaExample,
    'air-bootstrap-image-example': AirBootstrapImageExample,
    'air-bootstrap-input-group-example': AirBootstrapInputGroupExample,
    'air-bootstrap-jumbotron-example': AirBootstrapJumbotronExample,
    'air-bootstrap-layout-example': AirBootstrapLayoutExample,
    'air-bootstrap-link-example': AirBootstrapLinkExample,
    'air-bootstrap-list-group-example': AirBootstrapListGroupExample,
    'air-bootstrap-media-example': AirBootstrapMediaExample,
    'air-bootstrap-modal-example': AirBootstrapModalExample,
    'air-bootstrap-nav-example': AirBootstrapNavExample,
    'air-bootstrap-navbar-example': AirBootstrapNavbarExample,
    'air-bootstrap-pagination-example': AirBootstrapPaginationExample,
    'air-bootstrap-pagination-nav-example': AirBootstrapPaginationNavExample,
    'air-bootstrap-popover-example': AirBootstrapPopoverExample,
    'air-bootstrap-progress-example': AirBootstrapProgressExample,
    'air-bootstrap-spinner-example': AirBootstrapSpinnerExample,
    'air-bootstrap-table-example': AirBootstrapTableExample,
    'air-bootstrap-tabs-example': AirBootstrapTabsExample,
    'air-bootstrap-toast-example': AirBootstrapToastExample,
    'air-bootstrap-tooltip-example': AirBootstrapTooltipExample,
  },
  computed: {
    currentExampleComponent: function () {
      return this.currentTabKey
    },
  },
}
</script>
<style lang="scss" module>
@import "./style.module.scss";
</style>
