// 引入模块
const express = require('express');
// 引入路由器
const userRouter = require('./router/user.js');
// 引入第三方模块
const bodyParser = require('body-parser');
// 创建服务器
const app = express();


// 设置端口号
app.listen(8080);

// 托管静态资源
app.use(express.static("public"));
// shiyong第三方模块
app.use(bodyParser.urlencoded({
    extended: false
}));


// 挂载路由器
app.use('/user', userRouter);