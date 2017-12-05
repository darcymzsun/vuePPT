<template>
  <div>
    <div class="head" style="font-size: 30px;font-weight:bold;">
      渐进式框架与自底向上设计
    </div>
    <div class="img-box">
      <img class="bike" src="../assets/bike.png" alt="自行车">
      <img class="elec-bike" src="../assets/electrBike.png" alt="电动车">
      <img class="car" src="../assets/bmw-1.png" alt="小轿车">
      <img class="car-7" src="../assets/7car.png" alt="7座轿车">
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  methods: {

  }
}
</script>

<style lang="less" scoped>

.img-box{
  margin-top: 100px;
  img{
    margin: 0 20px;
  }
}
.bike{
  display: inline-block;
  width: 200px;
}
.elec-bike{
  display: inline-block;
  width: 200px;
}
.car{
  display: inline-block;
  width: 200px;
}
.car-7{
  display: inline-block;
  width: 200px;
}

</style>