<template>
  <el-container>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated slideInDown"
      leave-active-class="animated slideOutUp"
    >
    <el-header height="120px" v-if="show" :class="{fixed:isfixed}">
        <x-header/>  
    </el-header>
    </transition>
    <el-main style='marginTop:120px'><router-view/></el-main>
    <el-footer height=10><x-footer/></el-footer>
  </el-container>
</template>

<script>
import _ from 'lodash';
import xHearder from "./components/Header.vue";
import xFooter from "./components/Footer.vue";
export default {
  name: 'app',
  components:{
    'x-header':xHearder,
    'x-footer':xFooter
  },
  data(){
    return{
      show:true,
      isfixed:true
    }
  },
  mounted(){
    window.addEventListener("scroll",this.debounceScroll);
  },
  methods:{
    debounceScroll: _.debounce(function () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollTop >= 80) {
        this.show = false;
        this.isfixed=false;
      } else {
        this.show = true;
        this.isfixed=true;
      }
    },30)
    
  },
  destroyed(){
    window.removeEventListener('scroll',this.handleScroll);
  }
}
</script>

<style scoped>
section.el-container.is-vertical {
    margin: -8px -8px;
}
.el-header {
  padding: 0;
  z-index: 400;
  width: 100%;
}
.fixed{
  top: 0;
  position: fixed;
}
.el-header.slideInDown{
  animation-name: slideInDown;
}
.el-header.animate{
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    animation-fill-mode: both;
}
.el-footer{
  background:#435b71;
}
body {
    display: block;
    margin: 0px;
}
</style>
