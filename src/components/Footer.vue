<template>
<div id="note">
  <span> © 2018 Chuanxun Wu </span>
  <a href="javascript:window.scrollTo(0,0)" >TOP</a>
</div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
    };
  }
};
</script>

<style scoped>
#note{
  margin-top: 6px;
  color: white;
  width: 100%;
}
#note>span{
  float: left;
  margin-left: 10%;
}
#note>a{
  float: right;
  color: white;
  margin-right: 10%;
}
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: none;
}
</style>
