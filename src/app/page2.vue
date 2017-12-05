<template>
  <div>
    <div class="head">我就是我~~</div>
    <ul class="list">
      <li>
        Vue 是一套构建用户界面的<em class="point">渐进式框架</em>；
      </li>
      <li>
        Vue 采用自底向上增量开发的设计；
      </li>
      <li>
        Vue 的核心库只关注<em class="point">视图层</em>，便于与第三方库或既有项目整合；
      </li>
      <li>
        vue 可以为复杂的单页应用程序提供驱动；
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'page2',
  methods: {

  }
}
</script>

<style lang="less" scoped>
  .point{
    color: #000;
  }
  .list{
    list-style: none;
    margin-top: 50px;
  }
</style>