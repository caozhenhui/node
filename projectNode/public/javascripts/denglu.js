$("#form").on("submit",function(event){
		event.preventDefault();
});
$("#present").on("click",function(){
	$.ajax({
		url:'/api/v1/denglu',
		data:{
			username:$('#username').val(),
			password:$('#password').val()
		},
		type:'post',
		success:function(result){
			let message = '';
			let type = '';
			switch(result.err){
				case 500:message = '服务器错误';type = 'error';break;
				case 200:message = '登录成功';type ='success';break;
				case 103:message = '密码错误';type ='error';break;
				case 102:message = '账号不存在';type = 'error';break;
			};
			$.message({
				message,
				type,
				time:'1000'
			});
			if(type === 'success'){
				var indexTZ = setTimeout(function(){
					location.href = '/';
					clearTimeout('indexTZ');
				},1400);
			};
			//存储cookie信息
			$.cookie('userinfo',JSON.stringify(result.data),{expires:7})
		}
	});
});