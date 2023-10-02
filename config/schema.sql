CREATE DATABASE IF NOT EXISTS `terraceofdream`;

USE `terraceofdream`;

CREATE TABLE IF NOT EXISTS lessons (
    id INT AUTO_INCREMENT PRIMARY KEY,
    image LONGBLOB NOT NULL,
    module TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS profile (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(300) NOT NULL,
    nisn VARCHAR(300) NOT NULL,
    birthdate DATE NOT NULL,
    email VARCHAR(300) NOT NULL
);

INSERT INTO lessons (image, module) VALUES ('../../back-end-capstone-project-section-balikpapan-group-14/img/angklung.png', "https://drive.google.com/file/d/1mfh6t1jM6eRlCGZYfhIefEKVImq_upaT/view?usp=sharing");

INSERT INTO profile (full_name, nisn, birthdate, email) VALUES ('Tsalsabilla Nurfitriyatna putri', '2009994', '2001-12-12', 'tsalsabilla@gmail.com');
SELECT * FROM lessons;

SELECT*FROM profile;
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
