<template>
  <div class="main">
     <div style="height: 500px">
          <el-row style="margin-top: 50px">
            <el-col :span="24">
              <div class="sign-header">
                    <div>签到领积分</div>
                    <div style="margin-top: 10px;color:rgb(100,221,67)">积分可以兑换小礼品哦！</div>
              </div>
            </el-col>
          </el-row>

          <el-row type="flex" justify="space-between" class="sign-btn">
             <el-button type="primary" @click="todaySign()">签到</el-button>
             <div class="nowtime">{{today}}</div>
          </el-row>
          
          <el-row type="flex" :gutter="20" justify="center" class="week-time">
              <el-col :span="3" class="week-item" v-for="item in weeks" :key="item.date">
                    <h3>{{item.date}}</h3>
                    <i class="el-icon-circle-check" :style="{color: item.status?colorStyle:''}"></i>
              </el-col>
          </el-row>

          <el-row type="flex" justify="space-between" align="middle" class="points">
                <div>当前积分：0分</div>
                <el-button type="primary">积分兑换</el-button>
          </el-row>
     </div>
     <div style="height: 300px;margin-top:25px">
       <h3>签到规则：</h3>
       <p>
         每次签到1个积分，如果中间有一天间断来签到，重新开始计算连续签到到时间。<br>
         连续签到七天及其以上可以使用7个积分兑换一张优惠卷<br>
         连续签到七天及其以上可以使用10个积分兑换一张优惠卷<br>
       </p>
    </div>
  </div>
</template>

<script>
export default {
  name:'',
  data(){
   return {
      colorStyle: '#30c730',
      weeks:[]
   }
  },
  methods:{
     todaySign(){
         var today = parseInt(new Date().getDate())
         for(let i=0;i<this.weeks.length;i++){
           if(this.weeks[i].date == today){
              this.$set(this.weeks,i,
              {
                date :this.weeks[i].date,
                status :true
              })
           }
         }
         console.log(this.weeks)
     }
  },
  computed:{
    today:function () {
          //初始化日期时间
          var now = new Date()
          return now.getFullYear()+"-"+(parseInt(now.getMonth())+1)+"-"+now.getDate()
      }
  },
  mounted(){
          var now = new Date()
          var day = now.getDay()
          var oneDayTime = 24*60*60*1000
          var Monday = now.getTime()-(day-1)*oneDayTime
          var weeks = []
          for(var i=0;i<7;i++){
             var temp = new Date(Monday+i*oneDayTime)
             weeks.push(
               { date : temp.getDate(),
                 status :false})
          }
          this.weeks = weeks
          
          this.$set(this.weeks,0,
         { date : this.weeks[0].date,
           status :true})
  }
}
</script>

<style scoped>
.main{
  width: 970px;
  margin-left:auto;
  margin-right:auto;
}
.main > div{
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 12px rgb(197 234 166 / 1);
  background: white;
  border-radius: 20px;
}
.main .el-row{
    margin-top: 25px;
    width: 80%
}
.sign-header{
  display: flex;
  align-items: center;
  flex-direction: column;
  color: rgb(67,149,221);
}
.sign-header div:first-child{
  font-size: 20px;
  font-weight: 700;
}

.sign-btn .nowtime{
  font-size: 20px;
  font-weight: 600;
  line-height: 50px;
  text-align: right;
  color: rgb(67,149,221);
}
.el-button{
  width: 200px;
  height: 50px;
  border-radius: 10px;
}
.el-button--small{
  font-size: 15px;
  font-weight: 500;
}

.week-item{
  width: 108px;
  height: 120px;
  margin: 5px;
  background: #d8ede3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  color: #37485a;
  box-shadow: 0px 2px 12px rgb(189 243 247 / 69%);
  border: 2px solid #64c0cd;
}
.week-item i{
  font-size: 40px;
  color: #999999;
}

.points div{
  font-size: 18px;
}

.main > div:last-child p{
  line-height: 50px;
  color: #847ef8;
  font-size: 20px;
  margin-top: 20px;
}
.main > div:last-child h3{
  margin-top: 30px;
  font-size: 22px;
  color: #4395DD;
}
.active{
  color: #30c730 
}
</style>
