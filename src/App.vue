<template>
  <div id="app">
    <transition name="fade" >
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
    var _this = this;
    document.onkeydown = function(e){
      console.log(e)
      if(e.keyCode === 39){
        _this.nextPage();
      }else if(e.keyCode === 37){
        _this.prePage()
      }
    }
  },
  methods: {
    nextPage(){
      console.log('next')
    },
    prePage(){
      console.log('pre')
    }
  }
}
</script>

<style>
#app {
  font-family: "lucida grande", "lucida sans unicode", lucida, helvetica, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
</style>
