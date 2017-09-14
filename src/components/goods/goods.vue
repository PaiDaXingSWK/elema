<template>
    <div class="goods">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
            <li v-for="(item,index) in goods" class="menu-item" :class="{'current':currentIndex === index}" @click="selectMenu(index,$event)">
              <span class="text border-bottom">
                <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>
                 {{item.name}}
              </span>

            </li>
        </ul>
      </div>
      <div class="foods-wrapper" ref="foodsWrapper">
        <ul>
          <li v-for="item in goods" class="food-list food-list-hook" >
            <h1 class="title">{{item.name}}</h1>
            <h1></h1>
            <ul>
              <li v-for="food in item.foods"  class="food-item border-bottom">
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
      <shopcart  :delivery-price="seller.deliveryPrice"
                 :min-price="seller.minPrice" ></shopcart>
    </div>
</template>
<script type="text/ecmascript-6">
  import BScroller from 'better-scroll'
  import shopcart from '../shopCart/shopCart'
  const ERR_OK = 0
    export default{
        props: {
            seller: {
              type: Object
            }
        },
        data () {
            return {
                goods: [],
              listHeight: [],
              scrolly: 0
            }
        },
      computed: {
        currentIndex() {
          for (let i = 0; i < this.listHeight.length; i++) {
            let height = this.listHeight[i]
            let height2 = this.listHeight[i + 1]
            if (!height2 || (this.scrolly >= height && this.scrolly < height2)) {
              return i
            }
          }
          return 0
        }
      },
      created() {
        this.$http.get('/api/goods').then((response) => {
          response = response.body
          if (response.errno === ERR_OK) {
            this.goods = response.data
            console.log(this.goods)
            this.$nextTick(() => {
              this._initScroll()
              this._calculateHeight()
            })
          }
        })
        this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
      },
      methods: {
            selectMenu(index, event) {
                if (!event._constructed) {
                    return
                }
              let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
              let el = foodList[index]
              this.foodScroll.scrollToElement(el, 300)
            },
            _initScroll() {
                this.menuScroll = new BScroller(this.$refs.menuWrapper, {
                    click: true
                })
                this.foodScroll = new BScroller(this.$refs.foodsWrapper, {
                  probeType: 3
                })
              this.foodScroll.on('scroll', (pos) => {
                this.scrolly = Math.abs(Math.round(pos.y))
              })
            },
        _calculateHeight() {
          let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
          let height = 0
          this.listHeight.push(height)
          for (let i = 0; i < foodList.length; i++) {
            let item = foodList[i]
            height += item.clientHeight
            this.listHeight.push(height)
          }
        }
      },
      components: {
            shopcart
      }
    }

</script>
<style>
  .border-bottom{position: relative;border-top: none !important;}
  .border-bottom:after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #D5D5D6;
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    -ms-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
  .goods{
    display: flex;

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
    /*border-bottom:1px solid #888;*/
  }
  .menu-wrapper .current{
    position: relative;
    z-index :10;
    margin-top :-1px;
    background :#fff;
    font-weight :700;
  }
  /*  在有current的情况下 */
  .current .border-bottom:after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0px;
    background-color: #D5D5D6;
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    -ms-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
  .icon{
    display: inline-block;
    vertical-align: top;
    width: 12px;
    margin-left:-0px !important;
    height: 12px;
    /*margin-right: 4px;*/
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
    color:rgba(147, 153, 159,1);
  }
  .food-item{
    display: flex;
    margin: 18px;
   padding-bottom: 18px;
    /*border-bottom: 1px solid #888;*/

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
    flex: 1;
  }
  .content .name{
    margin: 2px 0 8px 0 ;
    height: 14px;
    line-height: 14px;
    font-size: 14px;
    colr:rgb(7,17,27);
  }
  .content .desc{
    margin-bottom: 8px;
    line-height: 12px;
    font-size: 10px;
    color:rgb(147,153,159);
  }
  .extra{
    line-height: 10px;
    font-size: 10px;
    color:rgb(147,153,159)
  }
  .price{
    font-weight: 700 !important;
    line-height: 24px;
  }
  .now{
    margin-right: 8px;
    font-size: 14px;
    color: rgb(240,20,20);
  }
  .old{
    font-size: 10px;
    text-decoration: line-through;
    color:rgb(147,153,159) ;
  }
</style>
