/**
 * Ӧ�ó����ǽ�����Ķ���ʵ��
 * ��node.js���棬process �������node.jsӦ�ó���
 * ���Ի�ȡӦ�ó�����û������л����ȸ�����Ϣ
 */

//console.log(process);

/**
 *
 **/
//console.log('hello');
//process.stdout.write('hello');
// btn.addEventLister('click'.function(){});
//������̨���յ�����֮�����ûص��������д���
//process.stdin.on('data',function(data){
//    process.stdout.write(''+data);
//});

//process.argv.forEach(function(item){
//    console.log(item);
//});
////�������˳���ʱ�򣬽���������
//process.on('exit',function(){
//    console.log('clear');
//});

process.on('uncaughtException',function(err){
    console.log(err);
})
try{
    outer();
    try{
        inner();
    }catch(e){
        console.log(e);
    }
}catch(err){
    console.log(err);
}
//打印堆栈并输出
noMethod();

console.log('正常代码');

