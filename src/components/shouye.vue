<template>
    <div id="cont">
      <div id="header">
        <ul class="head">
          <li><span class="le">全民</span><span class="ri">创造</span></li>
          <li>
            <span class="shouye" ><router-link to="/shouye">首页</router-link></span>
            <span><router-link to="/zhuanlan">节目专栏</router-link></span>
            <span class="quanzi"> <router-link to="/discuss">圈子</router-link></span>
          </li>
          <li>
            <span class="iconfont">&#xe633;</span>
            <input type="text" placeholder="请输入你需要搜索的内容" class="search">
          </li>
          <li>
           <span class="left"><router-link to="/login">登录</router-link></span>
            <span> <router-link to="/register">注册</router-link></span>
          </li>
        </ul>
      </div>
      <!--slide 轮播-->
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(bans,index) in banner" :key="index"><img :src="bans.img" alt=""></swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>

      <!-- 热门项目 -->
      <div class="hot_pro">
        <div class="left">
          <h3 class="hot_header">热门项目</h3>
          <span class="look">查看更多</span>
          <router-view :hots="hots"></router-view>
        </div>
        <div class="right">
          <router-link :to="{name: 'hots', params: {cid: index}}" v-for="(type,index) in types" :key="index">{{type}}</router-link>
        </div>
      </div>

      <!--卫视主推-->
      <div class="weishi">
        <h3>卫视主推</h3>
        <ul v-if="weishi!=null">
          <li v-for="ws in weishi">
            <img :src="ws.img" alt="">
            <h3>{{ws.name}}</h3>
            <p>by  {{ws.fname}}</p>
            <span class="desc">{{ws.desc}}</span>

          </li>

        </ul>
      </div>

      <!-- 合作卫视 -->
      <div class="hezuo">
        <h3>合作单位</h3>
        <ul v-if="datas!=null">
          <li v-for="das in datas ">
            <img :src="das.img" alt="">

          </li>

        </ul>
      </div>


      <!-- footer -->
      <div class="foooter">
        <ul>
          <li>关于全民创造</li>
          <li>全民创造协议</li>
          <li>全民创造风险提示</li>
          <li>联系我们</li>
          <li>全民<span>创造</span> <i>@2018</i></li>
        </ul>
      </div>
    </div>
</template>
<!--222222222222222222222222222222-->

<script>
  import {swiper,swiperSlide} from "vue-awesome-swiper"
  import axios from "axios"
    export default {
      data(){
        return{
          datas:[],
          weishi:[],
          hots:[],
          banner:[],
          types: ['','微电影','电视剧','话剧','电影','戏曲','书画','相声','戏剧','音乐剧'],

          swiperOption:{
            autoplay: true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          }

        }

      },
       components:{
         swiper,
         swiperSlide
       },
      created() {
         let that = this;
        axios({
          type:"get",
          url:"http://localhost:3000/IndexInfo"
        }).then(function (res) {
          that.datas=res.data.result.unit;
          that.weishi=res.data.result.new;
          that.hots=res.data.result.hot;
          that.banner=res.data.result.slides;
//          console.log(that.hots);
        },function (err) {
          console.log(err);

        });


      },

    }
</script>
<!--333333333333333333333333333333333-->
<style>
  *{
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration: none;
  }
  #cont{
    width: 1200px;
    /*height:2500px;*/
    margin: 0 auto;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;


  }
  @font-face {
    font-family: 'iconfont';
    src: url('/static/fonts/iconfont.eot');
    src: url('/static/fonts/iconfont.eot?#iefix') format('embedded-opentype'),
    url('/static/fonts/iconfont.woff') format('woff'),
    url('/static/fonts/iconfont.ttf') format('truetype'),
    url('/static/fonts/iconfont.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  ul li{
    list-style: none;
  }
  div{
    box-sizing: border-box;
  }
  /*顶部栏*/
  #header{
    width: 1200px;
    height: 71px;
    margin: 0 auto;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }
  #header .head{
    width: 100%;
    height: 100%;
  }
  #header .head li{
    float: left;
    text-align: center;
    box-sizing: border-box;
  }
  #header .head li:nth-child(1){
    width:15%;
    height: 100%;
    padding: 20px 0px;
  }
  #header .head li:nth-child(1) span{
    margin-top: 20px;
    font-size: 26px;
    font-weight: 600;
    line-height: 32px;
  }
  #header .head li:nth-child(1) span.ri{
    color: #fe4200;
  }
  #header .head li:nth-child(2){
    width:25%;
    height: 100%;
    font-size: 18px;
  }
  #header .head li:nth-child(2) span{
    width: 33.3%;
    height: 100%;
    display: block;
    float: left;
    text-align: center;
    line-height:71px;
    cursor: pointer;
  }
  #header .head li:nth-child(2) span a{
    color: #7f7f7f;
  }
  #header .head li:nth-child(2) span.quanzi{
    border-right: 1px solid #ccc;
    box-sizing: border-box;
  }
  #header .head li:nth-child(2) span.shouye{
    background: #eee;
  }
  #header .head li:nth-child(3){
    width:45%;
    height: 100%;
    display: block;
  }
  #header .head li:nth-child(3) span{
    font-size: 26px;
    position: relative;
    left: 82%;
    top: 4px;
    cursor: pointer;
    color: #aaa;
  }
  #header .head li:nth-child(3) input{
    width: 80%;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 20px;
    padding-left: 15px;
    font-size:16px ;
    outline: none;
    margin-top: 14px;
  }
  #header .head li:nth-child(4){
    width:15%;
    height: 100%;
  }
  #header .head li:nth-child(4) span{
    width: 50%;
    height: 100%;
    display: block;
    float: left;
    line-height: 71px;
    font-size: 18px;
    color: red;
  }
  #header .head li:nth-child(4) .left{
    text-align: right;
  }

  /*热门项目*/
  #cont .hot_pro{
    width: 100%;
    height: 489px;
    padding: 54px 80px ;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
  }
  #cont .hot_pro .left{
    width: 910px;
    height: 373px;
    background: #fff;
    position: relative;
    float: left;
  }

  #cont .hot_pro .left h3{
    margin-top: 15px;
    margin-bottom: 40px;
  }
  #cont .hot_pro .left span.look{
    position: absolute;right: 20px;font-size: 14px;color: gray;
    top:20px;
  }
  #cont .hot_pro .left img{
    width: 320px;
    height: 242px;
    float: left;
  }
  #cont .hot_pro .left .left_r{
    width: 580px;
    height: 242px;
    background: lightblue;
    float: left;
    margin-left: 10px;
    padding: 10px;
  }

  #cont .hot_pro .left .left_r span:nth-child(1){
    width: 100%;
    font-size: 22px;
  }
  #cont .hot_pro .left .left_r span:nth-child(2){
    width: 100%;
    height: 20px;
    display: block;
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 14px;
    color: #ccc;
  }


  #cont .hot_pro .right{
    width: 128px;
    height: 373px;
    background: #fff;
    float: left;
    border-left: 1px solid #ccc;
  }

  #cont .hot_pro .right a{
    width: 100%;
    height: 11%;
    padding-left: 20px;
    box-sizing: border-box;
    display: inline-block;
    text-align: left;
    line-height: 37px;
    color: gray;
  }
  #cont .hot_pro .right a:nth-child(1){
   display: none;
  }
  #cont .hot_pro .right a:hover{
    color: red;
    border-left: 1px solid red;
  }



  /*卫视主推*/
  #cont .weishi{
    width: 100%;
    height: 641px;
    padding: 54px 80px ;
    border-bottom: 1px solid #ccc;
    position: relative;
  }
  #cont .weishi ul{
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    justify-content: space-between;
  }
  #cont .weishi ul li{
    width: 317px;
    height: 452px;
    display: block;
    float: left;
    background: lightblue;
    position: relative;
    margin-top: 40px;
  }
  #cont .weishi ul li img{
    width: 100%;
    height: 234px;
  }
  #cont .weishi ul li h3{
    margin-top: 12px;
    margin-bottom: 10px;
    padding-left: 10px;
    font-weight: 400;
  }
  #cont .weishi ul li p{
    margin-left: 10px;
    margin-bottom: 20px;
    color:gray;
    font-size: 14px;
  }
  #cont .weishi ul li span.desc{
    width: 297px;
    height: 40px;
    font-size: 14px;
    margin-left: 10px;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

  }
  #cont .weishi i{
    color: #808183;
    font-size: 12px;
    font-style: normal;
  }

  /*卫视合作*/
  #cont .hezuo{
    width: 100%;
    height: 326px;
    padding: 54px 80px ;
  }
  #cont .hezuo ul{
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    justify-content: space-between;
    padding-top: 66px;
  }
  #cont .hezuo ul li{
    width: 190px;
    height: 83px;
    border: 1px solid #ccc;
  }

  /*底部栏*/
  #cont .foooter{
    width: 100%;
    height: 98px;
    background: #140A08;
    padding: 20px 80px;
  }
  #cont .foooter ul{
    width: 100%;
    height: 100%;
    color: #eee;
  }
  #cont .foooter ul li{
    float: left;
    padding-right: 10px;
    margin-right: 10px;
    margin-top: 15px;
    font-size: 18px;
    box-sizing: border-box;
    border-right: 2px solid #ccc;
  }
  #cont .foooter ul li:nth-child(4){
    border-right: none;
  }
  #cont .foooter ul li:nth-child(5){
    border: none;
    float: right;
    font-size: 30px;
    margin-top: 5px;
    font-weight: 600;
  }
  #cont .foooter ul li:nth-child(5) span{
    color: #FC4700;
  }
  #cont .foooter ul li:nth-child(5) i{
    font-size: 14px;
  }
  #cont .register{
    width: 100%;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border-top: 1px solid #ccc;
    margin-top: 20px;
  }
  #cont .register span:nth-child(2) a{
    color: red;
    text-decoration: none;
  }


</style>
