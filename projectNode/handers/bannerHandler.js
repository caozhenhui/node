const connect = require('../connect');

const bannerHandler = (req,res,next) =>{
	//取出轮播图数据
	connect((db,close)=>{
		const banners = db.collection('banners');
		let content = {err:null,data:{}};
		banners.find({}).toArray((err,result)=>{
			if(err){
				content.err = '500';
				res.send(content);
				close();
			}else{
				content.err = '200';
				content.data = result;
				res.send(content);
				close();
			};
		});
	});
};

module.exports = bannerHandler;