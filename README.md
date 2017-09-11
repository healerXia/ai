# ai
ai官网

在webpack-build-common的打包文件里使用，在apps里进行书写，src是源码，online是存放生产环境打包的代码

在package.json里写入
"dev-ai": "set name=ai&&set port=3002&&set node_env=develop&&webpack-dev-server",
"build-ai": "set name=ai&&set port=3002&&set node_env=production&&webpack"

执行：npm run dev-ai
打包：npm run build-ai
然后在浏览器中输入localhost:3002/
官网网址：http://192.168.55.97/static_ai-web/#/home
