<template>
  <div style="width: 970px;margin-left:auto;margin-right:auto">
      <el-row>
          <el-col :span="24">
            <el-timeline class="timeline">
                <el-timeline-item v-for="(item,index) in remind_list" :key="index" :timestamp="item.time" placement="top">
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-card shadow="hover" style="width: 370px">
                            <div class="tap-top">
                                <img src="../../assets/img/medicine.png" alt="">
                                <div>
                                    <span>{{item.name}}</span>
                                    <span>{{item.number}}粒</span>
                                </div>
                            </div>
                            <el-divider style="margin: 15px"></el-divider>
                            <div style="display:flex;justify-content:center">
                                <el-button icon="el-icon-check" round class="btn" @click="changeStatus(item,index)" :disabled="item.status?true:false" :style="{'background':item.status?'#2fcd40':'#3e2fcd'}">
                                    {{item.status?'已服药':'服药'}}
                                </el-button>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="3"> 
                        <div :style="{'background':item.status?'#f4f4a1f5':'#dfe4e8'}" class="remind-tip">
                            <img v-if="item.status" src="../../assets/img//laughface.png" alt="" style="width:60px;margin-top:20px">
                            <img v-else  src="../../assets/img/cryface.png" alt="" style="width:60px;margin-top:20px">
                            <div :class="item.status? 'div-active': 'div-fail'" v-text="item.status? '今日已服药':'今日未服药'"></div>
                        </div>
                    </el-col>
                    <el-col :span="8" class="healthy-tip">
                        <div>
                            <span>健康Tip:</span>
                            <p>{{healthy_tip[index]}}</p>
                        </div>
                    </el-col>
                </el-row>
                </el-timeline-item>
            </el-timeline>
          </el-col>
      </el-row>
      <el-row>
          <el-col class="remind-add">
             <button @click="dialogFormVisible = true" class="btn-add">
                 <i class="el-icon-plus"></i>
                 <span>添加提醒</span>
             </button>
             <!--服药提醒框-->
             <el-dialog title="服药提醒" :visible.sync="dialogFormVisible">
                        <el-form :model="remindForm">
                            <el-form-item label="服药时间" :label-width="'120px'">
                                <el-time-select
                                v-model="remindForm.time"
                                :picker-options="{
                                    start: '00:00',
                                    step: '00:15',
                                    end: '23:59'
                                }"
                                placeholder="选择时间">
                                </el-time-select>
                            </el-form-item>
                            <el-form-item label="药品名称" :label-width="'120px'">
                                <el-input v-model="remindForm.name" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="服用剂量" :label-width="'120px'">
                                <el-input v-model="remindForm.number" autocomplete="off"></el-input>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogFormVisible = false">取 消</el-button>
                            <el-button type="primary" @click="submit">确 定</el-button>
                        </div>
            </el-dialog>
          </el-col>
      </el-row>
  </div>

</template>

<script>
export default {
  name:'',
  data(){
   return {
      remind_list:[        //服药提醒列表
          {time: '11:08',name: '阿昔洛韦',number: 1,status: true},
          {time: '11:08',name: '红霉素',number: 2,status: false},
          {time: '11:08',name: '纳爱斯',number: 3,status: false}
      ],
      healthy_tip:[
          "6:30起床一杯水早起喝杯水，既可以补充身体对水分的需要，又可以冲刷胃肠道，还能美容养颜，清醒大脑。记得出门之前喝一杯温水哦！",
          "8:30一杯水,第二杯水有补充身体水分的作用。",
          "11:00学习间隙一杯水,学习一段时间后，要趁间隙起来动动时喝水解乏放松。",
          "12:50饭后一杯水,用完午餐半小时后喝水，可以加强消化。想要减肥的小仙女还可以起到减肥的作用哦~",
          "15:00一杯水,在昏昏欲睡的下午，一杯水可以提神醒脑。",
          "17:30一杯水,这时一杯水可以增加饱腹感，晚饭就不会暴饮暴食啦~",
          "22:00一杯水,睡前半小时到一小时的一杯水，有解毒、排泄、消化、促进血液循环的作用。但切记不要过量哦！",
          "隔夜开水和经久煮的水以及保温瓶中非当天的开水中，均含有一种叫亚硝酸铵的物质，此物是强致癌物。",
          "烘烤食物时燃料中会产生大量的二氧化碳、二氧化硫等致癌物质，这些物质会遗留在食物上，所以人吃多了极易患癌。"
      ],
      dialogFormVisible: false,
      remindForm:{
          time: '',
          name: '',
          number: 0,
          status: false
      }
   }
  },
  methods: {
      changeStatus(item,index){    //点击服药按钮，发送ajax请求更新数据库
            console.log(item,index)
            let temp = {
                "time":this.remind_list[index].time,
                "name":this.remind_list[index].name,
                "number":this.remind_list[index].number,
                "status":true
            }
            this.$set(this.remind_list,index,temp)
      },
      submit(){
          this.dialogFormVisible = false
          this.remind_list.push(this.remindForm)
          this.remindForm = {
          time: '',
          name: '',
          number: 0,
          status: false
          }
      }
  }
}
</script>

<style scoped>
.tap-top{
    display: flex;
}
.tap-top img{
    width: 60px;
    box-shadow: 0 2px 12px 0 rgba(147, 238, 185, 0.42);
}
.tap-top span{
    text-align: center;
    line-height: 60px;
    font-weight: 400;
    font-size: 19px;
}
.tap-top div{
    display:flex; 
    justify-content:space-between;
    width:280px;
    margin-left:20px;
}
.timeline{
    width: 1200px;
}
.timeline >>> .el-card__body{
    padding: 10px;
}
.timeline >>> .el-divider--horizontal{
    margin: 10px 0;
}
.timeline .btn{
    color: #FFFFFF;
    width: 120px;
    height: 40px;
}
.timeline .el-button--mini, .el-button--small{
    font-size: 15px;
}
.timeline >>> .el-timeline-item__timestamp{
    font-size: 18px;
}
.timeline >>> .el-timeline-item__node{
    background-color: #4cb8e3;
    box-shadow: 0 2px 12px 0 rgb(62 184 175 / 80%);
}

/* .tip-fail{
    height: 141px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #dfe4e8;
    box-shadow: 0 2px 12px 0 rgba(224, 164, 164,1);
}
.tip-active{
    height: 141px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f4f4a1f5;
} */
.remind-tip{
    height: 141px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 2px 12px 0 rgba(224, 164, 164,1);
}
.div-fail{
    font-size: 18px;
    color: grey;
    margin-top: 10px;
}
.div-active{
    font-size: 18px;
    color: #c0b922;
    margin-top: 10px;
}

.remind-add{
    width:900px;
    height:50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.remind-add .btn-add{
    border-radius: 20px;
    width: 500px;
    height: 40px;
    border: 2px solid blue;
    background: #FFFFFF;
    font-size: 17px;
    font-weight: 600;
    color: #4519d7;
}
.btn-add >>> .el-icon-plus:before{
    font-size: 17px;
}

.healthy-tip{
    height: 143px;
    background: #fff;
    display: flex;
    align-items: center;
}
.healthy-tip span{
    font-size: 20px;
    font-weight: 400;
    color:#42ca1d;
}
.healthy-tip p{
    line-height: 22px;
    font-size: 14px;
    margin-top: 10px;
    color: #af7e39;
}
</style>
