var path = require('path');
var fs = require('fs');

/**
 * normalize ���Ǳ�׼����·��ת���ɱ�׼��·��
 * 1.���� . �� ..
 * 2.���б�ܻ�ת��һ��б��
 * 3.window�µ�б�ܻ�ת����б��
 * 4.�����б�ܽ�β�ᱣ��
 **/
console.log(path.normalize('./a////b//..\\c//e//..//'));
// a\c\
//��������ַ����ϲ���һ��·�� �ַ���
console.log(path.join(__dirname,'a','b'));

/**
 * resolve
 * ��Ӧ�ó���Ϊ��Ŀ¼����Ϊ��㣬���ݲ���������һ������·��
 * 1.��Ӧ�ó���Ϊ�����
 * 2. .. .
 * 3.��ͨ �ַ���������Ŀ¼
 * 4. /�������·��
 */

console.log(path.resolve());//�մ���ǰ��Ŀ¼ ·��
console.log(path.resolve('a','..','c','b'));
//d:\WebstormProjects\node\path\c\b

console.log(path.resolve('a','/c'));
//d:\c

/**
 * ���Ի�ȡ ����·��֮�����Թ�ϵ
 */
console.log(path.relative(__dirname,'/a'));
//  ..\..\..\a
//����ָ��·��������Ŀ¼
console.log(path.dirname(__dirname));//d:\WebstormProjects\node
console.log(path.dirname('./1.path.js'));// .
//basename ��ȡ·���е��ļ���
console.log(path.basename(__filename));