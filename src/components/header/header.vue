<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="discription">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div class="supports" v-if="seller.supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>

      </div>
      <div class="support-count" v-if="seller.supports" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"> > </i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <b> > </b>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%"/>
    </div>
    <div v-show="detailShow" class="detail" transition="mytran">

      <div class="detail-wrapper clear">
        <div class="detail-main">
          <p>{{seller.bulletin}}</p>
      </div>
      <div class="detail-close" @click="hideDetail">X</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
       return {
        detailShow: false
      }
     },
    methods: {
      showDetail() {
        this.detailShow = true
      },
      hideDetail() {
        this.detailShow = false
      }
    },
    created() {
    this.classMap = ['decrease', 'discount', 'guarantee']
    }
  }
</script>

<style>
  .clear{
    clear: both;
  }
  .header{
    position: relative;
    color: #fff;
    background: rgba(7,14,27,.5);
    overflow: hidden;
  }
  .content-wrapper{
    padding: 24px 12px 18px 24px;
    font-size: 0;
    position: relative;
  }
  .avatar,.content{
    display: inline-block;
    font-size: 14px;
  }
  .avatar{
    vertical-align: top;
  }
  .avatar img{
    border-radius: 2px;
  }
  .content{
    margin-left: 16px;
  }
  .title{
    margin:2px 0 8px 0 ;
  }
  .brand{
    display: inline-block;
    width: 30px;
    height: 18px;
    background: url("brand@2x.png") no-repeat ;
    background-size: cover;
    vertical-align: top;
  }
  .name{
    height: 18px;
    line-height: 18px;
    margin-left: 6px;
    font-size: 16px;
    font-weight: bold;
  }
  .discription{
    font-size: 12px;
    margin-bottom: 10px;
    line-height: 12px;
  }
  .supports{

  }
  .icon{
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-left: 4px;
    background-repeat: no-repeat;
    background-size:cover !important;
  }
  .supports .decrease{
    background: url("decrease_1@2x.png");
  }
  .supports .discount{
    background: url("discount_1@2x.png");
  }
  .supports .guarantee{
    background: url("guarantee_1@2x.png");
  }
  .text{
    font-size:10px;
    line-height: 12px;
  }
  .support-count{
    position: absolute;
    right: 12px;
    bottom: 14px;
    padding: 0 8px;
    height: 24px;
    line-height: 24px;
    border-radius: 14px;
    background: rgba(0,0,0,.2);
    text-align: center;
  }
  .icon-keyboard_arrow_right,.count{
    font-size: 10px;
    margin-left: 5px;
  }
  .bulletin-wrapper{
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: rgba(7,17,27,.5
    );
  }
  .bulletin-title{
    display: inline-block;
    background: url("bulletin@2x.png") no-repeat;
    width: 22px;
    background-size: cover;
    height: 12px;
    margin-top: 8px;
  }
  .bulletin-text{
    margin: 0 4px;
    vertical-align: top;font-size: 10px;
  }
  .background{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(10px);
  }
  .detail{
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100%;
    background: rgba(7,17,27,.8);
    top: 0;
    left: 0;
    overflow: auto;
    transition:all 5s ease;
  }
  .fade-enter-active{
   animation:bounce-in.5s;}
  .fade-leave-active{
   animation: bounce-out .5s;}
  .detail-wrapper{
    min-height: 100%;

  }
  .detail-close{
    position: absolute;
    bottom:10px;
    right: 50%;
  }
  .detail-main{
    padding-top: 64px;
    padding-bottom: 64px;
  }
</style>
