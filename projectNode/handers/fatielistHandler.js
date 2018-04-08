const connect = require('../connect')
const fatieHandler = (req,res,next) =>{
	//获取前端发送来的数据
	let params = req.body;
	//返回信息
	let content = {err:null,data:{}}

	//连接数据库
	connect((db,close)=>{
		const post = db.collection('post');
		post.find({}).toArray(function(err,result){
			res.send(result)
		})
	});
};
module.exports = fatieHandler;