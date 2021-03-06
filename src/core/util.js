var Node = require('./node.js');
var helper = require('./helper.js');

module.exports = (function(){
  var util = {};

  var OPTIONS = {
    minWidth: 20,
    maxWidth: 20,
    minPos: 0,
    maxPos: 800
  };

  util.generateNodes = function(amount, options){
    var nodes = [];
    options = helper.extend({}, OPTIONS, options);
    var diffPos = options.maxPos - options.minPos;
    var diffWidth = options.maxWidth - options.minWidth;
    for(var i=0;i<amount;i++){
      nodes.push(new Node(
        Math.floor(Math.random()*diffPos) + options.minPos,
        Math.floor(Math.random()*diffWidth) + options.minWidth
      ));
    }
    return nodes;
  };

  return util;
}());