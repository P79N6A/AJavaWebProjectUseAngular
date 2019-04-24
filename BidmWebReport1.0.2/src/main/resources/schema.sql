DROP TABLE IF EXISTS sample;

DROP TABLE IF EXISTS userinfo;
CREATE TABLE userinfo(
	useraccount varchar(40) primary key not null,
	username varchar(40),
	createuser varchar(40),
	createtime date,
	updateuser varchar(40),
	updatetime date,
	state varchar(5)
);

DROP TABLE IF EXISTS roleinfo;
CREATE TABLE roleinfo(
	roleid varchar(40) primary key not null,
	desc varchar(40),
	createuser varchar(40),
	createtime date,
	updateuser varchar(40),
	updatetime date,
	state varchar(5)
);

DROP TABLE IF EXISTS menuinfo;
CREATE TABLE menuinfo(
	menuid varchar(40) primary key not null,
	icon varchar(40),
	routerlink varchar(100),
	parentId varchar(40),
	desc varchar(100),
	sort varchar(10),
	isLeaf varchar(1),
	createuser varchar(40),
	createtime date,
	updateuser varchar(40),
	updatetime date,
	state varchar(5)
);

DROP TABLE IF EXISTS userrolelink;
CREATE TABLE userrolelink(
	useraccount varchar(40) not null,
	roleid varchar(40) not null
);

DROP TABLE IF EXISTS rolemenulink;
CREATE TABLE rolemenulink(
	roleid varchar(40) not null,
	menuid varchar(40) not null
);

CREATE TABLE sample(  
  no INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL,
  PRIMARY KEY (no)
);


DROP TABLE IF EXISTS grid_table;
CREATE TABLE grid_table(
	gridKey bigint auto_increment primary key,
    col1 varchar(20),
    col2 varchar(20),
    col3 varchar(20),
	col4 varchar(20),
    col5 varchar(20),
    col6 varchar(20),
	col7 varchar(20),
    col8 varchar(20),
    col9 varchar(20),
    regDate date
);


DROP TABLE IF EXISTS grid_child_table;
CREATE TABLE grid_child_table(
	gridChildKey bigint auto_increment primary key,
    gridKey int,
    col1 varchar(20),
    col2 varchar(20),
    col3 varchar(20),
	col4 varchar(20),
    col5 varchar(20),
    col6 varchar(20),
	col7 varchar(20),
    col8 varchar(20),
    col9 varchar(20)
);


DROP TABLE IF EXISTS chart_table;	
CREATE TABLE chart_table(
	chartKey bigint auto_increment primary key,
    col1 float,
    col2 float,
    col3 float,
	col4 float,
    col5 float,
    col6 float,
	col7 float,
    col8 float,
    col9 float,
	regDate date
);


DROP TABLE IF EXISTS item0_0;
CREATE TABLE item0_0(
	itemKey bigint auto_increment primary key,
    col1 varchar(20),
    col2 varchar(20),
    col3 varchar(20),
	col4 varchar(20),
    col5 varchar(20),
    col6 varchar(20)

);


DROP TABLE IF EXISTS item0_1;
CREATE TABLE item0_1(
	itemKey bigint auto_increment primary key,
    col1 varchar(20),
    col2 varchar(20),
    col3 varchar(20),
	col4 varchar(20),
    col5 varchar(20),
    col6 varchar(20)
);
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


DROP TABLE IF EXISTS specTable;
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
	freshtime varchar(40)
);
DROP TABLE IF EXISTS  alarm_info_list;
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
	alarmreceiver varchar2(40)
);
DROP TABLE IF EXISTS  productdefectvalue;
CREATE TABLE productdefectvalue(
	productname varchar2(40),
	productspecname varchar2(40),
	processflowname varchar2(40),
	processoperationname varchar2(40),
	defectname varchar2(100),
	eventtime datetime,
	actvalue number
);
DROP TABLE IF EXISTS  productdefectvaluetrend;
CREATE TABLE productdefectvaluetrend(
	productspecname varchar2(40),
	processflowname varchar2(40),
	processoperationname varchar2(40),
	defectname varchar2(40),
	caculatetime datetime,
	actvalue number
);
DROP TABLE IF EXISTS  alarm_spec;
CREATE TABLE alarm_spec(
	alarmspecid varchar2(40),
	productspecname varchar2(40),
	processflowname varchar2(40),
	processoperationname varchar2(100),
	defectname varchar2(40),
	specvalue number,
	specoutexpression varchar2(40) 
);
DROP TABLE IF EXISTS  alarm_receiver;
CREATE TABLE alarm_receiver(
	alarmspecid varchar2(40),
	alarmode number,
	alarmreceiver varchar2(40)
);
DROP TABLE IF EXISTS  alarm_receiver_email;
CREATE TABLE alarm_receiver_email(
	alarmreceiver varchar2(40),
	receiveremail varchar2(40)
);
DROP TABLE IF EXISTS  alarm_info;
CREATE TABLE alarm_info(
	productspecname varchar2(40),
	processflowname varchar2(40),
	processoperationname varchar2(40),
	defectname varchar2(40),
	caculatetime datetime,
	actvalue number,
	specvalue number,
	sendalarm varchar2(40),
	alarmmode number,
	alarmreceiver varchar2(40)
);

DROP TABLE IF EXISTS  favoritemenu;
CREATE TABLE favoritemenu(
	useraccount varchar2(40),
	menuid varchar2(60)
);


