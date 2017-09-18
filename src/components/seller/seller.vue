<!--<template>
    <div>
      I am seller
    </div>
</template>-->
<template>
  <!--<Input v-model="value" placeholder="请输入..." style="width: 300px"></Input>-->
<div>
  <!--<Menu mode="horizontal" :theme="theme1" active-name="1">-->
    <!--<Menu-item name="1">-->
      <!--<Icon type="ios-paper"></Icon>-->
      <!--内容管理-->
    <!--</Menu-item>-->
    <!--<Menu-item name="2">-->
      <!--<Icon type="ios-people"></Icon>-->
      <!--用户管理-->
    <!--</Menu-item>-->
    <!--<Submenu name="3">-->
      <!--<template slot="title">-->
        <!--<Icon type="stats-bars"></Icon>-->
        <!--统计分析-->
      <!--</template>-->
      <!--<Menu-group title="使用">-->
        <!--<Menu-item name="3-1">新增和启动</Menu-item>-->
        <!--<Menu-item name="3-2">活跃分析</Menu-item>-->
        <!--<Menu-item name="3-3">时段分析</Menu-item>-->
      <!--</Menu-group>-->
      <!--<Menu-group title="留存">-->
        <!--<Menu-item name="3-4">用户留存</Menu-item>-->
        <!--<Menu-item name="3-5">流失用户</Menu-item>-->
      <!--</Menu-group>-->
    <!--</Submenu>-->
    <!--<Menu-item name="4">-->
      <!--<Icon type="settings"></Icon>-->
      <!--综合设置-->
    <!--</Menu-item>-->
  <!--</Menu>-->
  <div>
    <Button type="success" long>确认提交</Button>
    <br><br>
    <Button type="error" long>确认删除</Button>
  </div>
</div>

</template>
<script type="text/ecmascript-6">
    export default{
      data () {
        return {
          cityList: [
            {
              value: 'beijing',
              label: '北京市'
            },
            {
              value: 'shanghai',
              label: '上海市'
            },
            {
              value: 'shenzhen',
              label: '深圳市'
            },
            {
              value: 'hangzhou',
              label: '杭州市'
            },
            {
              value: 'nanjing',
              label: '南京市'
            },
            {
              value: 'chongqing',
              label: '重庆市'
            }
          ],
          model1: ''
        }
      }
    }

</script>
<style>
</style>
