var EventEmitter = require('events').EventEmitter;
/**
 *  on 绑定
 *  once 触发一次就解绑
 *  addListener 绑定
 *  removeListener 移除监听
 *  removeAllListeners 移出所有监听
 *  listeners 得到此对象上绑定的所有函数
 */
var util = require('util');
function Teacher(name){
    this.name = name;
}
util.inherits(Teacher,EventEmitter);

var zry = new Teacher();
zry.on('hungry',function(){
    console.log('吃饭');
    return "饿了回家吃去吧"
});
var soup = function(){
    console.log('喝汤');
    return "别喝汤了"
}
zry.addListener('hungry',soup);
zry.once('love',function(){
    console.log('结婚')
})

//zry.removeListener('hungry',soup);
//zry.removeAllListeners('hungry')
zry.emit('hungry');
zry.emit('love');

console.log(zry.listeners('hungry')[0]());