const connect = require('../connect')
const fatieHandler = (req,res,next) =>{
	//获取前端发送来的数据
	let params = req.body;
	//返回信息
	let content = {err:null,data:{}}

	//连接数据库
	connect((db,close)=>{
		const post = db.collection('post');
		//存入 content title time author hot
		params.time = Date.now()
		post.insertOne(params,(err,result)=>{
			if(err){
				console.log(err);
				content.err = 500;
				res.send(content);
				close();
			}else{
				content.err = 200;
				res.send(content);
				close();
			}
		})
	});
};
module.exports = fatieHandler;