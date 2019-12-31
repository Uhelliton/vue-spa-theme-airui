<template>
  <div :class="$style.subbar">
    <ul :class="$style.breadcrumbs" class="mr-4">
      <li :class="$style.breadcrumb">
        <a href="#" class="style.breadcrumbLink">Main</a>
      </li>
      <li :class="$style.breadcrumb">
        <a href="#" :class="[$style.breadcrumbLink, $style.breadcrumbLink__current]">Dashboard</a>
      </li>
    </ul>
    <div :class="$style.divider" class="mr-4 d-none d-xl-block" />
    <p class="color-gray-4 text-uppercase font-size-18 mb-0 mr-4 d-none d-xl-block">INV-00125</p>
    <button
      type="button"
      class="btn btn-primary btn-with-addon mr-auto text-nowrap d-none d-md-block"
    >
      <span class="btn-addon">
        <i class="btn-addon-icon fe fe-plus-circle" />
      </span>
      New Request
    </button>
    <div :class="$style.amount" class="mr-3 ml-auto d-none d-sm-flex">
      <p :class="$style.amountText">
        This month
        <span :class="$style.amountValue">$251.12</span>
      </p>
      <div :class="$style.amountGraph">
        <i :class="$style.amountGraphItem" :style="{ height: '80%' }" />
        <i :class="$style.amountGraphItem" :style="{ height: '50%' }" />
        <i :class="$style.amountGraphItem" :style="{ height: '70%' }" />
        <i :class="$style.amountGraphItem" :style="{ height: '60%' }" />
        <i :class="$style.amountGraphItem" :style="{ height: '50%' }" />
        <i :class="$style.amountGraphItem" :style="{ height: '65%' }" />
      </div>
    </div>
    <div :class="$style.amount" class="d-none d-sm-flex">
      <p :class="$style.amountText">
        Last month
        <span :class="$style.amountValue">$12,256.12</span>
      </p>
      <div :class="$style.amountGraph">
        <i :class="$style.amountGraphItem" :style="{ height: '60%' }" />
        <i :class="$style.amountGraphItem" :style="{ height: '65%' }" />
        <i :class="$style.amountGraphItem" :style="{ height: '75%' }" />
        <i :class="$style.amountGraphItem" :style="{ height: '55%' }" />
        <i :class="$style.amountGraphItem" :style="{ height: '100%' }" />
        <i :class="$style.amountGraphItem" :style="{ height: '85%' }" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
@import "./style.module.scss";
</style>
