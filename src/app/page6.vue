<template>
  <div class="page5">
    <div class="big-part">
      大而全、包括所有功能特性，典型项目有：Angular 1、Angular 2、Ember
    </div>
    <img class="vs-icon" src="../assets/vs-icon.png" alt="vs">
    <div class="small-part">
      小而美、聚焦在 UI 层面的解决方案，典型项目有 React、Vue.JS、Inferno...
    </div>
  </div>
</template>

<script>
export default {
  name: 'page5',
  methods: {

  }
}
</script>

<style lang="less" scoped>
.page5{
  display: flex;
  flex-direction: row;
  align-items: center;
  .vs-icon{
    margin: 0 20px;
  }
  .big-part{
    flex: 1;
  }
  .small-part{
    flex: 1;
  }
}
</style>