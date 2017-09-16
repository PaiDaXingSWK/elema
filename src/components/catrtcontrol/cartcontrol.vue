<template>
  <div class="cartControl">
    <transition name="fade">
    <div class="cart-decrease" v-show="food.count>0" @click="decCart" >


    </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add" @click="addCart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  export default {
    props: {
      food: {
        type: Object
      }
    },
    methods: {
      addCart(event) {

        if (!event._constructed) {
          // 去掉自带click事件的点击
          return;
        }
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1);
        } else {
          this.food.count++;
          //this.$emit('increment', event.target);
        }
      },
      decCart(event){
        if (!event._constructed) {
          // 去掉自带click事件的点击
          return;
        }
          if(this.food.count){
            this.food.count--
          }
      }
    }
  };
</script>
<style>
  .cartControl .fade-enter-active, .fade-leave-active {
    transition: all 0.4s linear
  }

  .cartControl .fade-enter, .fade-leave-to {
    opacity: 0;
    transform :translate3d(24px, 0, 0);
    transform: rotate(360deg);
  }
.cartControl{
  font-size: 0;
}
  .cart-decrease{
    display: inline-block;
    /*padding: 6px;*/
    background-image: url("jian.png");
    background-size: cover;
    width: 10px;
    height: 10px;
    border: 2px solid #00a0dc ;
    border-radius: 50%;
    transition: all .2s linear;
  }
  .cart-count{
    display: inline-block;

  }
  .cart-decrease .move-transition{
    opacity: 1;
    transform: rotateZ(0);
  }
.cart-decrease .move-enter  {
  opacity: 0;
  transform: rotateZ(180deg);
}
  .cart-add{
    display: inline-block;
    width: 10px;
    height: 10px;
    background-image: url("jia.png");
    background-size: cover;
    border: 2px solid #00a0dc ;
    border-radius: 50%;
  }
  .cart-count{
    display: inline-block;
    width: 24px;
    padding-top: 6px;
    line-height: 8px;
    text-align: center;
    font-size: 10px;
    color:rgb(147,153,159);
  }
</style>
