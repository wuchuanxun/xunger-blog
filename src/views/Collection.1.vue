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
      <p>{{isRecording}}</p>
      <p>{{recordedTime}}</p>
    </div>
    <div class="block">
      <el-slider
        v-model="TimeRange"
        range
        show-stops>
      </el-slider>
    </div>
    <audio :src="audio" controls="controls">
      Your browser does not support the audio element.
    </audio>
  </div>
</template>


<script>
const MicRecorder = require('mic-recorder-to-mp3');
import icon from "../components/Icon";

export default {
  data(){
    return{
      audio:undefined,
      isRecording:false,
      recordedTime:0,
      TimeRange:[30,80],
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
          console.log('sd');
          // do what ever you want with buffer and blob
          // Example: Create a mp3 file and play
          const file = new File(buffer.slice(20,200), 'me-at-thevoice.mp3', {
            type: blob.type,
            lastModified: Date.now()
          });
          console.log(buffer.slice(1,10));
          console.log(blob);
          const player = new Audio(URL.createObjectURL(file));
          player.play();
          this.audio=player;
          console.log(buffer.length)

          console.log('sd2');
          this.isRecording=false;     
        }).catch((e) => {
          alert('We could not retrieve your message');
          console.log(e);
        });
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
    height: 35px;
    width: 35px;
}
</style>
