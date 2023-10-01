CREATE DATABASE IF NOT EXISTS `express_mysql`;

USE `express_mysql`;

CREATE TABLE IF NOT EXISTS mahasiswa (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(255) NOT NULL,
  nim VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  dob DATE
);

CREATE TABLE IF NOT EXISTS campus (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(255) NOT NULL,
  alamat VARCHAR(255) NOT NULL,
  telp VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS leaderboard (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    nilai INT NOT NULL
);

-- ===================================
INSERT INTO mahasiswa (nama, nim, username, email, password) VALUES
('icanq', '15/379093/TK/43035', 'icanq', 'icanq@hotmail.com', 'f9uopasidfhilashdfiuash');

INSERT INTO leaderboard (nama, nilai) VALUES
('salz', '90');