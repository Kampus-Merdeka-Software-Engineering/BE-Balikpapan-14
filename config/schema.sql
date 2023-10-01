CREATE DATABASE IF NOT EXISTS `express_mysql`;

USE `express_mysql`;

CREATE TABLE IF NOT EXISTS leaderboard (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    nilai INT NOT NULL
);

-- ===================================
INSERT INTO leaderboard (nama, nilai) VALUES
('salz', '90');