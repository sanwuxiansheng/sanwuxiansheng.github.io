(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{227:function(e,a,t){"use strict";t.r(a);var s=t(0),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"有关移动端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#有关移动端"}},[e._v("#")]),e._v(" 有关移动端")]),e._v(" "),t("h3",{attrs:{id:"问题一：vue移动端适配"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题一：vue移动端适配"}},[e._v("#")]),e._v(" 问题一：vue移动端适配")]),e._v(" "),t("h4",{attrs:{id:"使用vue-cli安装好一个vue的项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用vue-cli安装好一个vue的项目"}},[e._v("#")]),e._v(" 使用vue-cli安装好一个vue的项目")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\n npm install -g vue-cli\n vue init webpack my-project\n cd my-project\n npm run dev\n")])])]),t("h4",{attrs:{id:"配置vue插件-lib-flexible"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置vue插件-lib-flexible"}},[e._v("#")]),e._v(" 配置vue插件 lib-flexible")]),e._v(" "),t("ol",[t("li",[t("h6",{attrs:{id:"安装插件命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装插件命令"}},[e._v("#")]),e._v(" 安装插件命令")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\nnpm install lib-flexible --save-dev\n\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[t("h6",{attrs:{id:"mian-js文件中引入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mian-js文件中引入"}},[e._v("#")]),e._v(" mian.js文件中引入")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\nimport 'lib-flexible/flexible'\n\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[t("h6",{attrs:{id:"安装px2rem-loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装px2rem-loader"}},[e._v("#")]),e._v(" 安装px2rem loader")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("npm insatll px2rem-loader --save-dev\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[t("h6",{attrs:{id:"配置px2rem-loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置px2rem-loader"}},[e._v("#")]),e._v(" 配置px2rem-loader")])])]),e._v(" "),t("ul",[t("li",[e._v("在build文件中找到util.js，将px2rem-loader添加到cssLoaders中，如：")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("exports.cssLoaders = function (options) {\n  options = options || {}\n\n  const cssLoader = {\n    loader: 'css-loader',\n    options: {\n      sourceMap: options.sourceMap\n    }\n  }\n\n  const postcssLoader = {\n    loader: 'postcss-loader',\n    options: {\n      sourceMap: options.sourceMap\n    }\n  }\n\n  const px2remLoader = {\n    loader: 'px2rem-loader',\n    options: {\n      remUnit: 75\n    }\n  }\n")])])]),t("ul",[t("li",[t("p",[e._v("这里的‘75’是根据设计稿来的，如果设计稿图是750px的这里就写75")])]),e._v(" "),t("li",[t("p",[e._v("在generateLoaders方法中添加px2remLoader")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\nfunction generateLoaders (loader, loaderOptions) {\n    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader, px2remLoader]\n\n    if (loader) {\n      loaders.push({\n        loader: loader + '-loader',\n        options: Object.assign({}, loaderOptions, {\n          sourceMap: options.sourceMap\n        })\n      })\n    }\n")])])]),t("ul",[t("li",[e._v("至此通过脚手架vue-cli 搭建的vue项目就适配好了，可以直接使用px")])]),e._v(" "),t("h3",{attrs:{id:"有关跨域的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#有关跨域的问题"}},[e._v("#")]),e._v(" 有关跨域的问题")]),e._v(" "),t("h4",{attrs:{id:"开发环境下"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发环境下"}},[e._v("#")]),e._v(" 开发环境下")]),e._v(" "),t("ul",[t("li",[e._v("只需要在config文件夹下面的index.js文件中添加如下代码")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\nmodule.exports = {\n  dev: {\n\n    // Paths\n    assetsSubDirectory: 'static',\n    assetsPublicPath: '/',\n    proxyTable: {\n      '/api': {\n        pathRewrite: {\n          '^/api': '',//重写,\n        },\n        target: 'https://XXXXX',//后端接口地址\n        changeOrigin: true,//是否允许跨越\n      },\n      '/php': {\n        pathRewrite: {\n            '^/php/': '',//重写,\n        },\n        target: 'https://XXXXX',//后端接口地址\n        changeOrigin: true//是否允许跨越\n      }\n    },\n\n    // Various Dev Server settings\n    host: '192.168.0.133', // can be overwritten by process.env.HOST\n    // host: 'localhost',\n    port: 8080, \n\n")])])]),t("ul",[t("li",[e._v("配置完成后，在使用ajax请求时只需要在接口前面加上"),t("code",[e._v("/api")]),e._v("或者"),t("code",[e._v("/php/")]),e._v("即可")])]),e._v(" "),t("h4",{attrs:{id:"生产环境下"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生产环境下"}},[e._v("#")]),e._v(" 生产环境下")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("因为我现在开发的项目是在同一域名下所以不需要进行跨域，但我还是为大家找到了解决方法")])]),e._v(" "),t("li",[t("p",[e._v("生产环境下跨域需要配置nginx")])]),e._v(" "),t("li",[t("p",[e._v("设置nginx配置文件：")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\nlocation /api {\n    add_header 'Access-Control-Allow-Origin' '*';\n    proxy_pass http://fanyi.baidu.com/v2transapi;\n}\n\n")])])]),t("ul",[t("li",[t("p",[e._v("平常我们团队开发时都在公司的局域网内，调用接口也是局域网内部的，但是项目上线时，请求接口是线上服务器端的，那么就有接口之间的来回切换问题。")])]),e._v(" "),t("li",[t("p",[e._v("在使用vue-cli搭建项目以后，做相关配置就可以实现，不用手动更改接口路径，也可以请求不同环境下的接口。")])])]),e._v(" "),t("ol",[t("li",[t("p",[e._v("设置不同的接口地址")]),e._v(" "),t("ul",[t("li",[e._v("先找到以下文件")])])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\n　　/config/dev.env.js\n　　/config/prod.env.js\n\n")])])]),t("ul",[t("li",[e._v("在dev.env.js里面添加内容如")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\n'use strict'\nconst merge = require('webpack-merge')\nconst prodEnv = require('./prod.env')\n\nmodule.exports = merge(prodEnv, {\n  NODE_ENV: '\"development\"',\n  API_ROOT:'\"http://192.168.1.130:18080/cheduo\"'\n})\n\n")])])]),t("ul",[t("li",[e._v("这就是本地测试环境请求后台接口的域名")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\n API_ROOT:'\"http://192.168.1.130:18080/cheduo\"'\n\n")])])]),t("ul",[t("li",[e._v("在prod.env.js里面添加内容如下")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\n'use strict'\nmodule.exports = {\n  NODE_ENV: '\"production\"',\n  API_ROOT:'\"https://mc.cheduo.com/cheduo\"'\n}\n\n")])])]),t("ul",[t("li",[e._v("这是我们上传服务器以后，请求后台接口的域名")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\nAPI_ROOT:'\"https://mc.cheduo.com/cheduo\"'\n\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[e._v("在代码中调用设置好的参数")])]),e._v(" "),t("ul",[t("li",[e._v("比如我在本项目中重新封装axios(api文件在/src/api/index.js中)，将配置好的接口地址作为baseURL拼接到接口路径中，应用参数部分如下：")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\nconst root = process.env.API_ROOT;\n\n")])])]),t("ul",[t("li",[e._v("最后重新启动项目就可以了，当npm run dev的时候就运行在生产环境，当npm run build的时候就是正式的线上环境。")])]),e._v(" "),t("h3",{attrs:{id:"有关项目打包上线后的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#有关项目打包上线后的问题"}},[e._v("#")]),e._v(" 有关项目打包上线后的问题")]),e._v(" "),t("h5",{attrs:{id:"打包上线运行后空白页面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打包上线运行后空白页面"}},[e._v("#")]),e._v(" 打包上线运行后空白页面")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("一般碰到空白页面都是静态资源在打包时出现了问题")])]),e._v(" "),t("li",[t("p",[e._v("打包后的资源使用了绝对根目录路径，因此将项目部署到特定目录下，其引入的资源路径无法被正确解析")])]),e._v(" "),t("li",[t("p",[e._v("所以需要在打包时将config/index.js文件中的build对象的assetsPublicPath:'./'，改为assetsPublicPath:'/'或者是相应的绝对目录,如下：")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\n  build: {\n    // Template for index.html\n    index: path.resolve(__dirname, '../../../asv/index.html'),\n\n    // Paths\n    assetsRoot: path.resolve(__dirname, '../../../html/asv'),\n    assetsSubDirectory: 'static',\n    assetsPublicPath: '/html/asv/',\n\n")])])]),t("h5",{attrs:{id:"vue项目打包后css背景图路径不对"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue项目打包后css背景图路径不对"}},[e._v("#")]),e._v(" vue项目打包后css背景图路径不对")]),e._v(" "),t("ul",[t("li",[e._v("只需要在build/utils.js文件中添加如下一行代码即可。")])]),e._v(" "),t("p",[t("code",[e._v("publicPath:'../../'")])]),e._v(" "),t("ul",[t("li",[e._v("添加结果如下")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\nif (options.extract) {\n      return ExtractTextPlugin.extract({\n        use: loaders,\n        fallback: 'vue-style-loader',\n        publicPath:'../../'\n      })\n    } else {\n      return ['vue-style-loader'].concat(loaders)\n    }\n\n")])])]),t("ul",[t("li",[e._v("重启项目后该问题解决")])]),e._v(" "),t("h3",{attrs:{id:"关于后台接口传参类型的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于后台接口传参类型的问题"}},[e._v("#")]),e._v(" 关于后台接口传参类型的问题")]),e._v(" "),t("ul",[t("li",[e._v("博主之前一直是对的Java的接口，传参类型也是json类型，所以没有碰到过这种问题，只是最近的这个项目的后台是PHP的且要求post请求使用form表单格式发送数据")])]),e._v(" "),t("h5",{attrs:{id:"解决方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[e._v("#")]),e._v(" 解决方法")]),e._v(" "),t("ol",[t("li",[e._v("下载qs")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\nnpm install qs --save-dev\n\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[e._v("在main.js文件和封装的axios请求中引入")])]),e._v(" "),t("li",[t("p",[e._v("在发送post请求是将参数使用qs.stringify()进行数据转换")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\nimport axios from 'axios'\nexport default function ajax(url,data={},method='GET'){\n  return new Promise((resolve,reject)=>{\n    let promise\n    // 执行异步ajax请求\n    if (method==='GET') {\n      promise = axios.get(url,{params:data})  // params配置，指定的是query参数\n    }else{\n      promise = axios.post(url,qs.stringify(data))\n    }\n    promise.then(\n      response => { // 如果成功了，调用resolve()\n        resolve(response.data)\n      },\n      error => {  // 如果失败了，不调用reject(),而是提示错误信息\n        alert('请求异常:' + error.message)\n      }\n    )\n  })  \n}\n\n")])])]),t("h3",{attrs:{id:"有关路由以及项目上线后的地址问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#有关路由以及项目上线后的地址问题"}},[e._v("#")]),e._v(" 有关路由以及项目上线后的地址问题")]),e._v(" "),t("h5",{attrs:{id:"路由传参"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#路由传参"}},[e._v("#")]),e._v(" 路由传参")]),e._v(" "),t("ol",[t("li",[e._v("query方式(页面刷新数据不会丢失)")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\nthis.$router.push({path:'/XX', query: {data: value}});\nthis.$router.replace({path: '/xx', query:{data: value}})\n\n")])])]),t("ul",[t("li",[e._v("假设从A页面跳转到B页面，则在B页面的mounted中获取")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\nmounted () {\n    let val = this.$route.query.data\n}\n\n")])])]),t("ul",[t("li",[e._v("query方式其实就是将参数放在地址内传过去")])]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("params方式（页面刷新会丢失）")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\nthis.$router.push({path:'/XX', params: {data: value}});\nthis.$router.replace({path: '/xx', params:{data: value}})\n\n")])])]),t("ul",[t("li",[e._v("假设从A页面跳转到B页面，则在B页面的mounted中获取")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\nmounted () {\n    let val = this.$route.params.data\n}\n\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[e._v("直接调用push在路由后面传参(页面刷新数据不会丢失)")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\nthis.$router.push({\n  path: `/B/${id}`,\n})\n")])])]),t("ul",[t("li",[e._v("需要对应路由配置如下：")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("{\n path: '/B/:id',\n name: 'B',\n component: B\n}\n")])])]),t("ul",[t("li",[e._v("另外页面获取参数如下")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("this.$route.params.id\n")])])]),t("h6",{attrs:{id:"路由跳转方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#路由跳转方式"}},[e._v("#")]),e._v(" 路由跳转方式")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("this.$router.push会在浏览器中记录一条页面跳转数据")])]),e._v(" "),t("li",[t("p",[e._v("this.$router.replace并不会在浏览器中记录页面跳转，相当于重指向某个页面")])])]),e._v(" "),t("h4",{attrs:{id:"项目打包上线后刷新404"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目打包上线后刷新404"}},[e._v("#")]),e._v(" 项目打包上线后刷新404")]),e._v(" "),t("h6",{attrs:{id:"解决方法-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方法-2"}},[e._v("#")]),e._v(" 解决方法")]),e._v(" "),t("ol",[t("li",[e._v("如果使用的是history模式只需要改成hash模式")])]),e._v(" "),t("ul",[t("li",[e._v("只需在路由的配置文件中更改代码如下：")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("export default router = new Router({\n // mode: 'history',\n")])])]),t("ul",[t("li",[t("p",[e._v("但是改用hash模式的话地址栏会出现一个恶心的#")])]),e._v(" "),t("li",[t("p",[e._v("所以一般都不会使用hash模式")])])]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("使用history模式的话就需要配置nginx")])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("VUE改成history,打包上线后,404的根本原因是path路径找不到")])]),e._v(" "),t("li",[t("p",[e._v("nginx配置如下")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('server{\n    listen       99;# 监听的端口号\n    server_name  192.168.1.24 localhost 127.0.0.1; # 生产模式为本机ip 开发模式为localhost\n    root "F:/cheduoapp/PHP/mobile"; # 指向前台应用打包后文件位置的根路径\n    index index.html;# 默认index页面\n\n    location /html/ {\n        if (!-e $request_filename){ #判断是否是一个文件\n            rewrite  ^/html/(.*)/(.*)$  /html/$1/index.html last;\n        }\n    }\n\n    location /html/paydir/ {\n        rewrite ^/html/paydir/(.*)-(.*)?(.*)$ /html/$1/index.html?$3 last;\n    }\n\n    location /nginx_status\n    {\n        stub_status on;\n        access_log   off;\n    }\n\n    location ~ /.*\\.(gif|jpg|jpeg|png|bmp|swf)$\n    {\n        expires      30d;\n    }\n\n    location ~ /.*\\.(js|css)?$\n    {\n        expires      12h;\n    }\n\n    location ~ /.well-known {\n        allow all;\n    }\n\n    location ~ /\\.\n    {\n        deny all;\n    }\n}\n')])])]),t("ul",[t("li",[e._v("nginx一般都只是配置了一层路由，多层路由的话博主也不会")])]),e._v(" "),t("h5",{attrs:{id:"设置指定path的cookie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置指定path的cookie"}},[e._v("#")]),e._v(" 设置指定path的cookie")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('export default const setCookie = function (name, value) {\n  var str = name + "=" + escape(value) + ";domain=m.cheduo.com;path=/html";\n  var date = new Date();\n  date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000); //设置date为当前时间加一天\n  str += ";expires=" + date.toGMTString();\n  console.log(str)\n  document.cookie = str;\n},\n// 获取cookie\nexport default const getCookie = function(name) {\n  var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");\n  if(arr=document.cookie.match(reg)){\n    return unescape(arr[2]);\n  }else{\n    return null;\n  }\n}\n')])])]),t("h4",{attrs:{id:"有关页面权限的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#有关页面权限的问题"}},[e._v("#")]),e._v(" 有关页面权限的问题")]),e._v(" "),t("h6",{attrs:{id:"解决方法-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方法-3"}},[e._v("#")]),e._v(" 解决方法")]),e._v(" "),t("ul",[t("li",[e._v("在配置路由的时候(router/index.js)编写如下代码")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("import Vue from 'vue';\nimport Router from 'vue-router';\nimport routes from './router.js';\nimport store from '../store';\nVue.use(Router)\n\nconst router = new Router({\n  mode: 'history',\n  base: '/html/',\n  routes\n})\nrouter.beforeEach((to, from, next) => {\n  const getCookie = function(name){\n    var arr,reg=new RegExp(\"(^| )\"+name+\"=([^;]*)(;|$)\");\n    if(arr=document.cookie.match(reg)){\n      return unescape(arr[2]);\n    }else{\n      return null;\n    }\n  };\n  // 可以在路由元信息指定哪些页面需要登录权限\n  const token = getCookie('token')\n  // const token = store.state.token;\n  if (to.meta.requiresAuth && !token) { // 需要登录授权，这里还需要判断是否登录\n    next('/asv/login') // 跳转到登录\n    return\n  }\n  next()\n})\nexport default router;\n\n")])])]),t("ul",[t("li",[e._v("再在个个路由中添加如下代码，通过requiresAuth来判断是否需要用户登录")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("{\n    path: 'xx',\n    name: 'Xx',\n    component: Xx,\n    meta: {\n      requiresAuth: true\n    }\n}\n")])])]),t("h5",{attrs:{id:"有关移动端键盘的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#有关移动端键盘的问题"}},[e._v("#")]),e._v(" 有关移动端键盘的问题")]),e._v(" "),t("ul",[t("li",[e._v("一般只要当input框获取焦点时移动端的键盘就是自动弹起，而且会根据input框的类型弹出响应的键盘")]),e._v(" "),t("li",[e._v("可是有时候键盘的弹出会挡住部分输入框或者会导致样式发生变化")]),e._v(" "),t("li",[e._v("而且有时候我们会禁掉移动端的键盘")]),e._v(" "),t("li",[e._v("禁掉键盘代码如下：")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// 只需要在input标签中添加如下代码即可\nreadonly="readonly"\n')])])]),t("ul",[t("li",[e._v("有关键盘弹出造成样式发生变化的解决方法")])]),e._v(" "),t("ol",[t("li",[t("p",[e._v("尽量不要使用相对屏幕定位")])]),e._v(" "),t("li",[t("p",[e._v("当键盘挡住部分输入框时可以使用以下代码解决：")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("export default function input_on() {\n  const u = navigator.userAgent;\n  if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) { //安卓手机\n    window.addEventListener('resize', function () {\n      // Document 对象的activeElement 属性返回文档中当前获得焦点的元素。\n      if (document.activeElement.id === 'INPUT') {\n        // alert(document.activeElement.getElementsByClassName)\n        // console.log('安卓触发', document.activeElement.className)\n        window.setTimeout(function() {\n          document.activeElement.scrollIntoViewIfNeeded(\n            {\n              behavior: 'auto',\n              block: 'start'\n            }\n          );\n        }, 50);\n      }\n    })\n  }\n}\n// Element.scrollIntoViewIfNeeded（）方法用来将不在浏览器窗口的可见区域内的元素滚动到浏览器窗口的可见区域。 如果该元素已经在浏览器窗口的可见区域内，则不会发生滚动。\n// scrollIntoViewIfNeeded可以接受一个Boolean型参数，和scrollIntoView不同，true为默认值，但不是滚动到顶部，而是让元素在可视区域中居中对齐；false时元素可能顶部或底部对齐，视乎元素靠哪边更近。\n")])])]),t("ol",[t("li",[t("p",[e._v("还有就是当input框输入完毕后移动端键盘消失后有空白区域页面不下滑导致样式发生变化")]),e._v(" "),t("ul",[t("li",[e._v("解决方法如下:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(' <input type="tel" name="mobile" @click="switchmenu()" v-model="mobile" maxlength="11" @blur="fixScroll"/>\n \nfixScroll() { // 解决移动端键盘消失后有空白区域页面不下滑\n  let u = navigator.userAgent;\n  let isiOS = !!u.match(/\\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端\n  if (isiOS) {\n    window.scrollTo(0, 0);\n  }\n},\n')])])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);