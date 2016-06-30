/**
 * Created by zach on 2016. 6. 30..
 */
class Listen{
	constructor(target){
		this.init(target);
		this.name = this.extractNodeString(target);
		Listen.cache.instances[this.name] = this;
	}

	cache = {};

	getTarget(selector){
		var selectors = selector.split(','),
			cache = Listen.cache.el;
		selectors.forEach(function(el){
			var node = this.extractNodeString(el);
			this.target = cache[node] = !cache[node] ? selectNode(nodes) : cache[node];
		});

		function selectNode(nodes, context, index){
			var target = null,
				parent = context || document,
				startAt = index || 0,
				endAt = nodes.length - 1,
				node = nodes[startAt];
			try{
				switch(node[0]){
					case '#': target = parent.getElementById(node.slice(1)); break;
					case '.': target = parent.querySelectorAll(node); break;
					default: target = parent.getElementsByTagName(node); break;
				}
			}catch(err){
				throw err + " / 제대로 된 쿼리가 아닙니다.";
			}


			if(startAt != endAt){
				startAt += 1;
				selectNode(nodes, target, startAt);
			}else{
				return target;
			}

		}

		return this;
	}

	listen(event, callback){
		var target = this.target;
		if(this.cache.browser.isModern){

		}
	}

	static detectBrowser(){
		Listen.cache.broswer.isModern = window.addEventListener ? true : false;
	}

	extractNodeString(str){
	var nodes = str.replace(/^\s+|\s$/gm, '').replace(/\s{2,}/g, ' ').split(' ');
	return nodes[nodes.length - 1];
}

	init(target){
		var cache = Listen.cache = {};
		cache.el = {};
		cache.browser = {};
		cache.instances = {};
		this.getTarget(target);
	}
}

var hey = function(target){
	var listen = Listen.prototype;
	console.log(listen);
	var node = listen.extractNodeString(target);
	if(listen.cache.el[node]){

	}
	return new Listen(target);
};