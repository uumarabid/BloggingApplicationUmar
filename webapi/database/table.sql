CREATE DATABASE `blog` ;

CREATE TABLE `blog`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `img` VARCHAR(255) NULL,
  PRIMARY KEY (`id`));


CREATE TABLE `blog`.`posts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titile` VARCHAR(255) NOT NULL,
  `description` VARCHAR(1000) NOT NULL,
  `img` VARCHAR(255) NOT NULL,
  `date` DATETIME NOT NULL,
  `userId` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `userId_idx` (`userId` ASC),
  CONSTRAINT `userId`
    FOREIGN KEY (`userId`)
    REFERENCES `blog`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

    ALTER TABLE `blog`.`posts` 
    ADD COLUMN `cat` VARCHAR(45) NULL AFTER `userId`;