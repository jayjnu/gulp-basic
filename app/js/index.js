/**
 * Created by zach on 2016. 6. 19..
 */
'use strict';
console.log('Hello World!?');
$(document).ready(function(){
	var msg_visual = ['Gulpfile을 이용해서', '편하게 개발하자', '템플릿 엔진을 써보자', '써보면 재밌다.'];


	var desc = $('.desc_article');
	var index = 0;
	var step = 1500;

	function changeText(){
		desc.addClass('off');
		if(index == msg_visual.length -1){
			index = 0;
		}
		index++;

		setTimeout(function(){
			desc.text(msg_visual[index]);
			desc.removeClass('off');
			setTimeout(changeText, step);
		}, step);
	}

	setTimeout(changeText,step);
});



