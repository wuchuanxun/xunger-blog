<template>
  <div class="ar-recorder">
    <icon
      class="start_record"
      :name="iconButtonType"
      :class="{
        'ar-icon--rec': isRecording,
        'ar-icon--pulse': isRecording
      }"
      @click.native="startRecorder"/>
    <icon
      class="stop_record"
      name="stop"
      @click.native="stopRecorder"/>
    <div>
      <p v-show="isRecording">录制中</p>
      <p v-show="isRecording==false">时长：{{recordedTime}}s</p>
    </div>
    <div class="block">
      <el-slider
        v-model="TimeRange"
        range
        show-stops>
      </el-slider>
    </div>
    <audio :src="audio_url" controls="controls">
      Your browser does not support the audio element.
    </audio>
  </div>
</template>


<script>
import _ from 'lodash';
const MicRecorder = require('mic-recorder-to-mp3');
import icon from "../components/Icon";

export default {
  data(){
    return{
      audio_type:undefined,
      audio_url:undefined,
      audio_buffer:undefined,
      isRecording:false,
      recordedTime:0,
      TimeRange:[0,100],
      iconButtonType:'mic',
      recorder:new MicRecorder({
        bitRate: 128
      })
    }
  },
  methods:{
    startRecorder(){
      this.recorder.start().then(() => {
        this.isRecording=true;
      }).catch((e) => {
        console.error(e);
      });
    },
    stopRecorder(){
      this.recorder
        .stop()
        .getMp3().then(([buffer, blob]) => {
          this.audio_buffer = new Int8Array(blob.size);
          var acIndex=0;
          for (let index = 0; index < buffer.length; index++) {
            this.audio_buffer.set(buffer[index],acIndex);
            acIndex+=buffer[index].length;
          }
          this.audio_type=blob.type;
          const file = new File([this.audio_buffer], 'me-at-thevoice.mp3', {
            type: this.audio_type,
            lastModified: Date.now()
          });
          this.audio_url=URL.createObjectURL(file);
          this.recordedTime=this.audio_buffer.length/16000;
          this.isRecording=false;     
        }).catch((e) => {
          alert('We could not retrieve your message');
          console.log(e);
        });
    }
  },
  watch:{
    TimeRange(val){
      if(this.audio_buffer && this.audio_type){
        let len=this.audio_buffer.length;
        let bt=Math.floor(len*val[0]/100);
        let et=Math.floor(len*val[1]/100);
        const file = new File([this.audio_buffer.slice(bt,et)], 'me-at-thevoice.mp3', {
          type: this.audio_type,
          lastModified: Date.now()
        });
        this.audio_url=URL.createObjectURL(file);
        this.recordedTime=(et-bt)/16000;
        console.log(this.audio_buffer.slice(bt,bt+20));
      }
    }
  },
  components:{
    icon
  },
  name: 'collection'
}
</script>

<style scoped>
div.ar-recorder{
  text-align: center;
}
div#icon{
    display:inline-block;
    vertical-align: middle;
    fill: #747474;
    border-radius: 50%;
    border: 1px solid #05CBCD;
    background-color: #FFFFFF;
    padding: 5px;
    margin-left: 4px;
    margin-right: 4px;
    cursor: pointer;
}
div#icon.start_record {
    height: 45px;
    width: 45px;
}
div#icon.stop_record {
    height: 30px;
    width: 30px;
}
</style>
