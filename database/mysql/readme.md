#介绍
1.mysql是一个多用户，多线程的SQL数据库服务器
使用SQL(结构化查询语言)
2.由服务器和客户端组成


#创建数据库
``` create database blog;```

#切换数据库
``` use blog ```

#删除数据库
``` drop database blog;```

#显示数据库
``` show databases like 'zfpx%';```
``` show databases ```

#创建表
``` create table person(id int primary key auto_increment,name varchar(32));```
primary key 主键
auto_increment 自动增长

#插入行
``` insert into person(name) values('zfpx'); ```

#查询行
``` select * from person; ```
 
#修改行
``` update person set name = 'zfpx2' where id=1;```

#删除行
``` delete from person where id = 1; ```

#增加列
``` alter table person add age int;```

#修改列
``` alter table person modify age varchar(2); ```

#修改列名
``` alter table person change age age2 int; ```

#删除列
``` alter table person drop age2; ```

#修改表名
``` alter table person rename student; ```

#查询
##查询结构
SELECT 列名
FROM 表名
WHERE 条件
GROUP BY 分组列
HAVING 对分组后的数据进行过滤
ORDER BY 排序条件

##基础数据
2	张三	80	北京
3	李四	70	北京
4	王五	90	上海

##案例
###我要查询所有的分数
```select score from student;```
###我要查询北京考生的分数
```select score from student where city = '北京'```
###查询各个城市考生的平均成绩
```select city,avg(score) from student group by city;
min 最小值
max 最大值
sum 求和
count 计算总行数```
###查询平均分数大于等于90分的城市
```select city,avg(score) from student group by city having avg(score)>=90;```
###查询平均分数大于等于60分的城市数据，并且按照分数从高到低进行排序
```select city,avg(score) from student group by city having avg(score)>=60 order by avg(score) desc;
asc 从低到高
desc 从高到低```
