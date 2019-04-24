
insert into userinfo(useraccount,username,state)
values ('test','test123','1');
insert into userinfo(useraccount,username,state)
values ('50123216','zyli','1');
insert into userinfo(useraccount,username,state)
values ('admin','admin','1');
insert into roleinfo(roleid,desc_,state)
values ('admin','admin','1');
insert into roleinfo(roleid,desc_,state)
values ('cim','admin3','1');
insert into roleinfo(roleid,desc_,state)
values ('it','itsbcd','1');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('admin','label','','root','1','N','hello','1','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('user','label','admin/user','admin','11','Y','','1','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('role','label','admin/role','admin','12','Y','','1','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('menu','label','admin/menu','admin','13','Y','','1','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('UserRoleLink','label','admin/userRoleLink','admin','14','Y','','0','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('RoleMenuLink','label','admin/roleMenuLink','admin','15','Y','','0','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('MES UI','view_list','','root','2','N','','1','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('menu.type1','','mes-ui/type1','MES UI','21','Y','','1','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('type2','','mes-ui/type2','MES UI','22','Y','','1','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('type3','','mes-ui/type3','MES UI','23','Y','','1','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('REPORT UI','desktop_mac','','root','3','N','','1','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('report-type1','','report-ui/type1','REPORT UI','31','Y','','1','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('report-type2','','report-ui/type2','REPORT UI','32','Y','','1','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('report-type3','','report-ui/type3','REPORT UI','33','Y','','1','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('DASHBOARD UI','dashboard','','root','4','N','','1','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('dashboard-type1','','dash-board-ui/type1','DASHBOARD UI','41','Y','','1','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('dashboard-type2','','dash-board-ui/type2','DASHBOARD UI','42','Y','','1','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('dashboard-type3','','dash-board-ui/type3','DASHBOARD UI','43','Y','','1','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('BOE UI','refresh','','root','5','N','','1','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('menu.list','sentiment_neutral','boe-ui/boe-list','BOE UI','51','Y','','1','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('menu.grid','grid_on','boe-ui/boe-grid','BOE UI','52','Y','','1','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('menu.chart','insert_chart','boe-ui/boe-chart','BOE UI','53','Y','','1','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('menu.dashboard','dashboard','boe-ui/boe-dashboard','BOE UI','54','Y','','1','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('DashBoard1','dashboard','boe-ui/type4','BOE UI','55','Y','','1','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('DashBoard2','dashboard','boe-ui/type5','BOE UI','56','Y','','1','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('BOE Pages','cloud','','root','6','N','','1','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('TEST','','pages/test','BOE Pages','61','Y','','1','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('TEST1','','pages/test1','BOE Pages','62','Y','','1','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('ECHART','','pages/echarts','BOE Pages','63','Y','','1','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('DEVICE','','pages/device','BOE Pages','64','Y','','0','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('ICONS','search','','root','7','N','','1','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('Font Awesome','sentiment_neutral','icons/fontawesome','ICONS','71','Y','','1','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('Material','sentiment_neutral','icons/material','ICONS','71','Y','','1','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('MDL WIP Distribution','','dash-board-ui/type4','ZhaS','91','Y','','1','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('log','label','','root','81','N','system log','1','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('userlogin','label','log/userlogin','log','811','Y','','1','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('menuclick','label','log/menuclick','log','812','Y','','1','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('reportload','label','log/reportload','log','813','Y','','1','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('analysispage','label','log/analysispage','log','814','Y','','1','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('Spec','','','root','10','N','','1','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc_,state,createuser)
values ('Spec Table','','spec/specTable','Spec','101','Y','','1','admin');
insert into menuinfo(menuid,icon,routerlink,parentid,sort,isleaf,desc,state,createuser)
values ('Spec Import','label','spec/specImport','Spec','102','Y','',true,'admin');
insert into userrolelink(useraccount,roleid)
values ('test','admin');
insert into userrolelink(useraccount,roleid)
values ('50123216','admin');
insert into userrolelink(useraccount,roleid)
values ('admin','admin');
insert into userrolelink(useraccount,roleid)
values ('test','cim');
insert into userrolelink(useraccount,roleid)
values ('50123216','cim');
insert into userrolelink(useraccount,roleid)
values ('50123333','cim');
insert into userrolelink(useraccount,roleid)
values ('test','it');
insert into userrolelink(useraccount,roleid)
values ('50123216','it');
insert into userrolelink(useraccount,roleid)
values ('50123333','it');
insert into rolemenulink(roleid,menuid)
values ('admin','admin');
insert into rolemenulink(roleid,menuid)
values ('admin','user');
insert into rolemenulink(roleid,menuid)
values ('admin','role');
insert into rolemenulink(roleid,menuid)
values ('admin','menu');
insert into rolemenulink(roleid,menuid)
values ('admin','UserRoleLink');
insert into rolemenulink(roleid,menuid)
values ('admin','RoleMenuLink');
insert into rolemenulink(roleid,menuid)
values ('admin','MES UI');
insert into rolemenulink(roleid,menuid)
values ('admin','menu.type1');
insert into rolemenulink(roleid,menuid)
values ('admin','type2');
insert into rolemenulink(roleid,menuid)
values ('admin','type3');
insert into rolemenulink(roleid,menuid)
values ('admin','REPORT UI');
insert into rolemenulink(roleid,menuid)
values ('admin','report-type1');
insert into rolemenulink(roleid,menuid)
values ('admin','report-type2');
insert into rolemenulink(roleid,menuid)
values ('admin','report-type3');
insert into rolemenulink(roleid,menuid)
values ('admin','DASHBOARD UI');
insert into rolemenulink(roleid,menuid)
values ('admin','dashboard-type1');
insert into rolemenulink(roleid,menuid)
values ('admin','dashboard-type2');
insert into rolemenulink(roleid,menuid)
values ('admin','dashboard-type3');
insert into rolemenulink(roleid,menuid)
values ('admin','BOE UI');
insert into rolemenulink(roleid,menuid)
values ('admin','menu.list');
insert into rolemenulink(roleid,menuid)
values ('admin','menu.grid');
insert into rolemenulink(roleid,menuid)
values ('admin','menu.chart');
insert into rolemenulink(roleid,menuid)
values ('admin','menu.dashboard');
insert into rolemenulink(roleid,menuid)
values ('admin','DashBoard1');
insert into rolemenulink(roleid,menuid)
values ('admin','DashBoard2');
insert into rolemenulink(roleid,menuid)
values ('admin','BOE Pages');
insert into rolemenulink(roleid,menuid)
values ('admin','TEST');
insert into rolemenulink(roleid,menuid)
values ('admin','TEST1');
insert into rolemenulink(roleid,menuid)
values ('admin','ECHART');
insert into rolemenulink(roleid,menuid)
values ('admin','DEVICE');
insert into rolemenulink(roleid,menuid)
values ('admin','ICONS');
insert into rolemenulink(roleid,menuid)
values ('admin','Font Awesome');
insert into rolemenulink(roleid,menuid)
values ('admin','Material');
insert into rolemenulink(roleid,menuid)
values ('admin','Production Dashboard');
insert into rolemenulink(roleid,menuid)
values ('admin','Total DashBoard');
insert into rolemenulink(roleid,menuid)
values ('admin','Factory Dashboard');
insert into rolemenulink(roleid,menuid)
values ('admin','Transparent Display');
insert into rolemenulink(roleid,menuid)
values ('admin','MDL WIP Distribution');
insert into rolemenulink(roleid,menuid)
values ('admin','log');
insert into rolemenulink(roleid,menuid)
values ('admin','menuclick');
insert into rolemenulink(roleid,menuid)
values ('admin','userlogin');
insert into rolemenulink(roleid,menuid)
values ('admin','reportload');
insert into rolemenulink(roleid,menuid)
values ('admin','analysispage');
insert into rolemenulink(roleid,menuid)
values ('cim','role');
insert into rolemenulink(roleid,menuid)
values ('cim','admin');
insert into rolemenulink(roleid,menuid)
values ('admin','Spec Table');
insert into rolemenulink(roleid,menuid)
values ('admin','Spec');
insert into rolemenulink(roleid,menuid)
values ('admin','Spec Import');

INSERT INTO sample(no,name) VALUES (sample_seq.nextval,'test1');

INSERT INTO sample(no,name) VALUES (sample_seq.nextval,'test2');



INSERT INTO grid_table(gridKey,col1,col2,col3,col4,col5,col6,col7,col8,col9,regDate) 
VALUES (grid_table_seq.nextval,'1','data2','data3','data4','data5','10','20','30','40',(select sysdate  from dual));


INSERT INTO grid_table(gridKey,col1,col2,col3,col4,col5,col6,col7,col8,col9,regDate) 
VALUES (grid_table_seq.nextval,'2','data2','data3','data4','data5','10','20','30','40',(select sysdate  from dual));


INSERT INTO grid_table(gridKey,col1,col2,col3,col4,col5,col6,col7,col8,col9,regDate) 
VALUES (grid_table_seq.nextval,'3','data2','data3','data4','data5','10','20','30','40',(select sysdate  from dual));


INSERT INTO grid_table(gridKey,col1,col2,col3,col4,col5,col6,col7,col8,col9,regDate) 
VALUES (grid_table_seq.nextval,'4','data2','data3','data4','data5','10','20','30','50',(select sysdate  from dual));


INSERT INTO grid_table(gridKey,col1,col2,col3,col4,col5,col6,col7,col8,col9,regDate) 
VALUES (grid_table_seq.nextval,'5','data2','data3','data4','data5','10','20','30','50',(select sysdate  from dual));


INSERT INTO grid_table(gridKey,col1,col2,col3,col4,col5,col6,col7,col8,col9,regDate) 
VALUES (grid_table_seq.nextval,'6','data2','data3','data4','data5','10','20','30','40',(select sysdate  from dual));


INSERT INTO grid_table(gridKey,col1,col2,col3,col4,col5,col6,col7,col8,col9,regDate) 
VALUES (grid_table_seq.nextval,'7','data2','data3','data4','data5','10','20','30','40',(select sysdate  from dual));


INSERT INTO grid_table(gridKey,col1,col2,col3,col4,col5,col6,col7,col8,col9,regDate) 
VALUES (grid_table_seq.nextval,'8','data2','data3','data4','data5','10','20','30','40',(select sysdate  from dual));


INSERT INTO grid_table(gridKey,col1,col2,col3,col4,col5,col6,col7,col8,col9,regDate) 
VALUES (grid_table_seq.nextval,'9','data2','data3','data4','data5','10','20','30','40',(select sysdate  from dual));


INSERT INTO grid_table(gridKey,col1,col2,col3,col4,col5,col6,col7,col8,col9,regDate) 
VALUES (grid_table_seq.nextval,'10','data2','data3','data4','data5','10','20','30','40',(select sysdate  from dual));


INSERT INTO grid_table(gridKey,col1,col2,col3,col4,col5,col6,col7,col8,col9,regDate) 
VALUES (grid_table_seq.nextval,'11','data2','data3','data4','data5','10','20','30','40',(select sysdate  from dual));


INSERT INTO grid_table(gridKey,col1,col2,col3,col4,col5,col6,col7,col8,col9,regDate) 
VALUES (grid_table_seq.nextval,'12','data2','data3','data4','data5','10','20','30','40',(select sysdate  from dual));


INSERT INTO grid_child_table(gridChildKey,gridKey,col1,col2,col3,col4,col5,col6,col7,col8,col9) 
VALUES (grid_child_table_seq.nextval,1,'data1','data2','data3','data4','data5','10','20','30','40');


INSERT INTO grid_child_table(gridChildKey,gridKey,col1,col2,col3,col4,col5,col6,col7,col8,col9) 
VALUES (grid_child_table_seq.nextval,1,'data1','data2','data3','data4','data5','10','20','30','40');


INSERT INTO grid_child_table(gridChildKey,gridKey,col1,col2,col3,col4,col5,col6,col7,col8,col9) 
VALUES (grid_child_table_seq.nextval,2,'data1','data2','data3','data4','data5','10','20','30','40');


INSERT INTO grid_child_table(gridChildKey,gridKey,col1,col2,col3,col4,col5,col6,col7,col8,col9) 
VALUES (grid_child_table_seq.nextval,2,'data1','data2','data3','data4','data5','10','20','30','40');


INSERT INTO grid_child_table(gridChildKey,gridKey,col1,col2,col3,col4,col5,col6,col7,col8,col9) 
VALUES (grid_child_table_seq.nextval,2,'data1','data2','data3','data4','data5','10','20','30','40');


INSERT INTO grid_child_table(gridChildKey,gridKey,col1,col2,col3,col4,col5,col6,col7,col8,col9) 
VALUES (grid_child_table_seq.nextval,3,'data1','data2','data3','data4','data5','10','20','30','40');


INSERT INTO grid_child_table(gridChildKey,gridKey,col1,col2,col3,col4,col5,col6,col7,col8,col9) 
VALUES (grid_child_table_seq.nextval,4,'data1','data2','data3','data4','data5','10','20','30','40');


INSERT INTO grid_child_table(gridChildKey,gridKey,col1,col2,col3,col4,col5,col6,col7,col8,col9) 
VALUES (grid_child_table_seq.nextval,4,'data1','data2','data3','data4','data5','10','20','30','40');


INSERT INTO grid_child_table(gridChildKey,gridKey,col1,col2,col3,col4,col5,col6,col7,col8,col9) 
VALUES (grid_child_table_seq.nextval,4,'data1','data2','data3','data4','data5','10','20','30','40');


INSERT INTO grid_child_table(gridChildKey,gridKey,col1,col2,col3,col4,col5,col6,col7,col8,col9) 
VALUES (grid_child_table_seq.nextval,4,'data1','data2','data3','data4','data5','10','20','30','40');


INSERT INTO grid_child_table(gridChildKey,gridKey,col1,col2,col3,col4,col5,col6,col7,col8,col9) 
VALUES (grid_child_table_seq.nextval,4,'data1','data2','data3','data4','data5','10','20','30','40');



INSERT INTO item0_0(itemKey,col1,col2,col3,col4,col5,col6) 
VALUES (item0_0_seq.nextval,'1','data2','data3','data4','data5','10');


INSERT INTO item0_0(itemKey,col1,col2,col3,col4,col5,col6) 
VALUES (item0_0_seq.nextval,'2','data2','data3','data4','data5','10');


INSERT INTO item0_0(itemKey,col1,col2,col3,col4,col5,col6) 
VALUES (item0_0_seq.nextval,'3','data2','data3','data4','data5','10');



INSERT INTO item0_1(itemKey,col1,col2,col3,col4,col5,col6) 
VALUES (item0_1_seq.nextval,'4','data2','data3','data4','data5','10');


INSERT INTO item0_1(itemKey,col1,col2,col3,col4,col5,col6) 
VALUES (item0_1_seq.nextval,'5','data2','data3','data4','data5','10');





INSERT INTO chart_table(chartKey,col1,col2,col3,col4,col5,col6,col7,col8,col9,regDate) 
VALUES (chart_table_seq.nextval,250,20,30,20,50,60.51,70.225,80.175, 90.952,(select sysdate  from dual));


INSERT INTO chart_table(chartKey,col1,col2,col3,col4,col5,col6,col7,col8,col9,regDate) 
VALUES (chart_table_seq.nextval,20,10,50,40,20,60,20.514,10.669, 80.320,(select sysdate  from dual));



INSERT INTO chart_table(chartKey,col1,col2,col3,col4,col5,col6,col7,col8,col9,regDate) 
VALUES (chart_table_seq.nextval,4400,4149,4423,560,4011,4229,4140,4020, 2743,(select sysdate  from dual));

insert into specTable(productid,stepid,defectname,control1,alarmtype1,alarmreceivername1,alarmreceiverid1,control2,alarmtype2,alarmreceivername2,alarmreceiverid2,freshtime)
values ('B5P550QU5VP14','C700-01','黑点','0.5','BOE微信','梁峥峥','10157810','0.8','邮件','王桢','wangzhenwz@boe.com.cn','15');
insert into specTable(productid,stepid,defectname,control1,alarmtype1,alarmreceivername1,alarmreceiverid1,control2,alarmtype2,alarmreceivername2,alarmreceiverid2,freshtime)
values ('B5P550QU5VP14','C700-02','黑点','0.5','BOE微信','梁峥峥','10157810','0.8','邮件','王桢','wangzhenwz@boe.com.cn','15');
insert into specTable(productid,stepid,defectname,control1,alarmtype1,alarmreceivername1,alarmreceiverid1,control2,alarmtype2,alarmreceivername2,alarmreceiverid2,freshtime)
values ('B5P550QU5VP14','C700-03','黑点','0.5','BOE微信','梁峥峥','10157810','0.8','邮件','王桢','wangzhenwz@boe.com.cn','15');
insert into specTable(productid,stepid,defectname,control1,alarmtype1,alarmreceivername1,alarmreceiverid1,control2,alarmtype2,alarmreceivername2,alarmreceiverid2,freshtime)
values ('B5P550QU5VP14','C700-04','黑点','0.5','BOE微信','梁峥峥','10157810','0.8','邮件','王桢','wangzhenwz@boe.com.cn','15');

insert into alarm_info_list(productspecname,processoperationname,defectname,caculatetime,actvalue,specvalue1,specvalue2,sendalarm,alarmmode,alarmreceiver)
values('B5P550QU5VP14','C700-01','黑点','2018-12-21 07:15','0.4','0.5','0.8','N',' ',' ');
insert into alarm_info_list(productspecname,processoperationname,defectname,caculatetime,actvalue,specvalue1,specvalue2,sendalarm,alarmmode,alarmreceiver)
values('B5P550QU5VP14','C700-01','黑点','2018-12-21 07:30','0.3','0.5','0.8','N',' ',' ');
insert into alarm_info_list(productspecname,processoperationname,defectname,caculatetime,actvalue,specvalue1,specvalue2,sendalarm,alarmmode,alarmreceiver)
values('B5P550QU5VP14','C700-01','黑点','2018-12-21 07:45','0.4','0.5','0.8','N',' ',' ');
insert into alarm_info_list(productspecname,processoperationname,defectname,caculatetime,actvalue,specvalue1,specvalue2,sendalarm,alarmmode,alarmreceiver)
values('B5P550QU5VP14','C700-01','黑点','2018-12-21 08:00','0.2','0.5','0.8','N',' ',' ');
insert into alarm_info_list(productspecname,processoperationname,defectname,caculatetime,actvalue,specvalue1,specvalue2,sendalarm,alarmmode,alarmreceiver)
values('B5P550QU5VP14','C700-01','黑点','2018-12-21 08:15','0.85','0.5','0.8','Y','邮件','wangzhenwz@boe.com.cn');
insert into alarm_info_list(productspecname,processoperationname,defectname,caculatetime,actvalue,specvalue1,specvalue2,sendalarm,alarmmode,alarmreceiver)
values('B5P550QU5VP14','C700-01','黑点','2018-12-21 08:30','0.2','0.5','0.8','N',' ',' ');
insert into alarm_info_list(productspecname,processoperationname,defectname,caculatetime,actvalue,specvalue1,specvalue2,sendalarm,alarmmode,alarmreceiver)
values('B5P550QU5VP14','C700-01','黑点','2018-12-21 08:45','0.6','0.5','0.8','Y','BOE微信','10157810');
insert into alarm_info_list(productspecname,processoperationname,defectname,caculatetime,actvalue,specvalue1,specvalue2,sendalarm,alarmmode,alarmreceiver)
values('B5P550QU5VP14','C700-02','黑点','2018-12-21 07:15','0.4','0.5','0.8','N',' ',' ');
insert into alarm_info_list(productspecname,processoperationname,defectname,caculatetime,actvalue,specvalue1,specvalue2,sendalarm,alarmmode,alarmreceiver)
values('B5P550QU5VP14','C700-02','黑点','2018-12-21 07:30','0.3','0.5','0.8','N',' ',' ');
insert into alarm_info_list(productspecname,processoperationname,defectname,caculatetime,actvalue,specvalue1,specvalue2,sendalarm,alarmmode,alarmreceiver)
values('B5P550QU5VP14','C700-02','黑点','2018-12-21 07:45','0.4','0.5','0.8','N',' ',' ');
insert into alarm_info_list(productspecname,processoperationname,defectname,caculatetime,actvalue,specvalue1,specvalue2,sendalarm,alarmmode,alarmreceiver)
values('B5P550QU5VP14','C700-02','黑点','2018-12-21 08:00','0.2','0.5','0.8','N',' ',' ');
insert into alarm_info_list(productspecname,processoperationname,defectname,caculatetime,actvalue,specvalue1,specvalue2,sendalarm,alarmmode,alarmreceiver)
values('B5P550QU5VP14','C700-02','黑点','2018-12-21 08:15','0.3','0.5','0.8','N',' ',' ');
insert into alarm_info_list(productspecname,processoperationname,defectname,caculatetime,actvalue,specvalue1,specvalue2,sendalarm,alarmmode,alarmreceiver)
values('B5P550QU5VP14','C700-02','黑点','2018-12-21 08:30','0.85','0.5','0.8','Y','邮件','wangzhenwz@boe.com.cn');
insert into alarm_info_list(productspecname,processoperationname,defectname,caculatetime,actvalue,specvalue1,specvalue2,sendalarm,alarmmode,alarmreceiver)
values('B5P550QU5VP14','C700-02','黑点','2018-12-21 08:45','0.6','0.5','0.8','Y','BOE微信','10157810');
insert into alarm_info_list(productspecname,processoperationname,defectname,caculatetime,actvalue,specvalue1,specvalue2,sendalarm,alarmmode,alarmreceiver)
values('B5P550QU5VP14','C700-02','黑点','2018-12-21 09:00','0.4','0.5','0.8','N','','');
insert into alarm_info_list(productspecname,processoperationname,defectname,caculatetime,actvalue,specvalue1,specvalue2,sendalarm,alarmmode,alarmreceiver)
values('B5P550QU5VP14','C700-02','黑点','2018-12-21 09:15','0.4','0.5','0.8','N','','');
insert into alarm_info_list(productspecname,processoperationname,defectname,caculatetime,actvalue,specvalue1,specvalue2,sendalarm,alarmmode,alarmreceiver)
values('B5P550QU5VP14','C700-02','黑点','2018-12-21 09:30','0.3','0.5','0.8','N',' ',' ');
insert into alarm_info_list(productspecname,processoperationname,defectname,caculatetime,actvalue,specvalue1,specvalue2,sendalarm,alarmmode,alarmreceiver)
values('B5P550QU5VP14','C700-02','黑点','2018-12-21 09:45','0.4','0.5','0.8','N','','');
insert into alarm_info_list(productspecname,processoperationname,defectname,caculatetime,actvalue,specvalue1,specvalue2,sendalarm,alarmmode,alarmreceiver)
values('B5P550QU5VP14','C700-02','黑点','2018-12-21 10:00','0.2','0.5','0.8','N',' ',' ');
insert into alarm_info_list(productspecname,processoperationname,defectname,caculatetime,actvalue,specvalue1,specvalue2,sendalarm,alarmmode,alarmreceiver)
values('B5P550QU5VP14','C700-03','黑点','2018-12-21 07:15','0.4','0.5','0.8','N','','');
insert into alarm_info_list(productspecname,processoperationname,defectname,caculatetime,actvalue,specvalue1,specvalue2,sendalarm,alarmmode,alarmreceiver)
values('B5P550QU5VP14','C700-03','黑点','2018-12-21 07:30','0.3','0.5','0.8','N',' ',' ');
insert into alarm_info_list(productspecname,processoperationname,defectname,caculatetime,actvalue,specvalue1,specvalue2,sendalarm,alarmmode,alarmreceiver)
values('B5P550QU5VP14','C700-03','黑点','2018-12-21 07:45','0.4','0.5','0.8','N','','');
insert into alarm_info_list(productspecname,processoperationname,defectname,caculatetime,actvalue,specvalue1,specvalue2,sendalarm,alarmmode,alarmreceiver)
values('B5P550QU5VP14','C700-03','黑点','2018-12-21 08:00','0.2','0.5','0.8','N',' ',' ');
insert into alarm_info_list(productspecname,processoperationname,defectname,caculatetime,actvalue,specvalue1,specvalue2,sendalarm,alarmmode,alarmreceiver)
values('B5P550QU5VP14','C700-04','黑点','2018-12-21 07:15','0.2','0.5','0.8','N','','');
insert into alarm_info_list(productspecname,processoperationname,defectname,caculatetime,actvalue,specvalue1,specvalue2,sendalarm,alarmmode,alarmreceiver)
values('B5P550QU5VP14','C700-04','黑点','2018-12-21 07:30','0.3','0.5','0.8','N',' ',' ');
insert into alarm_info_list(productspecname,processoperationname,defectname,caculatetime,actvalue,specvalue1,specvalue2,sendalarm,alarmmode,alarmreceiver)
values('B5P550QU5VP14','C700-04','黑点','2018-12-21 07:45','0.2','0.5','0.8','N','','');
insert into alarm_info_list(productspecname,processoperationname,defectname,caculatetime,actvalue,specvalue1,specvalue2,sendalarm,alarmmode,alarmreceiver)
values('B5P550QU5VP14','C700-04','黑点','2018-12-21 08:00','0.3','0.5','0.8','N',' ',' ');