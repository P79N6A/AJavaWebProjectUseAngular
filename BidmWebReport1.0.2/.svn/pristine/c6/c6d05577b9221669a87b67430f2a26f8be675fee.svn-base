create table userinfo
(
  useraccount varchar2(40),
  username    varchar(40),
  createuser  varchar(40),
  createtime  date,
  updateuser  varchar(40),
  updatetime  date,
  state       varchar(5)
)
;
alter table userinfo
  add constraint userinfo_key primary key (USERACCOUNT);
  
create table roleinfo
(
  roleid     varchar(40),
  desc_       varchar(40),
  createuser varchar(40),
  createtime date,
  updateuser varchar(40),
  updatetime date,
  state      varchar2(5)
)
;
alter table roleinfo
  add constraint roleinfo_key primary key (ROLEID);
  
create table menuinfo
(
	menuid varchar(40),
	icon varchar(40),
	routerlink varchar(100),
	parentId varchar(40),
	desc_ varchar(100),
	sort varchar(10),
	isLeaf varchar(1),
	createuser varchar(40),
	createtime date,
	updateuser varchar(40),
	updatetime date,
	state varchar(5)
)
;
alter table menuinfo
  add constraint menuinfo_key primary key (menuid);
  
create table userrolelink
(
  useraccount varchar(40),
  roleid      varchar(40)
)
;
alter table userrolelink
  add constraint ur_key primary key (USERACCOUNT, ROLEID);
  
create table rolemenulink
(
  roleid varchar(40),
  menuid varchar(40)
)
;
alter table rolemenulink
  add constraint rm_key primary key (ROLEID, MENUID);

create table sample
(
  no   number,
  name varchar2(20)
)
;
alter table sample
  add constraint sample_key primary key (NO);

create table grid_table
(
  gridKey number,
  col1    varchar2(20),
  col2    varchar(20),
  col3    varchar(20),
  col4    varchar(20),
  col5    varchar(20),
  col6    varchar(20),
  col7    varchar(20),
  col8    varchar(20),
  col9    varchar(20),
  regDate date
)
;
alter table grid_table
  add constraint grid_table_key primary key (GRIDKEY);
  
create table grid_child_table
(
  gridChildKey number,
  gridKey number,
  col1    varchar2(20),
  col2    varchar(20),
  col3    varchar(20),
  col4    varchar(20),
  col5    varchar(20),
  col6    varchar(20),
  col7    varchar(20),
  col8    varchar(20),
  col9    varchar(20),
)
;
 
alter table grid_child_table
  add constraint gck_key primary key (GRIDCHILDKEY);
  
CREATE TABLE chart_table(
	chartKey number,
    col1 number,
    col2 number,
    col3 number,
	col4 number,
    col5 number,
    col6 number,
	col7 number,
    col8 number,
    col9 number,
	regDate date
);
alter table chart_table
  add constraint ct_key primary key (chartKey);
 
CREATE TABLE item0_0(
	itemKey number,
    col1 varchar(20),
    col2 varchar(20),
    col3 varchar(20),
	col4 varchar(20),
    col5 varchar(20),
    col6 varchar(20)

);
alter table item0_0
  add constraint item_0_key primary key (itemKey);
  
CREATE TABLE item0_1(
	itemKey number,
    col1 varchar(20),
    col2 varchar(20),
    col3 varchar(20),
	col4 varchar(20),
    col5 varchar(20),
    col6 varchar(20)
);
alter table item0_1
  add constraint item_1_key primary key (itemKey);
  
CREATE TABLE specTable(
    productid varchar(40),
    stepid varchar(40),
    defectname varchar(40),
    control1 varchar(40),
    alarmtype1 varchar(40),
    alarmreceivername1 varchar(20),
    alarmreceiverid1 varchar(40),
    control2  varchar(40),
    alarmtype2 varchar(40),
    alarmreceivername2  varchar(20),
    alarmreceiverid2   varchar(40),
	freshtime varchar(40),
	CONSTRAINT PK_specTable PRIMARY KEY(productid,stepid,defectname)		
);
  
  CREATE TABLE alarm_info_list(
	productspecname varchar(40),
	processoperationname varchar(40),
	defectname varchar(40),
	caculatetime varchar(40),
	actvalue varchar(40),
	specvalue1 varchar(40),
	specvalue2 varchar(40),
	sendalarm varchar(40),
	alarmmode varchar(40),
	alarmreceiver varchar2(40),
	CONSTRAINT PK_alarm_info_list PRIMARY KEY(productspecname,processoperationname,defectname,caculatetime)
);
  
  
create sequence sample_seq
minvalue 1
maxvalue 9999999999
start with 1
increment by 1;
create sequence grid_table_seq
minvalue 1
maxvalue 9999999999
start with 1
increment by 1;
create sequence grid_child_table_seq
minvalue 1
maxvalue 9999999999
start with 1
increment by 1;
create sequence item0_0_seq
minvalue 1
maxvalue 9999999999
start with 1
increment by 1;
create sequence item0_1_seq
minvalue 1
maxvalue 9999999999
start with 1
increment by 1;
create sequence chart_table_seq
minvalue 1
maxvalue 9999999999
start with 1
increment by 1;


create table menu_click_info
(
  useraccount     varchar2(40),
  USERNAME  varchar2(40),
  menuid     varchar2(40),
  clicktime  date
);

create table user_login_info
(
  useraccount     varchar2(40),
  username  varchar2(40),
  logintime  date,
  logouttime date,
  ipaddr varchar2(16),
  client varchar2(40),
  token varchar2(100)
);

create table report_load_info
(
  useraccount     varchar2(40),
  userName   varchar2(40),
  menuId     varchar2(40),
  reportName varchar2(40),
  loadtime   number,
  starttime  date,
  endtime    date
)
;
