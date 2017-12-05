<template>
  <div>
    <div class="head">核心功能</div>
    <dl>
      <dt>数据绑定</dt>
      <dd>
        允许采用简洁的模板语法来声明式的将数据渲染进 DOM,所有的元素都是响应式的
      </dd>
      <dt>组件化</dt>
      <dd>
        <img src="../assets/components.png" alt="组件">
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'page7',
  methods: {

  }
}
</script>

<style lang="less" scoped>
dl{
  font-size: 24px;
  font-weight: normal;
  dt{
    margin-top: 20px;
  }
  dd{
      text-indent: 2em;
      img{
        width: 700px;
      }
    }
}

</style>