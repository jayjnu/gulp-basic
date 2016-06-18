/**
 * Created by zach on 2016. 6. 19..
 */
'use strict';
console.log('Hello World!?');
var arr = ['J', 'U', 'N', 'G'];


class Shape {
	constructor (id, x, y) {
		this.id = id;
		this.move(x, y);
	}
	move (x, y) {
		this.x = x;
		this.y = y;
	}
}