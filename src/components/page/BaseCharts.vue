<template>
   <div :option="option" :id="id" :width="width" :height="height"></div>
</template>

<script>
import Highcharts from 'highcharts'

export default {
  name:'',
  data(){
   return {

   }
  },
  props:{
      option:{
          type: Object,
          default(){
              return {}
          }
      },
      id: String,
      width: {
          type: String,
          default: '460px'
      },
      height: {
          type: String,
          default: '780px'
      }
  },
  components:{
      Highcharts
  },
  watch:{
      option(){
          Highcharts.chart(this.id,this.option);
      }
  },
  mounted(){
      Highcharts.chart(this.id,this.option)
  }
}
</script>

<style scoped>

</style>
