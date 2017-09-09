<template>
    <div class="goods">
      <div class="menu-wrapper">
        <ul>
            <li v-for="item in goods" class="menu-item">
              <span class="text">
                <span v-show="item.type>0" class="icon"></span>
                 {{item.name}}
              </span>

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
    height: 100%;
    bottom: 46px;
    overflow: auto;
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
  }
</style>
