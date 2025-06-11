-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS BDSO2;

USE BDSO2;

-- Crear usuario
CREATE USER IF NOT EXISTS 'adminSO2'@'localhost' IDENTIFIED BY 'adminSO2';

-- Dar permisos al usuario
GRANT ALL PRIVILEGES ON BDSO2.* TO 'adminSO2'@'localhost' WITH GRANT OPTION;
GRANT CREATE USER ON *.* TO 'adminSO2'@'localhost';
FLUSH PRIVILEGES;





-- Crear tabla de roles
CREATE TABLE rol (
    id_rol INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nombre_rol VARCHAR(50)
);

-- Tabla de menú
CREATE TABLE menu (
    id_menu INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nombre_menu VARCHAR(100),
    ruta_menu VARCHAR(255)
);

-- Tabla intermedia: menú por rol
CREATE TABLE menu_rol (
    id_menurol INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    id_menu INT NOT NULL,
    id_rol INT NOT NULL,
    FOREIGN KEY (id_menu) REFERENCES menu(id_menu),
    FOREIGN KEY (id_rol) REFERENCES rol(id_rol)
);

-- Tabla de usuarios (pacientes)
CREATE TABLE usuario (
    id_user INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    correo VARCHAR(100) NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    nombre VARCHAR(100) ,
    apellido VARCHAR(100) ,
    fecha_nacimiento DATE,
    dpi VARCHAR(30),
    telefono VARCHAR(30),
    genero VARCHAR(30),
    direccion VARCHAR(255),
    id_rol INT NOT NULL,
    FOREIGN KEY (id_rol) REFERENCES rol(id_rol)
);

-- Tabla de doctores

CREATE TABLE doctor (
    id_doctor INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    correo VARCHAR(100) NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    nombre VARCHAR(100),
    apellido VARCHAR(100),
    dpi VARCHAR(30),
    no_colegiado  VARCHAR(50),
    id_rol INT NOT NULL,
    FOREIGN KEY (id_rol) REFERENCES rol(id_rol)
    
);

-- Tabla de administradores
CREATE TABLE administrador (
    id_administrador INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    correo VARCHAR(100) NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    id_rol INT NOT NULL,
    FOREIGN KEY (id_rol) REFERENCES rol(id_rol)
);

-- Tabla de citas
CREATE TABLE citas (
    id_citas INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    fecha DATE ,
    hora TIME ,
    descripcion  VARCHAR(255),
    id_usuario INT NOT NULL,
    id_doctor INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_user),
    FOREIGN KEY (id_doctor) REFERENCES doctor(id_doctor)
);

-- Tabla de recetas
CREATE TABLE recetas (
    id_recetas INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    descripcion VARCHAR(500),
    id_usuario INT NOT NULL,
    id_doctor INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_user),
    FOREIGN KEY (id_doctor) REFERENCES doctor(id_doctor)
);

-- Vista para menus
CREATE OR REPLACE VIEW vista_menus_por_rol AS
SELECT r.id_rol, r.nombre_rol, m.id_menu, m.nombre_menu, m.ruta_menu
FROM rol r
JOIN menu_rol mr ON r.id_rol = mr.id_rol
JOIN menu m ON mr.id_menu = m.id_menu;


-- Inserciones basicas para funcionamiento


INSERT INTO rol (nombre_rol)
VALUES ('ADMIN');

INSERT INTO administrador (correo, contrasena, id_rol)
values ('adminSO2', 'adminSO2', 1);


