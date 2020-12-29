<template>
  <div>
     <div :option="option" :id="id" :time="time" :style="{'width':width,'height':height,'margin':'0 auto'}"></div>
  </div>
</template>

<script>
import Highcharts from 'highcharts'
import {v4 as uuidv4} from 'uuid'

export default {
  name:'',
  data(){
   return {
      id: ''
   }
  },
  props:{
      option:{
          type: Object,
          default(){
              return {}
          }
      },
      width: {
          type: String,
          default: '584px'
      },
      height: {
          type: String,
          default: '440px'
      },
      time:{
          type: String,
          default: ''
      }
  },
  components:{
      Highcharts
  },
  watch:{
      time(){
          Highcharts.chart(this.id,this.option)
      }
  },
  mounted(){
      console.log("Highchart 初始化")
      Highcharts.chart(this.id,this.option)
  },
  created(){
      this.id = uuidv4()
  }
}
</script>

<style scoped>

</style>
