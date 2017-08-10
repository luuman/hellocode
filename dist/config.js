/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		1:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({"0":"app"}[chunkId]||chunkId) + "." + "d1a2c248cddb0aeca549" + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(9);


/***/ }),

/***/ 9:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var filePath = './';

	var config = {
	    //路径
	    'filePath': filePath,

	    //游戏
	    'mapSize': [10, 10],
	    'blockCount': 8,
	    'coinCount': 4,
	    'startPosition': [0, 0],
	    'startDirection': [1, 0],
	    'endPosition': null, //[9, 10]
	    'random': true,

	    //游戏默认资源列表
	    'resource': [filePath + 'assets/images/game/role/top/10001.png', filePath + 'assets/images/game/role/top/10002.png', filePath + 'assets/images/game/role/top/10003.png', filePath + 'assets/images/game/role/top/10004.png', filePath + 'assets/images/game/role/top/10005.png', filePath + 'assets/images/game/role/top/10006.png', filePath + 'assets/images/game/role/top/10007.png', filePath + 'assets/images/game/role/top/10008.png', filePath + 'assets/images/game/role/top/10009.png', filePath + 'assets/images/game/role/top/10010.png', filePath + 'assets/images/game/role/right/30001.png', filePath + 'assets/images/game/role/right/30002.png', filePath + 'assets/images/game/role/right/30003.png', filePath + 'assets/images/game/role/right/30004.png', filePath + 'assets/images/game/role/right/30005.png', filePath + 'assets/images/game/role/right/30006.png', filePath + 'assets/images/game/role/right/30007.png', filePath + 'assets/images/game/role/right/30008.png', filePath + 'assets/images/game/role/right/30009.png', filePath + 'assets/images/game/role/right/30010.png', filePath + 'assets/images/game/role/left/20001.png', filePath + 'assets/images/game/role/left/20002.png', filePath + 'assets/images/game/role/left/20003.png', filePath + 'assets/images/game/role/left/20004.png', filePath + 'assets/images/game/role/left/20005.png', filePath + 'assets/images/game/role/left/20006.png', filePath + 'assets/images/game/role/left/20007.png', filePath + 'assets/images/game/role/left/20008.png', filePath + 'assets/images/game/role/left/20009.png', filePath + 'assets/images/game/role/left/20010.png', filePath + 'assets/images/game/role/bottom/40001.png', filePath + 'assets/images/game/role/bottom/40002.png', filePath + 'assets/images/game/role/bottom/40003.png', filePath + 'assets/images/game/role/bottom/40004.png', filePath + 'assets/images/game/role/bottom/40005.png', filePath + 'assets/images/game/role/bottom/40006.png', filePath + 'assets/images/game/role/bottom/40007.png', filePath + 'assets/images/game/role/bottom/40008.png', filePath + 'assets/images/game/role/bottom/40009.png', filePath + 'assets/images/game/role/bottom/40010.png', filePath + 'assets/images/game/role/stop/top_stop.png', filePath + 'assets/images/game/role/stop/right_stop.png', filePath + 'assets/images/game/role/stop/bottom_stop.png', filePath + 'assets/images/game/role/stop/left_stop.png', filePath + 'assets/images/game/end.png', filePath + 'assets/audio/qmove.mp3', filePath + 'assets/audio/qeat.mp3'],
	    'random_resource': [filePath + 'assets/images/game/Lot_Meadow.png', filePath + 'assets/images/game/FOOD_Cake.png', filePath + 'assets/images/game/FOOD_Sausage.png', filePath + 'assets/images/game/FOOD_Mushroom.png'],

	    //游戏分值计算
	    'base_score': 2000,
	    'coin': 0,
	    'move': 0,

	    //地图
	    'mapType': 'lot',
	    'coinType': 'food',
	    'startType': 'q',

	    //test
	    'localtest': true
	};

	exports.default = config;

/***/ })

/******/ });