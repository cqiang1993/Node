/**
 * ����̨��һ������
 */
//log ��׼���
console.log('this is a log');
//�ض����ļ���
console.log('%s',"zfpx");//string
console.log('%s',{name:'zfpx'});//string
console.log('%j',{name:'zfpx'});//json
console.log('%d',99.99);
console.log('%d',"99.99");
console.log('%d',"zfpx");//�Ѳ���ת��Ϊ����

console.log(1+1);//��������
var a = 1,b=2;
console.log(a+b);//�������
console.log(5===3)//���㲼��ֵ

console.info('info');
console.warn('warn');
console.error('error');

var person = {
    name:'zfpx',
    age:7
}
console.log(JSON.stringify(person));

console.dir(person);//�鿴�������ݲ����

console.trace('trace');
