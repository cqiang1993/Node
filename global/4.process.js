/**
 *{ rss: 21581824, heapTotal: 9275392, heapUsed: 3981528 }
 * rss 进程常驻内存 resident set size
 * heapTotal 申请到的堆内存
 * heapUsed 使用的堆内存
 **/
console.log(process.memoryUsage());
//current working direcoty
console.log(process.cwd());
console.log(__dirname);
process.chdir('..');
console.log(process.cwd());
console.log(__dirname);

