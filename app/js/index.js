/**
 * Created by zach on 2016. 6. 19..
 */
'use strict';
class Evt {
	constructor(){
		var oldIE = window.addEventListener ? false : true;
		console.log(oldIE);
		if(oldIE){
			this.addListener = this.attachListener;
		}
	}
	addListener(target, action, fn){
		var el = document.getElementById(target);
		el.addEventListener(action, fn);

		return el;
	}
	attachListener(target, action, fn){
		var el = document.getElementById(target);
		el.attachEvent('on' + action, fn);

		return el;
	}
}

$(document).ready(function(){
	var msg_visual = ['Gulpfile을 이용해서', '편하게 개발하자', '템플릿 엔진을 써보자', '써보면 재밌음.' ];


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

	var evt = new Evt();

	evt.addListener('mArticle', 'mouseenter', function(){
		console.log('This is working');
	});

});

var didStart = false;
var a = new Promise(function(resolve, reject){
	didStart = true;
	console.log("Promise Started");
	setTimeout(function(){resolve(didStart);}, 5000);
});

a.then(function(){setTimeout( () => console.log('five seconds passed after start!'), 2000);})
	.then(function(){console.log("i dont know what to do")});



