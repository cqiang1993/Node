//var a = require('./a.js');
//var c = require('./c');
//var d = require('./d') //��ʶ��jso�ļ���׺�����ᱨ��
//var e = require('e');
//console.log(require);
/**
 * id ID
 * exports ��������
 * parent ��������ģ��
 * filename ģ���ļ���
 * loaded �Ƿ���سɹ�
 * children ����Щģ��������
 * paths
 */
var a = require('./a');
/*var a = require('../module/a');*/
//console.log(module);
/*{key:value}
{'ģ��ľ���·��':{module}}*/
console.log(require.cache[require.resolve('./b')].children[0]);
