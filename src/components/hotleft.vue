<template>
  <div>
    <div class="hot_content" v-for="hot in hots" v-show="hot.cid==$route.params.cid">
      <img :src="hot.img" alt="">
      <h3>{{hot.name}}</h3>
      <p>by {{hot.fname}}</p>
      <br>
      <h5>{{hot.desc}}</h5>
      <i>话剧</i>
      <i style="left: 400px">卫视推荐</i>
      <div class="bar">
        <div class="content_bar" ref="str" :style="{width:hot.sp+'%'}"></div>
      </div>

      <ul>
        <li>
          <b>{{hot.sp}}%</b>
          <h4>进度</h4>
        </li>
        <li>
          <b>{{hot.rprice}}</b>
          <h4>支持金额</h4>
        </li>
        <li>
          <b>{{hot.rnum}}</b>
          <h4>支持者</h4>
        </li>
        <li>
          <b>{{hot.rday}}</b>
          <h4>剩余天数</h4>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['hots'],

   }
</script>

<style>
  .hot_content{
    width: 860px;
    height: 242px;
    position: absolute;
    top:75px;
  }
  /*.hot_content::before{*/
  /*content: '';*/
  /*display: block;*/
  /*clear: both;*/
  /*}*/
  .hot_content img{
    width: 317px;
    height: 242px;
    display: block;
    float: left;
    margin-right: 30px;
  }
  .hot_content p{
    color: #808183;
    position: relative;
    top:-30px;
    font-size: 12px;
  }
  .hot_content h5{
    color: #808183;
    position: relative;
    top:-30px;
    font-size: 14px;
    font-weight: normal;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .hot_content i{
    color: #808183;
    font-size: 12px;
    font-style: normal;
    position: absolute;
    top: 140px;
    left: 345px;
  }
  .hot_content i b{
    font-size: 16px;
    font-weight: normal;
  }
  .bar{
    width: 450px;
    height: 10px;
    background: #808183;
    position: absolute;
    top: 165px;
    left:345px;
    border-radius: 15px;
  }
  .content_bar{
    height: 10px;
    background: #fe4300;
    position: absolute;
    top: 0px;
    left:0px;
    border-radius: 15px;
  }
  .hot_content ul{
    height: 40px;
    position: absolute;
    top: 190px;
    left:345px;
  }
  .hot_content ul li{
    height: 100%;
    float: left;
    margin-right: 15px;
  }
  .hot_content ul li h4{
    color: #808183;
    font-size: 12px;
  }
</style>

