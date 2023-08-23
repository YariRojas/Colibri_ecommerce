-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Colibridb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Colibridb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Colibridb` DEFAULT CHARACTER SET utf8 ;
USE `Colibridb` ;

-- -----------------------------------------------------
-- Table `Colibridb`.`Productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Colibridb`.`Productos` (
  `idProductos` INT NOT NULL,
  `nombre` VARCHAR(100) NOT NULL,
  `descripcion` VARCHAR(200) NULL,
  `precio` DECIMAL(10) NOT NULL,
  `cantidad` INT(10) NOT NULL,
  `categoria` VARCHAR(50) NOT NULL,
  `img` VARCHAR(100) NULL,
  PRIMARY KEY (`idProductos`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Colibridb`.`Usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Colibridb`.`Usuarios` (
  `idUsuarios` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `correo` VARCHAR(45) NOT NULL,
  `telefono` VARCHAR(15) NOT NULL,
  `contraseña` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idUsuarios`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Colibridb`.`Lista_decompra`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Colibridb`.`Lista_decompra` (
  `idLista_decompra` INT NOT NULL,
  `cantidad` DECIMAL NOT NULL,
  `Productos_idProductos` INT NOT NULL,
  `Usuarios_idUsuarios` INT NOT NULL,
  PRIMARY KEY (`idLista_decompra`, `Productos_idProductos`, `Usuarios_idUsuarios`),
  INDEX `fk_Lista_decompra_Productos1_idx` (`Productos_idProductos` ASC) VISIBLE,
  INDEX `fk_Lista_decompra_Usuarios1_idx` (`Usuarios_idUsuarios` ASC) VISIBLE,
  CONSTRAINT `fk_Lista_decompra_Productos1`
    FOREIGN KEY (`Productos_idProductos`)
    REFERENCES `Colibridb`.`Productos` (`idProductos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Lista_decompra_Usuarios1`
    FOREIGN KEY (`Usuarios_idUsuarios`)
    REFERENCES `Colibridb`.`Usuarios` (`idUsuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Colibridb`.`Administrador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Colibridb`.`Administrador` (
  `idAdministrador` INT NOT NULL,
  `correo` VARCHAR(45) NOT NULL,
  `contraseña` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idAdministrador`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
