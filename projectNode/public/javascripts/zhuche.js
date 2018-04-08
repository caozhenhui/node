$("#form").on("submit",function(event){
		event.preventDefault();
});
$("#present").on("click",function(){
	$.ajax({
		url:'/api/v1/zhuche',
		data:{
			username:$('#username').val(),
			password:$('#password').val(),
			nickname:$('#nickname').val()
		},
		type:'post',
		success:function(result){
			let message = '';
			let type = '';
			switch(result.err){
				case 500:message = '服务器错误';type ='error';break;
				case 200:message = '注册成功';type ='success';break;
				case 400:message = '用户已存在';type ='error';break;
				default:message = '未知错误';type = 'error';
			};
			$.message({
				message,
				type,
				time:'1000'
			});
			if(type === 'success'){
				var dengluTZ = setTimeout(function(){
					location.href = '/denglu';
					clearTimeout('dengluTZ');
				},1400);
			};
		}
	});
});