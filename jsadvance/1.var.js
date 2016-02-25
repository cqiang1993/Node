/**
 * 在js var function 需要预解释的
 * var 只声明不赋值
 * function 声明并且复制
 */
console.log(num);//undefined
var num = 9;
hello();// hello
world();// 报错
function hello(){
    console.log('hello');
}
var world = function(){
    console.log('world');
}