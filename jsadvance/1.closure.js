/**
 �հ���ʵ�Ǻ�������ʱ������˽��������
 **/
var i = 9;
var m = 0;
function fo(){
    i = 0;
    return function(n){
        return n+(m++)+i++;
    }
}
var f = fo();
var a = f(15);console.log(a);//15
var b = fo()(15);console.log(b);//16
var c = fo()(20);console.log(c);//22
var d = f(20);console.log(d)//24