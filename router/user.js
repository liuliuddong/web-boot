// 引入
const express = require('express');
// 导入连接池模块
const pool = require('../pool.js');
// 创建路由器对象
const router = express.Router();
// 登录路由
router.post('/login', (req, res) => {
    var _uname = req.body.uname;
    var _upwd = req.body.upwd;
    var sql = "select * from xz_user where uname=? and upwd=?";
    pool.query(sql, [_uname, _upwd], (err, result) => {
        if (err) throw err;
        console.log(result);
        if (result.length > 0) {
            res.send("1");
        } else {
            res.send("0");
        }
    });

});



// 导出路由器对象
module.exports = router;