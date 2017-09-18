<template>
  <div class="shopCart">
    <div class="content" @click="totalList">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo" :class="{'hightLight':totalCount>0}">
            <!--<span class="icon-shopping_cart" :class="{'hightLight':totalCount>0}"></span>-->
              <span  :class="cat"></span>
          </div>
          <div class="num" v-show="totalCount>0">{{totalCount}}</div>
        </div>
         <div class="price" :class="{'highPrice':totalCount>0}">￥{{totalPrice }}</div>
        <div class="desc">另需配送费￥{{deliveryPrice}}元</div>
      </div>
      <div class="content-right">
        <div class="pay" :class="payClass">
         {{payDesc}}
        </div>
      </div>
    </div>
    <transition name="fold">
    <div class="cart-list" v-show="listShow" >
      <div class="list-header">
        <h1 class="title">购物车</h1>
        <span class="empty">情况</span>
      </div>
      <div class="list-content" ref="listContent">
        <ul>
          <li class="food" v-for="food in selectFoods">
            <span class="name">{{food.name}}</span>
            <div class="price">
              <span>￥{{food.price*food.count}}</span>
            </div>
            <div class="cartcontrol-wrapper">
              <cartcontrol :food="food"></cartcontrol>
            </div>
          </li>
        </ul>
      </div>
    </div>
    </transition>
  </div>
</template>
<script type="text/ecmascript-6">
  import cartcontrol from '../catrtcontrol/cartcontrol'
  import BScroll from 'better-scroll'
  export default {
      props: {
          selectFoods: {
              type: Array,
            default() {
                    return [{price:20,count:2}]
            }
          },
        deliveryPrice: {
          type: Number,
          default: 0
        },
        minPrice: {
          type: Number,
          default: 0
        }
      },
    data () {
      return {
       fold:true
      }
    },
    computed: {
      listShow(){

             if( !this.totalCount){
                 this.fold=true
               return false
             }
             let show=!this.fold
        if(show){
                 this.$nextTick(()=>{
                     if(!this.scroll){
                     this.scroll=new BScroll(this.$refs.listContent,{
                         click:true
                     })}else{
                         this.scroll.refresh()
                     }
                 })
        }
            return show
          },
          totalPrice() {
              let total = 0
            this.selectFoods.forEach( ( food )=> {
                  total += food.price * food.count
            })
            return total
          },
      payDesc(){
              if(this.totalPrice===0){
                  return `还差￥${this.minPrice}元起送`

              }else if(this.totalPrice < this.minPrice){
                  let diff=this.minPrice-this.totalPrice
                  return `还差￥${diff}元起送`
              }else{
                  return '去结算'
              }
      },
      payClass(){
          if(this.totalPrice < this.minPrice){
                return ''
          }else{
              return 'highPay'
          }
      },
      cat(){
          if(this.totalPrice>0){
              return 'highLight'
          }else{
              return 'icon-shopping_cart'
          }
      },
      totalCount() {
              let count = 0
        this.selectFoods.forEach((food) => {
                  count+= food.count
        })
        return count
      }
    },
    components:{
          cartcontrol
    },
    methods:{
      totalList(){
          if(!this.totalCount){
              return;
          }
          this.fold=!this.fold
      }
    }
  }
</script>
<style scoped>
  ul li{
    float: none;
  }
  .food{
    position: relative;
    padding: 12px 0;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(7,17,27,.2);
  }
  .name{
    line-height: 24px;
    font-size: 14px;
    color:rgb(7,17,27)
  }
 .cart-list    .price{
    position: absolute;
    right: 90px;
    bottom:12px;
    line-height: 24px;
    color:red !important;
    font-size: 14px;
    font-weight: 700;

  }
  .cartcontrol-wrapper{
    position: absolute;
    right: 0px;
    bottom:6px;
  }
  .list-header{
    height: 40px;
    line-height: 40px;
    padding: 0 18px;
    background: #f3f5f7;
    border-bottom:1px soolid rgba(7,17,27,.1)
  }
  .title{
    float: left;
    font-size: 14px;
    color: rgb(7,17,27);
  }
  .empty{
    float: right;
    color:rgb(0,160,220);
    font-size: 12px;
  }
  .list-content{
    padding:0 18px;
    max-height: 217px;
    background: #fff;
    /*overflow: hidden;*/
  }
  .cart-list{
    position: absolute;
    top:0;
    z-index: -1;
    left: 0;
    width: 100%;
    /*transition: all .2s linear;*/
    transition: all 0.5s;
    transform: translate3d(0, -100%, 0)
  }

  .cart-list .fold-enter-active, .fold-leave-active {
    transition: all 0.5s linear;
    transform :translate3d(0, -100%, 0)
  }

  .cart-list .fold-enter, .fold-leave-to {
    transition: all 0.5s;
    transform: translate3d(0, 0, 0)
  }

  .pay{
    height: 48px;
    line-height: 48px;
    text-align: center;
    font-size: 12px;
    color:rgba(255,255,255,.4);
    font-weight: 700;
  background: #2b333b;
  }
  .shopCart{
    width: 100%;
    height:48px ;
    position: fixed;
    left: 0px;
    bottom: 0px;
    z-index: 90;
  }
  .shopCart .content{
    display: flex;
    background: #141d27;
    font-size: 0;
    margin-left: 0 !important;
  }
  .content .content-left{
    flex: 1;

  }
  .logo-wrapper{
    display: inline-block;
    position: relative;
    top: -10px;
    margin: 0 12px;
    padding: 6px;
    width: 56px;
    height: 56px;
    box-sizing: border-box;
    vertical-align: top;
    border-radius: 50%;
  }
  .logo-wrapper .logo{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background:#2b343c;
    text-align: center;
  }
   .icon-shopping_cart{
     display: inline-block;
    color:#80858a;
   width: 100%;
    height: 100%;
    background-image : url("cart.png.png") ;
    background-size: cover;

  }
   .highLight{
     display: inline-block;
     color:#80858a;
     width: 100%;
     height: 100%;
     background-image : url("cat2.png") ;
     background-size: cover;
   }
  .price{
    display: inline-block;
    font-weight: 700;
    box-sizing: border-box;
    padding-right: 12px;
    border-right: 1px solid rgba(255,255,255,.1);
    font-size: 16px;
    vertical-align: top;
    line-height: 24px;
    margin-top: 12px;
    color:rgba(255,225,255,.4)
  }
  .desc{
    display: inline-block;
    vertical-align: top;
    line-height: 24px;
    margin: 12px 0 0 12px;

    font-size: 10px;
    color:rgba(255,255,255,.4)

  }
  .content .content-right{
    flex: 0 0 105px;
    width: 105px;
  }
  .num {
    position: absolute;
    top:0;
    right: 0px;
    width: 24px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    border-radius: 16px;
    font-size: 9px;
    font-weight: 700;
    color: #fff;
    background: rgb(240,20,20);

  }
     .highLight{
    display: inline-block;
    color:#80858a;
    width: 100%;
    height: 100%;
    background-image : url("cat2.png") !important;
    background-size: cover;
  }
 .content-left .highPrice{
    color: #fff !important;
  }
  .highPay {
    background: #00b43c;
    color: #fff;
  }
</style>
