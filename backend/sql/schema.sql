CREATE DATABASE IF NOT EXISTS curadoria_db;
USE curadoria_db;

CREATE TABLE users (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(120),
  email VARCHAR(190) UNIQUE,
  password_hash VARCHAR(255)
);

CREATE TABLE curation_items (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT,
  title VARCHAR(200),
  url VARCHAR(500),
  notes TEXT,
  tags VARCHAR(200),
  FOREIGN KEY (user_id) REFERENCES users(id)
);
