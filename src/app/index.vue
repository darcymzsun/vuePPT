<template>
  <div>
    <img class="animated infinite bounce" src="../assets/logo.png" alt="">
    <div style="font-size: 30px;font-weight:bold;">
      vue是什么？
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  methods: {
    keyDown (event) {
      console.log(event)
    }
  }
}
</script>

<style lang="less" scoped>

</style>


