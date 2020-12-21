<template>
    <div class="main">
        <el-row>
            <el-col :span="16">
                <div style="color: #333;font-weight: 400;font-size: 34px;margin-left: 30px">资讯频道</div>
            </el-col>
        </el-row>
        <el-row type="flex" justify="center">
            <el-col :span="14" class="carousel-pic">
                <el-carousel indicator-position="outside">
                    <el-carousel-item v-for="item in img_list" :key="item">
                    <img :src="item" alt="">
                    </el-carousel-item>
                </el-carousel>
            </el-col>
            <el-col :span="9" class="head-news">
                    <div class="tag">今日推荐</div>
                    <a href="http://news.39.net/shwx/201218/8508224.html">全球新冠肺炎疫情简报：法国总统马克龙新冠检测呈阳性；瑞典国王承认抗疫失败，人民极端痛苦</a>
                    <span>当地时间17日上午，据法国总统府爱丽舍宫发布的公告，法国总统马克龙当日得知其新冠病毒核酸检测结果呈阳性.....</span>
            </el-col>
        </el-row>
        <el-row type="flex" justify="center">
            <el-col :span="16" class="body-news" style="width: 928px">
               <ul>
                   <li v-for="(item,index) in news_list" :key="index">
                       <img :src="item.imgsrc" alt="">
                       <div class="detail">
                           <a :href="item.link">{{item.title}}</a>
                           <p>{{item.describe}}</p>
                           <i class="el-icon-time">{{item.time}}</i>
                       </div>
                   </li>
               </ul>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name:'',
  data(){
   return {
       img_list:[
           'https://image.39.net/auth/w/20180423/38394.jpg',
           'https://image.39.net/auth/f/20181106/56392.jpg',
           'https://image.39.net/auth/f/20180428/43311.jpg',
           'https://image.39.net/auth/f/20181106/57091.jpg',
           'https://image.39.net/auth/f/20180410/23834.jpg',
           'https://image.39.net/auth/f/20180428/42914.jpg'
       ],
       news_list:[
           {
               imgsrc: 'https://image.39.net/auth/w/20200318/61500.jpg',
               link:'http://news.39.net/a/201218/8507646.html',
               title:'31省区市新增确诊12例，其中本土1例在四川',
               describe: '12月17日0—24时，31个省（自治区、直辖市）和新疆生产建设兵团报告新增确诊病例12例，其中境外输入病例11例（上海4例，广东4例，山西1例，河南1例，云南1例），本土病例1例（在四川）；无新增死亡病例；无新增疑似病例。',
               time: '2020-12-18'
           },
           {
               imgsrc: 'http://n.sinaimg.cn/sinakd20201219s/400/w1680h1120/20201219/cf8f-kfnaptu1678407.jpg',
               link:'http://news.39.net/a/201218/8507646.html',
               title:'青岛六医举行重量级学术会议 助力全省感染性疾病防治工作',
               describe: '12月17日0—24时，31个省（自治区、直辖市）和新疆生产建设兵团报告新增确诊病例12例，其中境外输入病例11例（上海4例，广东4例，山西1例，河南1例，云南1例），本土病例1例（在四川）；无新增死亡病例；无新增疑似病例。',
               time: '2020-12-18'
           },
           {
               imgsrc: 'https://pimg.39.net/PictureLib/A/f76/20200120/org_8883267.png',
               link:'http://news.39.net/qwfb/200122/7771482.html',
               title:'新型冠状病毒肺炎跟SARS区别是什么？',
               describe: '钟南山：现在出现的新型冠状病毒，既跟SARS不一样，也跟中东呼吸综合征不一样，是完全不同性质的一个病毒。',
               time: '2020-12-18'
           },
           {
               imgsrc: 'https://pimg.39.net/PictureLib/A/f76/20200120/org_8883268.png',
               link:'http://news.39.net/qwfb/200122/7771482.html',
               title:'病例集中对防控来说是好消息吗？',
               describe: '钟南山：任何急性的传染病出现都不是好消息！在一定意义上从流行病学看，它不单是集中在武汉，而且集中在两个区，这两个区大概占了45%。这两个区有一个特点，有一个比较大的所谓海鲜市场。',
               time: '2020-12-18'
           },
           {
               imgsrc: 'https://pimg.39.net/PictureLib/A/f76/20200120/org_8883281.jpg',
               link:'http://news.39.net/qwfb/200122/7771482.html',
               title:'新型冠状病毒了解到什么程度？',
               describe: '钟南山：现在对它的了解还是很不够。我们只能从原则上，第一，它是一个新型的冠状病毒。它引起的一些症状，跟以前SARS有些相似。第二，它的源头是什么动物，基本上还不清楚。',
               time: '2020-12-18'
           },
           {
               imgsrc: 'https://pimg.39.net/PictureLib/A/f76/20200120/org_8883278.jpg',
               link:'http://news.39.net/qwfb/200122/7771482.html',
               title:'出现症状就一定要去医院治疗吗？',
               describe: '钟南山：一个是去过武汉或者说家里边有从武汉过来的，这是一个前提。另外，自己有发烧，这个就要警惕了，必须到发烧门诊去看，同时，必要的时候做核酸检测。',
               time: '2020-12-18'
           },
           {
               imgsrc: 'https://pimg.39.net/PictureLib/A/f76/20200120/org_8883269.png',
               link:'http://news.39.net/jbyw/200120/7768815.html',
               title:'如何保护自己和他人远离疾患？',
               describe: '洗手。咳嗽或打喷嚏后，护理患者后，准备食物前、中、后，用餐前，上厕所后，当手脏了时，接触动物或处理动物的粪便后，应该及时洗手。',
               time: '2020-12-18'
           }
       ]
   }
  },
  methods:{
  }
}
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .main{
      background: #FFFFFF;
      width: 970px;
      margin-left: auto;
      margin-right: auto;
  }
  .carousel-pic img{
      width: 100%;
      height: 100%;
  }
  .head-news{
      position: relative;
      height: 300px;
      background: #F7F7F7;
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 40px;
  }
  .head-news a{
      font-size: 24px;
      font-weight: 400;
      color: #333;
      margin-top: 30px;
      width: 300px;
      height: 160px;
  }
  .head-news span{
      margin-top: 5px;
      font-size: 16px;
      width: 300px;
      line-height: 26px;
      color: #666;
  }
  .head-news .tag{
      font-size: 16px;
      width: 87px;
      height: 28px;
      line-height: 28px;
      text-indent: 16px;
      color: #fff;
      background: url(https://image.39.net/dist/common/v2019/pc/channel/images/icon.png) -270px -60px no-repeat;
      position: absolute;
      right: 0;
      top: 6px;
  }
  .body-news li{
      height: 144px;
      margin-top: 30px;
      overflow: hidden;
      font-size: 16px;
      line-height: 36px;
      color: #333;
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  li img{
      width: 218px;
      height: 144px;
  }
  li .detail{
      width: 700px;
      height: 100%;
      position: relative;
  }
  li .detail a{
      line-height: 28px;
      font-size: 20px;
      font-weight: 400;
  }
  li .detail p{
      line-height: 22px;
      font-size: 14px;
      margin-top: 12px;
  }
  .detail i{
      position: absolute;
      bottom: 0px;
  }
</style>
