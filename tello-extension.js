// Code used to test out of Scratch
// var ScratchExtensions = {
// 	register: function(name, descriptor, ext) {}
// };
//
// var $ = {
// 	ajax: function(body) {}
// };

// Actual extention codes
new (function() {
	var ext = this;
	ext._shutdown = function() {}
	ext._getStatus = function() {
		return {status: 2, msg: 'Ready'};
	}
	ext.callServer = function(command, value) {
		var url = 'http://localhost:8001/' + command;
		if(value) {
			url += '/' + value;
		}
		console.log(url);
		$.ajax({
			url: url,
		});
	};
	ext.takeoff = function() {
		ext.callServer('takeoff');
	};
	ext.land = function() {
		ext.callServer('land');
	};
	ext.up = function(value) {
		ext.callServer('up', value);
	};
	ext.down = function(value) {
		ext.callServer('down', value);
	};
	ext.left = function(value) {
		ext.callServer('left', value);
	};
	ext.right = function(value) {
		ext.callServer('right', value);
	};
	ext.forward = function(value) {
		ext.callServer('forward', value);
	};
	ext.back = function(value) {
		ext.callServer('back', value);
	};
	ext.cw = function(value) {
		ext.callServer('cw', value);
	};
	ext.ccw = function(value) {
		ext.callServer('ccw', value);
	};
	ext.flip = function(value) {
		ext.callServer('flip', value);
	};
	ext.setspeed = function(value) {
		ext.callServer('setspeed', value);
	};
	var descriptor = {
		blocks: [
			[" ", "take off", "takeoff"],
			[" ", "land", "land"],
			[" ", "fly up with distance %n", "up", 20],
			[" ", "fly down with distance %n", "down", 20],
			[" ", "fly left with distance %n", "left", 20],
			[" ", "fly right with distance %n", "right", 20],
			[" ", "fly forward with distance %n", "forward", 20],
			[" ", "fly back with distance %n", "back", 20],
			[" ", "rotate CW with angle %n", "cw", 90],
			[" ", "rotate CCW with angle %n", "ccw", 90],
			[" ", "flip with duration %s", "flip", "f"],
			[" ", "set speed %n", "setspeed", 80],
		]
	};
	ScratchExtensions.register('Tello extension', descriptor, ext);

  // Test some calls
	// ext.land();
	// ext.takeoff();
	// ext.up(10);
	// ext.down(10);
	// ext.left(10);
	// ext.right(10);
	// ext.forward(10);
	// ext.back(10);
	// ext.cw(10);
	// ext.ccw(10);
	// ext.flip(10);
	// ext.setspeed(12);
})();
