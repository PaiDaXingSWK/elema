<template>
    <div class="goods">
      <div class="menu-wrapper">
        <ul>
            <li v-for="item in goods" class="menu-item">
              <span class="text">
                <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>
                 {{item.name}}
              </span>

            </li>
        </ul>
      </div>
      <div class="foods-wrapper">
        <ul>
          <li v-for="item in goods" class="food-list">
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li v-for="food in item.foods" class="food-item">
                <div class="icon">
                  <img :src="food.icon" alt="" width="57">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}</span><span class="count">好评{{food.rating}}</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span><span class="old"
                                                                  v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
  const ERR_OK = 0
    export default{
        props: {
            seller: {
                type: 'object'
            }
        },
        data () {
            return {
                goods: []
            }
        },
      created() {
        this.$http.get('/api/goods').then((response) => {
          response = response.body
          if (response.errno === ERR_OK) {
            this.goods = response.data
            console.log(this.goods)
          }
        })
        this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
      }
    }

</script>
<style>
  .goods{
    display: flex;
    background: red;
    width: 100%;
    position: absolute;
    top:200px;
    bottom: 46px;
    overflow: hidden;
  }
  .menu-wrapper{
    flex:0 0 80px;
    width: 80px;
    background: #f3f5f7;

  }
  .menu-item{
    display: table;
    width: 56px;
    height: 54px;
    line-height: 14px !important;
    padding: 0 12px;
  }
  .text{
    display: table-cell;
    width: 56px;
    vertical-align: middle;
    font-size: 12px;
    border-bottom:1px solid #888;
  }
  .icon{
    display: inline-block;
    vertical-align: top;
    width: 12px;
    height: 12px;
    margin-right: 4px;
    background-size: 12px  12px;
    background-repeat:no-repeat ;
  }
  .decrease{
  background-image: url("decrease_3@3x.png");
  }
  .discount{
    background-image: url("discount_3@2x.png");
  }
  .guarantee{
    background-image: url("guarantee_3@2x.png");
  }
  .invoice{
    background-image: url("invoice_3@2x.png");
  }
  .special{
    background-image: url("special_3@2x.png");
  }
  .foods-wrapper{
    flex: 1;
  }
  .foods-wrapper .title{
    padding-left: 14px;
    height: 26px;
    line-height: 26px;
    font-size: 12px;
    border-left: 2px solid #d9dde1;
    background: #f4f5f7;
    color:rgba(147, 153, 159)
  }
  .food-item{
    display: flex;
    margin: 18px;
   padding-bottom: 18px;
    border-bottom: 1px solid #888;

  }
  .food-item:last-child{
    border: none;
    margin-bottom: 0;
  }
  .foods-wrapper .icon{
    margin-right: 10px;
    flex: 0 0 57px;

  }
  .foods-wrapper .content{

  }
</style>
