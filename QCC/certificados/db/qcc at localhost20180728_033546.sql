CREATE TABLE `clientes`(`id` int NOT NULL AUTO_INCREMENT, `cliente` varchar(50) NOT NULL, `roc` varchar(20) NOT NULL, `norma` varchar(20) NOT NULL, `estatus` varchar(10) NOT NULL, `sector` varchar(3) NOT NULL, `NOTAS` mediumtext NULL, PRIMARY KEY (`id`))CHARACTER SET utf8;
CREATE TABLE `user`(`id` int NOT NULL AUTO_INCREMENT, `fullname` varchar(500) NOT NULL, `username` varchar(100) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `created_at` datetime NOT NULL, `active` int NULL, PRIMARY KEY (`id`))CHARACTER SET utf8;
SET FOREIGN_KEY_CHECKS = 0;
INSERT INTO `clientes` (`id`,`cliente`,`roc`,`norma`,`estatus`,`sector`,`NOTAS`) VALUES (43,'EOG, Soluciones Laborales, S.A. de C.V.','ROC-004-13','ISO 9001:2008','Activo','',NULL);
INSERT INTO `clientes` (`id`,`cliente`,`roc`,`norma`,`estatus`,`sector`,`NOTAS`) VALUES (42,'Centrum Promotora Internacional, S.A. de C.V.','ROC-003-13','ISO 9001:2008','Activo','',NULL);
INSERT INTO `clientes` (`id`,`cliente`,`roc`,`norma`,`estatus`,`sector`,`NOTAS`) VALUES (40,'Inmobiliaria de disenos profesionales de Mexico ','ROC-001-13','ISO 9001:2008','Cancelado','',NULL);
INSERT INTO `clientes` (`id`,`cliente`,`roc`,`norma`,`estatus`,`sector`,`NOTAS`) VALUES (41,'Santello Herramientas, S.A. de C.V.','ROC-002-13','ISO 9001:2008','Cancelado','',NULL);
INSERT INTO `clientes` (`id`,`cliente`,`roc`,`norma`,`estatus`,`sector`,`NOTAS`) VALUES (44,'La Plaza Salud, S.A. de C.V.','ROC-005-14','ISO 9001:2008','Activo','',NULL);
INSERT INTO `clientes` (`id`,`cliente`,`roc`,`norma`,`estatus`,`sector`,`NOTAS`) VALUES (45,'Instituto Nacional de AdministraciÃ³n Publica','ROC-006-14','ISO 9001:2015','Activo','',NULL);
INSERT INTO `clientes` (`id`,`cliente`,`roc`,`norma`,`estatus`,`sector`,`NOTAS`) VALUES (47,'Laboratorio ClÃ­nico Lean S.A. de C.V.','ROC-009-14','ISO 9001:2008','Activo','',NULL);
INSERT INTO `clientes` (`id`,`cliente`,`roc`,`norma`,`estatus`,`sector`,`NOTAS`) VALUES (49,'Laboratorio ClÃ­nico Prado S.A. de C.V.','ROC-011-15','ISO 9001:2008','Activo','',NULL);
INSERT INTO `clientes` (`id`,`cliente`,`roc`,`norma`,`estatus`,`sector`,`NOTAS`) VALUES (50,'AplicaciÃ³n de Sistemas Empresariales S.A de C.V.','ROC-012-15','ISO 9001:2008','Activo','',NULL);
INSERT INTO `clientes` (`id`,`cliente`,`roc`,`norma`,`estatus`,`sector`,`NOTAS`) VALUES (53,'Instituto Nacional de RehabilitaciÃ³n','ROC-015-15','ISO 9001:2008','Activo','',NULL);
INSERT INTO `clientes` (`id`,`cliente`,`roc`,`norma`,`estatus`,`sector`,`NOTAS`) VALUES (54,'ARTMEX Viajes S.A de C.V.','ROC-017-15','ISO 9001:2008','Activo','',NULL);
INSERT INTO `clientes` (`id`,`cliente`,`roc`,`norma`,`estatus`,`sector`,`NOTAS`) VALUES (56,'IPN','ROC-018-16','ISO 9001:2008','Activo','',NULL);
INSERT INTO `clientes` (`id`,`cliente`,`roc`,`norma`,`estatus`,`sector`,`NOTAS`) VALUES (59,'COI AdministraciÃ³n PÃºblica y Privada, S.C','ROC-008-14','ISO 9001:2008','Activo','',NULL);
INSERT INTO `clientes` (`id`,`cliente`,`roc`,`norma`,`estatus`,`sector`,`NOTAS`) VALUES (60,'ARTMEX','ROC-017-15','ISO 9001:2015','VIGENTE','39',NULL);
INSERT INTO `clientes` (`id`,`cliente`,`roc`,`norma`,`estatus`,`sector`,`NOTAS`) VALUES (61,'INAP','ROC-006-14','ISO 9001:2015','VIGENTE','36',NULL);
INSERT INTO `clientes` (`id`,`cliente`,`roc`,`norma`,`estatus`,`sector`,`NOTAS`) VALUES (62,'CENTRUM','ROC-003-13','ISO 9001:2015','VIGENTE','38',NULL);
INSERT INTO `clientes` (`id`,`cliente`,`roc`,`norma`,`estatus`,`sector`,`NOTAS`) VALUES (63,'EYEMSA','ROC-022-18','ISO 9001:2015','VIGENTE','38',NULL);
INSERT INTO `clientes` (`id`,`cliente`,`roc`,`norma`,`estatus`,`sector`,`NOTAS`) VALUES (64,'SEDENA','ROC-021-17','ISO 9001:2015','VIGENTE','38',NULL);
INSERT INTO `clientes` (`id`,`cliente`,`roc`,`norma`,`estatus`,`sector`,`NOTAS`) VALUES (65,'PLAZA SALUD','ROC-005-14','ISO 9001:2015','VIGENTE','38',NULL);
INSERT INTO `clientes` (`id`,`cliente`,`roc`,`norma`,`estatus`,`sector`,`NOTAS`) VALUES (66,'DISIMED','ROC-013-15','ISO 9001:2015','VIGENTE','38',NULL);
SET FOREIGN_KEY_CHECKS = 1;
SET FOREIGN_KEY_CHECKS = 0;
INSERT INTO `user` (`id`,`fullname`,`username`,`email`,`password`,`created_at`,`active`) VALUES (1,'quality and competitive college S.c','qcc','franciscoricardo@hotmail.com','56425924','2017-01-05 13:29:21',NULL);
INSERT INTO `user` (`id`,`fullname`,`username`,`email`,`password`,`created_at`,`active`) VALUES (2,'Administrador','admin','blender.webservices@gmail.com','admin','2018-07-28 02:42:21',1);
SET FOREIGN_KEY_CHECKS = 1;
