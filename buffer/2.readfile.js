var fs =require('fs');
/**
 * path ��ȡ���ļ�·��
 */
fs.readFile('msg.txt',function(err,data){
    if(err){
        console.error(err);
    }else{
        //<Buffer 41 42 43>
        console.log(data)
    }
})