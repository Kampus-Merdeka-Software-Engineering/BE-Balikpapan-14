CREATE DATABASE IF NOT EXISTS `express_mysql`;

USE `express_mysql`;

CREATE TABLE IF NOT EXISTS leaderboard (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    nilai INT NOT NULL
);

CREATE TABLE IF NOT EXISTS lessons (
    id INT AUTO_INCREMENT PRIMARY KEY,
    img VARCHAR(255) NOT NULL,
    nama VARCHAR(255) NOT NULL
);

-- ===================================
INSERT INTO leaderboard (nama, nilai) VALUES
('salz', '90');

INSERT INTO lessons (img, nama) VALUES
('https://ibb.co/4WfY0HM', 'social');