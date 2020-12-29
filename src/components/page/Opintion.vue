<template>
    <div class="main">
       <el-row :gutter="20" type="flex">
            <el-col class="top-board" v-for="(item,index) in top_board" :key="index">
              <div>
                <div class="wrap-out" :style="{'background':item.outcolor}">
                  <div class="wrap-inner" :style="{'background':item.innercolor}">
                    <img :src="top_board[index].imgsrc" alt="">
                  </div>
                </div>
              </div>
              <h2>{{top_board[index].progress}}</h2>
              <span>{{top_board[index].des}}</span>
            </el-col>
       </el-row>
       <el-row :gutter="20" type="flex">
            <el-col  :span="17"  class="chart-board">
               <div class="chart-board-header">
                  <div class="title">
                    <h4>生活数据</h4>
                    <span>记录您的每日健康情况</span>
                  </div>
                  <div class="icon" v-for="(item,index) in table_icon" :key="index">
                    <img :src="item.imgsrc" alt="">
                    <span>{{item.progress}}%</span>
                    <h6>{{item.des}}</h6>
                  </div>
                  <div class="dropdown">
                    <el-dropdown>
                      <el-button style="width: 96px;height: 41px;border-radius: 15px;font-size:13px">
                        Weekly<i class="el-icon-arrow-down el-icon--right"></i>
                      </el-button>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>link1</el-dropdown-item>
                        <el-dropdown-item>link2</el-dropdown-item>
                        <el-dropdown-item>link3</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </div>
               </div>
               <div style="display: flex">
                   <basic-charts :width="'420px'" :height="'360px'" :option="option1" :time="time"></basic-charts>
                   <basic-charts :width="'450px'" :height="'360px'" :option="option2" :time="time"></basic-charts>
               </div>
            </el-col>
            <el-col  :span="7" class="chart-board;overflow:hidden">
                  <el-calendar v-model="value">
                  </el-calendar>
            </el-col>
       </el-row>
    </div>
</template>

<script>
import BasicCharts from './BaseCharts.vue'
import Highcharts from 'highcharts'

export default {
  name:'',
  data(){
   return {
      top_board:[   //顶部栏数据
        {imgsrc: require("../../assets/img/阳光.png"),progress:"3 Hours",des:"Weekly Progress",innercolor:"#6CC51D",outcolor:"#C0FF86"},
        {imgsrc: require("../../assets/img/运动.png"),progress:"42%",des:"Calories Burn",innercolor:"#FF285C",outcolor:"#FFC3D2"},
        {imgsrc: require("../../assets/img/水果.png"),progress:"3 Left",des:"Diet Programs",innercolor:"#FF9432",outcolor:"#FFD5AE"},
        {imgsrc: require("../../assets/img/减重.png"),progress:"10Kg",des:"Weighting Potency",innercolor:"#1EA7C5",outcolor:"#EEFCFF"},
        {imgsrc: require("../../assets/img/检查.png"),progress:"5 Times",des:"Self Scanning",innercolor:"#37D1BF",outcolor:"#F2FFFD"}
      ],
      table_icon:[  //图标表头
        {imgsrc: require('../../assets/img/跑步.png'), progress:45, des:"Running"},
        {imgsrc: require('../../assets/img/骑车.png'), progress:27, des:"Cycling"},
        {imgsrc: require('../../assets/img/瑜伽.png'), progress:86, des:"Yoga"}
      ],
      time: '2',
      option1:{     //图表1
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: '运动情况'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              style: {
                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
              }
            }
          }
        },
        series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [{
            name: '跑步',
            y: 61.41,
            sliced: true,
            selected: true
          }, {
            name: '篮球',
            y: 11.84
          }, {
            name: '游泳',
            y: 10.85
          }, {
            name: '网球',
            y: 4.67
          }, {
            name: '骑行',
            y: 4.18
          }]
        }]
      },
      option2:{
	chart: {
		type: 'areaspline'
	},
	title: {
		text: '饮食情况'
	},
	legend: {
		layout: 'vertical',
		align: 'left',
		verticalAlign: 'top',
		x: 150,
		y: 100,
		floating: true,
		borderWidth: 1,
		backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
	},
	xAxis: {
		categories: [
			'周一','周二','周三','周四','周五','周六','周日'
		],
		plotBands: [{ // 标识出周末
			from: 4.5,
			to: 6.5,
			color: 'rgba(68, 170, 213, .2)'
		}]
	},
	yAxis: {
		title: {
			text: '摄入量 单位'
		}
	},
	tooltip: {
		shared: true,
		valueSuffix: ' 单位'
	},
	plotOptions: {
		areaspline: {
			fillOpacity: 0.5
		}
	},
	series: [{
		name: '蛋白质',
		data: [3, 4, 3, 5, 4, 10, 12]
	}, {
		name: '维生素',
		data: [1, 2, 4, 5, 3, 3 , 4]
	}, {
		name: '脂肪',
		data: [2, 3, 6, 6, 4, 1, 4]
	}, {
		name: '碳水化合物',
		data: [4, 3, 4, 3, 3, 5, 4]
	}]
}
   }
  },
  components:{
      BasicCharts
  },
  mounted(){
      this.time='5'
  }
}
</script>

<style scoped>
.main{
  font-family: 'PingFang SC', "Helvetica Neue", Helvetica, "microsoft yahei", arial, STHeiTi, sans-serif;;
}
.chart-board{
   background: rgb(255, 255, 255);
   height: 655px;
   margin: 10px;
   border-radius: 15px;
}
.chart-board-header{
  height: 128px;
  padding: 24px 30px 0px 30px;
  display: flex;
  align-items: center;
}
.chart-board-header .title{
  width: 277.77px;
  height: 55.2px;
  margin-right: 146px;
}
.chart-board-header .title h4{
  font-size: 20px;
  line-height: 1.5;
  color: #000000;
  font-weight: 500;
}
.chart-board-header .title span{
  font-size: 13px;
  line-height: 1.4;
  color: #000;
}
.chart-board-header .icon{
  width: 74px;
  height: 58px;
  position: relative;
  margin-right: 48px;
}
.chart-board-header .icon img{
  width: 24px;
  height: 24px;
}
.chart-board-header .icon span{
  height: 24px;
  width: 50px;
  font-weight: 600;
  font-size: 18px;
  color: #000000;
  position: absolute;
  top: 0px;
  margin-left: 5px;
}
.chart-board-header .icon h6{
  width: 49px;
  height: 17px;
  font-size: 12px;
  line-height: 1.3;
  color: #000;
  font-weight: 500;
  position: absolute;
  right: 0px;
}
.el-calendar__body{
  padding: 46px 20px 35px;
  height: 500px;
}
@import "../../assets/css/opintion.css"
</style>