<template>
  <div class="shopCart">
    <div class="content">
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
  </div>
</template>
<script type="text/ecmascript-6">
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
    computed: {
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
    }
  }
</script>
<style scoped>
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
