/**
 *作者：侯苏川(housc)
 *时间：2016-01-16 16:34:48
 *描述：  a vita for housc
 */

//初始化分页
$(document).ready(function() {
	//滚页外层dom
	$(".main").onepage_scroll({
		//分页相应配置
		sectionContainer: "section",
		responsiveFallback: 600,
		loop: true
	});
});

//第一模块代码编写(首页)
(function($) {
	//第一幅画
	//声明常量dom
	//第一幅画的页面包裹层dom
	var $page1 = $('#page1'),
		//我的介绍栏目头dom
		$userInfo = $('#userinfo'),
		//个人细节介绍包裹层dom
		$declaration = $('#personal-detail');
		
	//数据断续加载
	var sliderpage = function(){
		
		//个人信息头颜色渐变
		$userInfo.animate({
			opacity: .8
		}, 3500);
		
		//首页第一幅页面背景自定义动画
		$page1.animate({
			backgroundSize: '100%',
			paddingTop: '160px'
		}, 1500,function(){
			$('.personal-declaration',$page1).fadeIn(1500,function(){
				$declaration.animate({
					width: '100%'
				}, 1500);
			});
		});
	};
		
	//数据断续加载初始化
	sliderpage();
	
	//个人信息切换，涉及页面操作
	$('.data-item2',$userInfo).hover(function(){
		//鼠标移入
		$('.introuce-name',$userInfo).text('网站与前端研发工程师');
		$('.introduce-file',$userInfo).text('江苏国泰新点软件有限公司');
	},function(){
		//鼠标移出
		$('.introuce-name',$userInfo).text('housc');
		$('.introduce-file',$userInfo).text('个人简历');
	});
	
})(jQuery);

