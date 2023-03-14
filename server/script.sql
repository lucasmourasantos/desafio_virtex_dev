USE docker;

CREATE DATABASE IF NOT EXISTS virtex_dev;
USE virtex_dev;

CREATE TABLE IF NOT EXISTS ont (
  ont_id INT NOT NULL AUTO_INCREMENT,
  slot VARCHAR(100) NOT NULL,
  porta VARCHAR(100) NOT NULL,
  sn VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,
  PRIMARY KEY (ont_id));

INSERT INTO ont ('slot', 'porta', 'sn', 'state') VALUES ('gpon-onu_1/1/1:1', '1(GPON)', '444753542140AF37', 'online');