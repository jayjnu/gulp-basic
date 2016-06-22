/**
 * Created by zach on 2016. 6. 22..
 */
class Evt {
	constructor(){
		var oldIE = window.addEventListener ? false : true;
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