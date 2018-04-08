const config = require('../config')
const MongoClient = require('mongodb').MongoClient;
//获取数据库名字 和 地址
const url = config.mongo_url;
const dbName = config.mongo_name;

const connect = (callback) => {
	MongoClient.connect(url, function(err, client) {
	    const db = client.db(dbName);
	    const close = client.close.bind(client)
	    callback(db,close)    
	  });
	}

module.exports = connect