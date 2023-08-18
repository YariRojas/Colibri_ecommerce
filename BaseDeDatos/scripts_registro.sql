-- Tabla de Administradores 

INSERT INTO `colibridb`.`administrador` (`idAdministrador`, `correo`, `contraseña`) VALUES ('1', 'sebas@gmail.com', 'Pa$$w0rd');
INSERT INTO `colibridb`.`administrador` (`idAdministrador`, `correo`, `contraseña`) VALUES ('2', 'yarii@gmail.com', 'Pa$$w0rd');
INSERT INTO `colibridb`.`administrador` (`idAdministrador`, `correo`, `contraseña`) VALUES ('3', 'dav@gmail.com', 'Pa$$w0rd');
INSERT INTO `colibridb`.`administrador` (`idAdministrador`, `correo`, `contraseña`) VALUES ('4', 'pat@gmail.com', 'Pa$$w0rd');
INSERT INTO `colibridb`.`administrador` (`idAdministrador`, `correo`, `contraseña`) VALUES ('5', 'mich@gmail.com', 'Pa$$w0rd');

-- tabla de productos 
INSERT INTO `colibridb`.`productos` (`idProductos`, `nombre`, `descripcion`, `precio`, `cantidad`, `categoria`, `img`) VALUES ('2', 'Vestido Amaro', 'Vestido con falda de manta ', '1900.00', '1', 'vestido artesanal', 'https://okdiario.com/img/2019/06/21/colibri.jpeg');
INSERT INTO `colibridb`.`productos` (`idProductos`, `nombre`, `descripcion`, `precio`, `cantidad`, `categoria`, `img`) VALUES ('3', 'Vestido Delicia', 'Vestido, 2 piezas de algodón ', '1500.00', '1', 'vestido artesanal', 'https://okdiario.com/img/2019/06/21/colibri.jpeg');
INSERT INTO `colibridb`.`productos` (`idProductos`, `nombre`, `descripcion`, `precio`, `cantidad`, `categoria`, `img`) VALUES ('4', 'Vestido Siempre Contigo', 'Vestido largo, negro, de manta ', '2500.00', '1', 'vestido artesanal', 'https://okdiario.com/img/2019/06/21/colibri.jpeg');
INSERT INTO `colibridb`.`productos` (`idProductos`, `nombre`, `descripcion`, `precio`, `cantidad`, `categoria`, `img`) VALUES ('5', 'Vestido Mi Bella Oaxaca', 'Vestido largo bordado a mano', '2500.00', '1', 'vestido artesanal', 'https://okdiario.com/img/2019/06/21/colibri.jpeg');
INSERT INTO `colibridb`.`productos` (`idProductos`, `nombre`, `descripcion`, `precio`, `cantidad`, `categoria`, `img`) VALUES ('6', 'Conjunto Fresita', 'Conjunto de  2 piezas', '2500.00', '1', 'vestido artesanal', 'https://okdiario.com/img/2019/06/21/colibri.jpeg');
INSERT INTO `colibridb`.`productos` (`idProductos`, `nombre`, `descripcion`, `precio`, `cantidad`, `categoria`, `img`) VALUES ('7', 'Blusa Girasol', 'Bordada a mano con hilo', '1300.00', '1', 'blusa artesanal', 'https://okdiario.com/img/2019/06/21/colibri.jpeg');
INSERT INTO `colibridb`.`productos` (`idProductos`, `nombre`, `descripcion`, `precio`, `cantidad`, `categoria`, `img`) VALUES ('8', 'Blusa De Rojo Te Ves Bien', 'Blusa bordada a mano', '1300.00', '1', 'blusa artesanal', 'https://okdiario.com/img/2019/06/21/colibri.jpeg');
INSERT INTO `colibridb`.`productos` (`idProductos`, `nombre`, `descripcion`, `precio`, `cantidad`, `categoria`, `img`) VALUES ('9', 'Blusa Cintillo', 'Blusa estilo campesina bordada', '1300.00', '1', 'blusa artesanal', 'https://okdiario.com/img/2019/06/21/colibri.jpeg');
INSERT INTO `colibridb`.`productos` (`idProductos`, `nombre`, `descripcion`, `precio`, `cantidad`, `categoria`, `img`) VALUES ('10', 'Blusa El Listón', 'Blusa con olanes', '1500.00', '1', 'blusa artesanal', 'https://okdiario.com/img/2019/06/21/colibri.jpeg');
UPDATE `colibridb`.`productos` SET `descripcion` = 'Vestido blanco con bordados' WHERE (`idProductos` = '1');
INSERT INTO `colibridb`.`productos` (`idProductos`, `nombre`, `descripcion`, `precio`, `cantidad`, `categoria`, `img`) VALUES ('11', 'Blusa Bugambilia', 'Blusa con bordado de flores', '1500.00', '1', 'blusa artesanal', 'https://okdiario.com/img/2019/06/21/colibri.jpeg');
INSERT INTO `colibridb`.`productos` (`idProductos`, `nombre`, `descripcion`, `precio`, `cantidad`, `categoria`, `img`) VALUES ('12', 'Blusa Cuadritos', 'Bordada a mano con hilo', '1300.00', '1', 'blusa artesanal', 'https://okdiario.com/img/2019/06/21/colibri.jpeg');
INSERT INTO `colibridb`.`productos` (`idProductos`, `nombre`, `descripcion`, `precio`, `cantidad`, `categoria`, `img`) VALUES ('13', 'Guayabera Arcoiris', 'Guayabera de manta bordada', '1900.00', '1', 'guayabera artesanal', 'https://okdiario.com/img/2019/06/21/colibri.jpeg');
INSERT INTO `colibridb`.`productos` (`idProductos`, `nombre`, `descripcion`, `precio`, `cantidad`, `categoria`, `img`) VALUES ('14', 'Guayabera Azul', ' Guayabera de manta azul', '1900.00', '1', 'guayabera artesanal', 'https://okdiario.com/img/2019/06/21/colibri.jpeg');
INSERT INTO `colibridb`.`productos` (`idProductos`, `nombre`, `descripcion`, `precio`, `cantidad`, `categoria`, `img`) VALUES ('15', 'Guayabera Tradicional', 'Guayabera de manta bordada', '1900.00', '1', 'guayabera artesanal', 'https://okdiario.com/img/2019/06/21/colibri.jpeg');
INSERT INTO `colibridb`.`productos` (`idProductos`, `nombre`, `descripcion`, `precio`, `cantidad`, `categoria`, `img`) VALUES ('16', 'Guayabera Tenoch', 'Guayabera de manta bordada con cintillo', '1900.00', '1', 'guayabera artesanal', 'https://okdiario.com/img/2019/06/21/colibri.jpeg');
INSERT INTO `colibridb`.`productos` (`idProductos`, `nombre`, `descripcion`, `precio`, `cantidad`, `categoria`, `img`) VALUES ('17', 'Guayabera Flor Del Campo', 'Guayabera de manta bordado floreado', '1900.00', '1', 'guayabera artesanal', 'https://okdiario.com/img/2019/06/21/colibri.jpeg');
INSERT INTO `colibridb`.`productos` (`idProductos`, `nombre`, `descripcion`, `precio`, `cantidad`, `categoria`, `img`) VALUES ('18', 'Guayabera Rosa Espinosa', 'Guayabera de manta negra', '1900.00', '1', 'guayabera artesanal', 'https://okdiario.com/img/2019/06/21/colibri.jpeg');

-- tabla usuarios 

INSERT INTO `colibridb`.`usuarios` (`idUsuarios`, `nombre`, `correo`, `telefono`, `contraseña`) VALUES ('1', 'J. Carlos', 'juan@gmail.com', '5510203040', 'Usuario123');
INSERT INTO `colibridb`.`usuarios` (`idUsuarios`, `nombre`, `correo`, `telefono`, `contraseña`) VALUES ('2', 'Ali', 'ali@gmail.com', '5530405060', 'Usuario123');
INSERT INTO `colibridb`.`usuarios` (`idUsuarios`, `nombre`, `correo`, `telefono`, `contraseña`) VALUES ('3', 'Amy', 'Amy@gmail.com', '5510203040', 'Usuario123');
INSERT INTO `colibridb`.`usuarios` (`idUsuarios`, `nombre`, `correo`, `telefono`, `contraseña`) VALUES ('4', 'Andy', 'andy@gmail.com', '5560708090', 'Usuario123');
INSERT INTO `colibridb`.`usuarios` (`idUsuarios`, `nombre`, `correo`, `telefono`, `contraseña`) VALUES ('5', 'Ramiro', 'ramiro@gmail.com', '5590807060', 'Usuario123');


-- tabal de lista de compras 

-- lista de compra 
INSERT INTO `colibridb`.`lista_decompra` (`idLista_decompra`, `cantidad`, `Productos_idProductos`, `Usuarios_idUsuarios`) VALUES ('1', '1', '5', '1');
INSERT INTO `colibridb`.`lista_decompra` (`idLista_decompra`, `cantidad`, `Productos_idProductos`, `Usuarios_idUsuarios`) VALUES ('2', '1', '6', '2');
INSERT INTO `colibridb`.`lista_decompra` (`idLista_decompra`, `cantidad`, `Productos_idProductos`, `Usuarios_idUsuarios`) VALUES ('3', '1', '7', '3');
INSERT INTO `colibridb`.`lista_decompra` (`idLista_decompra`, `cantidad`, `Productos_idProductos`, `Usuarios_idUsuarios`) VALUES ('4', '1', '8', '4');
INSERT INTO `colibridb`.`lista_decompra` (`idLista_decompra`, `cantidad`, `Productos_idProductos`, `Usuarios_idUsuarios`) VALUES ('5', '1', '9', '5');

