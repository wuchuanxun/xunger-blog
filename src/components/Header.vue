<template>
<div id="header">
  <el-menu class="el-menu-demo" 
    default-active="1"
    background-color=#435b71
    text-color=#999999
    active-text-color=#ffffff
    mode="horizontal" 
    :router="userouter"
    @select="changeTitle">
    <el-menu-item index="1" route="Word">
      <i class="el-icon-news"></i>
      <span>Word</span> 
    </el-menu-item>
    <el-menu-item index="2" route="Phrase">
      <i class="el-icon-menu"></i>
      <span>Phrase</span> 
    </el-menu-item>
    <el-menu-item index="3" route="Sentence">
      <i class="el-icon-document"/>
      <span>Sentence</span>
    </el-menu-item>
    <el-menu-item index="4" route="About">
      <i class="el-icon-info"/>
      <span>About</span>
    </el-menu-item>
  </el-menu>
  <div id="Title">
    <span>{{title}}</span>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return {
      userouter:true,
      title:"Word"
    };
  },
  methods:{
    changeTitle(index,){
      switch (index) {
        case "1":
          this.title="Word"
          break;
        case "2":
          this.title="Phrase";
          break;
        case "3":
          this.title="Sentence";
          break;
        default:
          this.title="About"
          break;
      }
    }
  } 
};
</script>

<style scoped>
#Title{
  background-color: #e6e6e6;
  opacity:0.76;
  height: 80px;
  text-align: center;
}
#Title>span{
  display: inline-block;
  margin-top: 15px;
  color:darkgreen;
  font-size: 34px;
}
.el-menu-item{
  -webkit-transition: none;
  transition: none;
}
.el-menu-item [class^=el-icon-]{
  font-size: 17px;
  text-align: center;
}
.el-menu-item>span{
  font-size: 17px;
  text-align: center;
}
.el-menu--horizontal>.el-menu-item.is-active {
  border-bottom: none;
  padding-bottom: 0;
}

.el-menu--horizontal>.el-menu-item {
  height: 35px;
  line-height: 35px;
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}

</style>
