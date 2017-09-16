>  本项目是基于vue2最新实战项目，vue2 +vue-router2 + es6 +webpack 高仿饿了么app,是适合新手进阶的绝佳教程,因为我上班做的是web端应用，so，这也是我之前在某网站学习到一个大神的教程后的第一个练手app，


###首先

***
>  * 喜欢的请，star ,fork,你们是我坚持的power




### 项目技术架构
***
*  vue-cli
*  vue
*  vue-resource
*  vue-router
*  webpack

预期完成效果上图
***
* 加入购物车动画

![11.gif](http://upload-images.jianshu.io/upload_images/4249223-8d462b93150db24e.gif?imageMogr2/auto-orient/strip)

* 弹出购物车 商品详情页

![2222.gif](http://upload-images.jianshu.io/upload_images/4249223-71b66b4249d868bd.gif?imageMogr2/auto-orient/strip)


###安装
***
项目地址：（`git clone`）
```shell
git clone https://github.com/PaiDaXingSWK/elema.git
```
通过`npm`安装本地服务第三方依赖模块(需要已安装[Node.js](https://nodejs.org/))

```
npm install

```
npm run dev
```
需要release代码

```
npm run build
```
### 安装注意
安装 vue-cli
```
npm install -g vue-cli
```
安装 vue-cli eslint
```
npm install -g eslint
不过写项目途中已经禁止了ESlint校验
```
安装依赖 friendly-errors-webpack-plugin
```
npm install friendly-errors-webpack-plugin --save-dev
```
###目录结构
***
<pre>
├── build              // 构建服务和webpack配置
├── config             // 项目不同环境的配置
├── dist               // 项目build目录
├── index.html         // 项目入口文件
├── package.json       // 项目配置文件
├── src                // 生产目录
│   ├── assets         // 图片资源
│   ├── common          // 公共的css js 资源
│   ├── components     // 各种组件
│   ├── App.vue         // 主页面 
│   └── main.js        // Webpack 预编译入口
</pre>

###已经实现的功能
***
* 商品滚动 ，商品滚轮滚动
* 商品联动
* 商品详情  父子组件的通信
* 等等

### 即将实现的功能
***
* vuex 商品详情 商家详情


### END
***
* 如果喜欢一定要 star哦  ，多谢多谢
* 如果有意见和问题 请在 lssues提出，我会及时回复。
*本项目所有图片素材，数据皆来自之前我学习的大神的资料，本项目绝无商业用途，只为练手与交流。

