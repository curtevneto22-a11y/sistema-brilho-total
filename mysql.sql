DROP DATABASE IF EXISTS brilhototal;
CREATE DATABASE IF NOT EXISTS brilhototal;
USE brilhototal;

CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(20) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE endereço (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cep CHAR(9) NOT NULL,
    rua VARCHAR(50) NOT NULL,
    numero INT NOT NULL,
    bairro VARCHAR(50) NOT NULL,
    cidade VARCHAR(20) NOT NULL
);

CREATE TABLE cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    cpf CHAR(11) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone CHAR(11) NOT NULL,
    id_endereço INT,
    FOREIGN KEY (id_endereço) REFERENCES endereço(id)
);

CREATE TABLE veiculo (
    placa CHAR(8) PRIMARY KEY NOT NULL,
    modelo VARCHAR(50) NOT NULL,
    cor VARCHAR(20) NOT NULL,
    id_cliente INT NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES cliente(id)
);

CREATE TABLE os (
    id INT AUTO_INCREMENT PRIMARY KEY,
    obs VARCHAR(600),
    total DECIMAL(10,2) NOT NULL,
    data DATE NOT NULL,
    placa_veiculo CHAR(8) NOT NULL,
    id_user INT NOT NULL,
    FOREIGN KEY (placa_veiculo) REFERENCES veiculo(placa),
    FOREIGN KEY (id_user) REFERENCES user(id)
);


CREATE TABLE serviço (
    id INT AUTO_INCREMENT PRIMARY KEY,
    valor DECIMAL(10,2) NOT NULL,
    descricao VARCHAR(200)
);

CREATE TABLE item (
    id INT AUTO_INCREMENT PRIMARY KEY,
    valor DECIMAL(10,2) NOT NULL,
    quantidade INT NOT NULL,
    id_os INT NOT NULL,
    id_serviço INT NOT NULL,
    FOREIGN KEY (id_os) REFERENCES os(id),
    FOREIGN KEY (id_serviço) REFERENCES serviço(id)
);

ALTER TABLE user ADD COLUMN role ENUM('username', 'admin') NOT NULL DEFAULT 'user';