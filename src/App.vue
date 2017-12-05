<template>
  <div id="app">
    <img class="zyb-logo" src="./assets/logo.png" alt="作业帮">
    <transition name="fade" enter-active-class="animated rollIn"
    leave-active-class="animated rollOut">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
var pageNum = 1;
export default {
  name: 'app',
  created() {
    var _this = this;
    document.onkeydown = function(e){
      if(e.keyCode === 39){
        _this.nextPage();
      }else if(e.keyCode === 37){
        _this.prePage()
      }
    }
  },
  methods: {
    nextPage(){
      var _router = this.$router;
      var pageNum = parseInt(_router.history.current.name.match(/\d+$/)[0]);
      if(pageNum < _router.options.routes.length-1){
        pageNum++;
        _router.replace('page'+pageNum)
      }else{
        pageNum = 1;
      }
    },
    prePage(){
      var $router = this.$router;
      var pageNum = parseInt($router.history.current.name.match(/\d+$/)[0]);
      if(pageNum > 1){
        pageNum--;
        $router.replace('page'+pageNum)
      }else{
        pageNum = 1;
      }
    }
  }
}
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
}
html,body{
  height: 100%;
  overflow: hidden;
}
body{
  background: #fff;
  background-image: 
    linear-gradient(90deg, #e5e5e5 1px,transparent 0),
    linear-gradient(0deg, #e5e5e5 1px,transparent 0);
  background-size: 20px 100% ,100% 20px;
}
#app {
  font-family: "lucida grande", "lucida sans unicode", lucida, helvetica, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  display:flex;
  -webkit-flex-direction:column;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  height: 100%;
  line-height: 1.5;
  max-width: 1000px;
  margin: 0 auto;
  font-size: 30px;
  font-weight: bold;
  .head{
    font-size: 30px;
    font-weight:bold;
    text-align: center;
  }
  .zyb-logo{
    position: absolute;
    top: 20px;
    left: 20px;
    width: 50px;
    height: 50px;
  }
}

</style>
