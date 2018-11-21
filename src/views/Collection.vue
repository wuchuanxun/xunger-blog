<template>
  <div class="collection">
    <el-row :gutter="24" style="margin-left:6%;margin-right:6%">
      <router-link v-for="(art,index) in arts" :key="index" :to="art">
        <el-col :span="6">
          <el-card :body-style="{ margin: '10px',padding: '100px 10px 10px 10px'}">
            <div>
              <h2 v-text=art></h2>
              <span v-text="art"></span>
              <div class="bottom clearfix">
                <p class="line"></p>
                <el-tag size="mini" v-for="i in [1,2]" :key="i" style="margin-right:5px">
                  标签{{i}}
                </el-tag>
              </div>
            </div>
          </el-card>
        </el-col>
      </router-link>
    </el-row>
  </div>
</template>

<script>
export default {
  data(){
    return{
      arts:[
        "Tensorflow","Github","Apple","Linux","Web","Note","成语"
      ]
    }
  },
  name: 'collection'
}
</script>

<style scoped>
.el-col.el-col-6{
  padding: 0 15px 15px 15px;
}
p.line{
  height: 1px;
  margin-left: -5px;
  margin-right: -5px;
  border-bottom: 1px solid rgba(100, 100, 100,0.1);
}
</style>
