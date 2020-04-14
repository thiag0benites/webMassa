create database massateste CHARACTER SET utf8 COLLATE UTF8_GENERAL_CI;

/*use massateste;*/

create table massateste.planos(
	id smallint auto_increment primary key,
   nome varchar(50)
);

insert into massateste.planos values
(NULL,"PRÉ-PAGO"),
(NULL,"CONTROLE"),
(NULL,"PÓS-PAGO");

create table massateste.massa(
	id smallint auto_increment primary key,
	plano VARCHAR(20),
	status VARCHAR(6),
   msisdn VARCHAR(11),
   simcard VARCHAR(50),
   sq_transacao VARCHAR(50),
   data_hora VARCHAR(50)
);

insert into massateste.massa VALUES
(NULL,"CONTROLE", "PRONTA", "24589076151", "89345710437658877412", "12785643", "03/12/19, 09:59:25"),
(NULL,"PÓS-PAGO", "USADA", "24589076151", "89345710437658877412", "12785643", "03/12/19, 09:59:25"),
(NULL,"PRÉ-PAGO", "PRONTA", "24589076151", "89345710437658877412", "12785643", "03/12/19, 09:59:25"),
(NULL,"PRÉ-PAGO", "USADA", "24589076151", "89345710437658877412", "12785643", "03/12/19, 09:59:25"),
(NULL,"PRÉ-PAGO", "PRONTA", "24589076151", "89345710437658877412", "12785643", "03/12/19, 09:59:25"),
(NULL,"PÓS-PAGO", "USADA", "24589076151", "89345710437658877412", "12785643", "03/12/19, 09:59:25");

SELECT * FROM massateste.massa;

CREATE TABLE massateste.sistemas(
	id SMALLINT AUTO_INCREMENT PRIMARY KEY,
	sistema VARCHAR(20)
);

INSERT INTO massateste.sistemas VALUES
(NULL,"WA"),
(NULL,"WPP"),
(NULL,"PS8"),
(NULL,"MOBILE");

SELECT * FROM massateste.sistemas;

CREATE TABLE massateste.automacao(
	id SMALLINT AUTO_INCREMENT PRIMARY KEY,
	status VARCHAR(7),
	sistema INT(11),
	planta VARCHAR(20),
	url VARCHAR(255),
	estado VARCHAR(5),
	ddd VARCHAR(2),
	usuario VARCHAR(20),
	senha VARCHAR(20)
);

INSERT INTO massateste.automacao VALUES
(NULL,"ativo",1,"12","http://Mocajuba:7241/ativacao","sp","11","l011q","claro#123"),
(NULL,"ativo",1,"12","http://Mocajuba:7241/ativacao","rj","21","14727","claro#123"),
(NULL,"ativo",2,"","http://MOJU:7771/wpp","","","999999999","999999999"),
(NULL,"ativo",3,"12","http://RJUX0151.claro.com.br:8080/psp/t01ps8/EMPLOYEE/CRM/?cmd=login","","","crm.atdo","claro123"),
(NULL,"ativo",4,"12","http://BRUX0802:20120/docroot/login/login.jsp","","","60001","unix22");

SELECT * FROM massateste.automacao;