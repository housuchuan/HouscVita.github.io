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
		var $personalPubinfo = $('#personal-pubinfo li');
		
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
				}, 1500,function(){
					for (var i = 0; i < $personalPubinfo.length; i++) {
						$($personalPubinfo[i]).fadeIn((i+1)*1500);
					};
				});
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

//第二模块开发
$(function($){
	//轮播图
	//声明DOM
	var $worklistdom = $('#workinfo-list'),
		$workdom = $('#work');
	//声明常量
	var worklisthei = parseInt($worklistdom.height()),
		//外层包裹层高度
		workhei = parseInt($workdom.height());
		
	//函数执行区
	//信息轮播定时器
	var inforun = function(){
		if (worklisthei <= workhei) {
			//函数不执行
		} else{
			$worklistdom.animate({
				marginTop: '-40px'
			},3000,function(){
				$worklistdom.children('li:first-child').appendTo($worklistdom);
				$worklistdom.css('margin-top','0');
			});
		};
	};
	//启动定时器
	var personalrun = setInterval(inforun,3000);
	
	$workdom.hover(function(){
		//清除定时器
		clearInterval(personalrun);
	},function(){
		//重新开启定时器
		personalrun = setInterval(inforun,3000);
	});
}(jQuery));

//第三模块开发
$(function($){
	//声明dom
	var skilldom = $('#skill');
	skilldom.on('click','.skill-icon',function(){
		var _this = $(this).parent().find('.skill-arrow'),
			_thisD = $(this).parent().find('.skill-detail'),
			_thisR = $(this).parents('li').siblings().find('.skill-arrow'),
			_thisDr = $(this).parents('li').siblings().find('.skill-detail');
		if (_this.hasClass('skill-active')) {
			_this.removeClass('skill-active');
		} else{
			_this.addClass('skill-active');
		};
		_thisR.removeClass('skill-active');
		_thisDr.slideUp();
		_thisD.stop().slideToggle();
	});
}(jQuery));

