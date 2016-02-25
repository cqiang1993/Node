/**
 *  预解释是在作用域内进行的预解释
 **/
var num = 9;
var name = 'zfpx';
function say(){
    console.log(num);//undefined
    console.log(name);//zfpx
    num = 4;
    var num = 5;
}
say()