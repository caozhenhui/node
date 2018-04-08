const connect = require('../connect')
const dengluHandler = (req,res,next) =>{
	//获取前端发送来的数据
	let params = req.body;
	//返回信息
	let content = {err:null,data:{}}
	//连接数据库
	connect((db,close)=>{
		//查找是否有此用户
		//获取对应的集合
		let users = db.collection('uers');
		users.find({username:params.username}).toArray(function(err,result){
			if(err) {
				//服务器出错
				console.log(err); 
				content = {err:500,data:{}};	
				res.send(content);
				close();
				return false;
			}else{
				if(!result.length){
					//账户不存在
					content.err = 102;
					res.send(content);
					close();
					return false;
				}else{
					//密码正确登录成功
					if(result[0].password === params.password){
						content.err = 200;
						//删除密码
						delete result[0].password;
						content.data = result[0];
						res.send(content);
						close();
						return false;
					}else{
						//密码不正确
						content.err = 103;
						res.send(content);
						close();
						return false;
					};
				};
			};
		});
	});
};
module.exports = dengluHandler