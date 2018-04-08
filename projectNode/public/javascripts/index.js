$(function(){
	getBanner();
});

//渲染图片
function getBanner(){
	$.ajax({
		url:'api/v1/banner',
		success:function(result){
			if(result.err === 500){
				console.log('服务器错误')
			}else{
				$('#banner01').prop('src',result.data[0].imgUrl);
				$('#banner02').prop('src',result.data[1].imgUrl);
			}
		}
	});
};