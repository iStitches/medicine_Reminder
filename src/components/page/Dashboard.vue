<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-card shadow="hover" class="mgb20" style="height:252px;">
                    <div class="user-info">
                        <img src="../../assets/img/img.jpg" class="user-avator" alt />
                        <div class="user-info-cont">
                            <div class="user-info-name">{{name}}</div>
                            <div>今天也要好好吃药！</div>
                        </div>
                    </div>
                    <div class="user-info-list">
                        上次服药时间：
                        <span>2019-11-01</span>
                    </div>
                    <div class="user-info-list">
                        上次服药地点：
                        <span>东莞</span>
                    </div>
                </el-card>
                <el-card shadow="hover" style="height:373px;">
                    <div slot="header" class="clearfix">
                        <span>服药排行榜</span>
                        <i class="el-icon-lx-top"></i>
                    </div>
                    <div v-for="(item,index) in medicine_list" :key="index">
                       <span>{{item.name}}</span>
                       <el-progress :percentage="item.percentage" :color="medicine_percentage_list[index]"></el-progress>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="16">
                <el-row :gutter="20" class="mgb20">
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-1">
                                <i class="el-icon-lx-people grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">完善资料</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-2">
                                <i class="el-icon-lx-notice grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">服药提醒</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-3">
                                <i class="el-icon-lx-goods grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">我的订单</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-row :gutter="20" class="mgb20" type="flex" justify="space-around">
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-4">
                                <i class="el-icon-lx-calendar grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">积分签到</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-5">
                                <i class="el-icon-lx-question grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">健康资讯</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-6">
                                <i class="el-icon-lx-calendar grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">健康日历</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-card shadow="hover" style="height:403px;">
                    <div slot="header" class="clearfix">
                        <span>待办事项</span>
                        <el-button style="float: right; padding: 3px 0" type="text" @click="dialogFormVisible=true;dialogForm.isAdd=true">添加</el-button>
                        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
                            <el-form :model="dialogForm">
                                <el-form-item label="代办名称" :label-width="'120px'">
                                <el-input v-model="dialogForm.title" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="状态" :label-width="'120px'">
                                      <el-radio v-model="dialogForm.status"  :label=true>已完成</el-radio>
                                      <el-radio v-model="dialogForm.status"  :label=false>待办</el-radio>
                                </el-form-item>
                            </el-form>
                            <div slot="footer" class="dialog-footer">
                                <el-button @click="dialogFormVisible = false">取 消</el-button>
                                <el-button type="primary" @click="submit">确 定</el-button>
                            </div>
                        </el-dialog>
                    </div>
                    <el-table :show-header="false" :data="todoList" style="width:100%;">
                        <el-table-column width="40">
                            <template slot-scope="scope">
                                <el-checkbox v-model="scope.row.status"></el-checkbox>
                            </template>
                        </el-table-column>
                        <el-table-column>
                            <template slot-scope="scope">
                                <div
                                    class="todo-item"
                                    :class="{'todo-item-del': scope.row.status}"
                                >{{scope.row.title}}</div>
                            </template>
                        </el-table-column>
                        <el-table-column width="160px">
                            <template slot-scope="scope">
                              <div style="display:flex">
                                  <el-button @click="edittodoList(scope.$index,scope.row)">
                                     <i class="el-icon-edit"></i>编辑
                                  </el-button>
                                  <el-button @click="deletetodoList(scope.$index,scope.row)">
                                     <i class="el-icon-delete"></i>删除
                                  </el-button>
                              </div>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="12">
                <el-card shadow="hover">
                    <basic-charts  :option="options" :id="'bloodPressure'"></basic-charts>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card shadow="hover">
                    <basic-charts :option="options2" :id="'heartJump'"></basic-charts>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import bus from '../common/bus';
import BasicCharts from './BaseCharts.vue'
export default {
    name: 'dashboard',
    data() {
        return {
            name: localStorage.getItem('ms_username'),
            todoList: [
                {
                    title: '吃药',
                    status: false
                },
                {
                    title: '吃药',
                    status: false
                },
                {
                    title: '吃药',
                    status: false
                },
                {
                    title: '吃药',
                    status: false
                },
                {
                    title: '吃药',
                    status: true
                },
                {
                    title: '吃药',
                    status: true
                }
            ],
            data: [
                {
                    name: '2018/09/04',
                    value: 1083
                },
                {
                    name: '2018/09/05',
                    value: 941
                },
                {
                    name: '2018/09/06',
                    value: 1139
                },
                {
                    name: '2018/09/07',
                    value: 816
                },
                {
                    name: '2018/09/08',
                    value: 327
                },
                {
                    name: '2018/09/09',
                    value: 228
                },
                {
                    name: '2018/09/10',
                    value: 1065
                }
            ],
            options: {        //血压的记录
                chart: {
                    type: 'spline'
                },
                title: {
                    text: '血压记录'
                },
                subtitle: {
                    text: '近期血压变化'
                },
                xAxis: {
                    type: 'datetime',
                    title: {
                        text: null
                    }
                },
                colors: ['#6CF', '#39F', '#06C', '#036', '#000'],
                yAxis: {
                    title: {
                        text: '血压值(mmHg)'
                    },
                    min: 70
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
                },
                plotOptions: {
                    spline: {
                        marker: {
                            enabled: true
                        }
                    }
                },
                series: [{
                    name: '对应时间xxx的血压变化',
                    data: [
                        [Date.UTC(1970,  9, 27), 71  ],
                        [Date.UTC(1970, 10, 10), 73  ],
                        [Date.UTC(1970, 10, 18), 75  ],
                        [Date.UTC(1970, 11,  2), 76  ],
                        [Date.UTC(1970, 11,  9), 76  ],
                        [Date.UTC(1970, 11, 16), 80  ],
                        [Date.UTC(1970, 11, 28), 86  ],
                        [Date.UTC(1971,  0,  1), 88  ],
                        [Date.UTC(1971,  0,  8), 73  ],
                        [Date.UTC(1971,  0, 12), 90  ],
                        [Date.UTC(1971,  0, 27), 91  ],
                        [Date.UTC(1971,  1, 10), 97  ],
                        [Date.UTC(1971,  1, 18), 110 ],
                        [Date.UTC(1971,  1, 24), 120 ],
                        [Date.UTC(1971,  2,  4), 90  ],
                        [Date.UTC(1971,  2, 11), 95  ],
                        [Date.UTC(1971,  2, 15), 98  ],
                        [Date.UTC(1971,  2, 25), 84  ],
                        [Date.UTC(1971,  3,  2), 82  ],
                        [Date.UTC(1971,  3,  6), 80  ],
                        [Date.UTC(1971,  3, 13), 76  ],
                        [Date.UTC(1971,  4,  3), 74  ],
                        [Date.UTC(1971,  4, 26), 72  ],
                        [Date.UTC(1971,  5,  9), 70  ],
                        [Date.UTC(1971,  5, 12), 0   ]
                    ]
                }]
            },
            options2: {       //心率的记录
                chart: {
                    type: 'column'
                },
                title: {
                    text: '近期心率'
                },
                subtitle: {
                    text: '近一个周的心率测量记录'
                },
                xAxis: {
                    categories: [
                        '周一','周二','周三','周四','周五','周六','周日'
                    ],
                    crosshair: true
                },
                yAxis: {
                    min: 50,
                    max: 130,
                    title: {
                        text: '心率 (次/分钟)'
                    }
                },
                tooltip: {
                    // head + 每个 point + footer 拼接成完整的 table
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        borderWidth: 0
                    }
                },
                series: [{
                    name: 'xxx用户名',
                    data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
                }]
            },
            medicine_list:[     //展示服用药品列表----只展示 top7
                {name:'阿司匹林',percentage: 71.3},
                {name:'布洛芬',percentage: 22.1},
                {name:'吗啡',percentage: 33.3},
                {name:'消炎痛',percentage: 25.4},
                {name:'吗啡',percentage: 33.3},
                {name:'消炎痛',percentage: 25.4},
                 {name:'消炎痛',percentage: 25.4}
            ],
            medicine_percentage_list:['#42b983','#f1e05a','#f56c6c','#f56cdc','#8c61cd','#2bb2d3','#a5b942'],
            dialogFormVisible: false,
            dialogForm:{
                title: '',
                status:false,
                isAdd: false,
                editId: -1
            }
        };
    },
    components: {
        BasicCharts
    },
    computed: {
    },
    // created() {
    //     this.handleListener();
    //     this.changeDate();
    // },
    // activated() {
    //     this.handleListener();
    // },
    // deactivated() {
    //     window.removeEventListener('resize', this.renderChart);
    //     bus.$off('collapse', this.handleBus);
    // },
    methods: {
        changeDate() {
            const now = new Date().getTime();
            this.data.forEach((item, index) => {
                const date = new Date(now - (6 - index) * 86400000);
                item.name = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
            });
        },
        // handleListener() {
        //     bus.$on('collapse', this.handleBus);
        //     // 调用renderChart方法对图表进行重新渲染
        //     window.addEventListener('resize', this.renderChart);
        // },
        // handleBus(msg) {
        //     setTimeout(() => {
        //         this.renderChart();
        //     }, 200);
        // },
        // renderChart() {
        //     this.$refs.bar.renderChart();
        //     this.$refs.line.renderChart();
        // }
        submit(){
           this.dialogFormVisible = false
           let curData={'title':this.dialogForm.title,'status':this.dialogForm.status}
           console.log(this.dialogForm)
           if(this.dialogForm.isAdd)
              this.todoList.push(curData)
           else
              this.$set(this.todoList,this.dialogForm.editId,curData)
           this.dialogForm.title=''
           this.dialogForm.status=false
           this.dialogForm.isAdd=false
           this.dialogForm.editId=-1
        },
        edittodoList(index,row){
           this.dialogFormVisible = true
           this.dialogForm.title = row.title
           this.dialogForm.status = row.status
           this.dialogForm.isAdd = false
           this.dialogForm.editId = index
        },
        deletetodoList(index,row){
           this.$delete(this.todoList,index)
        }
    }
};
</script>


<style scoped>
.el-row {
    margin-bottom: 20px;
}

.grid-content {
    display: flex;
    align-items: center;
    height: 100px;
}

.grid-cont-right {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #999;
}

.grid-num {
    font-size: 18px;
    font-weight: bold;
}

.grid-con-icon {
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
}

.grid-con-1 .grid-con-icon {
    background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
    background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
    color:  rgb(100, 213, 114);
}

.grid-con-3 .grid-con-icon {
    background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
    color: rgb(242, 94, 67);
}

.grid-con-4 .grid-con-icon {
    background: rgb(187,162, 53);
}

.grid-con-4 .grid-num {
    color: rgb(187,162, 53);
}

.grid-con-5 .grid-con-icon {
    background: rgb(193,70, 174);
}

.grid-con-5 .grid-num {
    color: rgb(193,70, 174);
}

.grid-con-6 .grid-con-icon {
    background: rgb(132,80,240);
}

.grid-con-6 .grid-num {
    color: rgb(132,80,240);
}

.user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
}

.user-avator {
    width: 120px;
    height: 120px;
    border-radius: 50%;
}

.user-info-cont {
    padding-left: 50px;
    flex: 1;
    font-size: 14px;
    color: #999;
}

.user-info-cont div:first-child {
    font-size: 30px;
    color: #222;
}

.user-info-list {
    font-size: 14px;
    color: #999;
    line-height: 25px;
}

.user-info-list span {
    margin-left: 70px;
}

.mgb20 {
    margin-bottom: 20px;
}

.todo-item {
    font-size: 14px;
}

.todo-item-del {
    text-decoration: line-through;
    color: #999;
}

.schart {
    width: 100%;
    height: 300px;
}


.el-icon-lx-top:before{
    color: #e75050;
    font-weight: bold;
    margin-left: 5px;
}
</style>
