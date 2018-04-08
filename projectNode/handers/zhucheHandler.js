const connect = require('../connect')
const zhucheHandler = (req,res,next) =>{
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
				console.log(err); 
				content = {err:500,data:{}};	
				res.send(content);
				close();
				return false;
			};
			if(result.length){
				//有此用户
				content = {err:400,data:{}};
				res.send(content);
				close();
			}else{
				params.headImg = '/images/ergou.jpg';
				users.insertOne(params,(err,results)=>{
					if(!err){
						//成功
						content = {err:200,data:{}}
					}else{
						//失败
						content = {err:500,data:{}}
					};
					//返回数据给前端
					res.send(content);
					close();
				});
			};
		});
	});
};
module.exports = zhucheHandler