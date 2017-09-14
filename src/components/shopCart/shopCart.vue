<template>
  <div class="shopCart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo">
            <span class="icon-shopping_cart"></span>
          </div>

        </div>
        <div class="price">00</div>
        <div class="desc">另需配送费￥{{deliveryPrice}}元</div>
      </div>
      <div class="content-right"></div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
      props: {
        deliveryPrice: {
          type: Number,
          default: 0
        },
        minPrice: {
          type: Number,
          default: 0
        }
      }
  }
</script>
<style>
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
  .logo .icon-shopping_cart{
     display: inline-block;
    color:#80858a;
   width: 100%;
    height: 100%;
    background-image : url("cart.png.png") ;
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
</style>
