DROP DATABASE IF EXISTS chirpy;
CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (
  `id` INT AUTO_INCREMENT,
  `author` VARCHAR(30) NOT NULL,
  `chirp` VARCHAR(255) NOT NULL,
  `timecreated` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);