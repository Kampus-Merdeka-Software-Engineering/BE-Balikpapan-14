CREATE DATABASE IF NOT EXISTS `terraceofdream`;

USE `terraceofdream`;

CREATE TABLE IF NOT EXISTS leaderboard (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    nilai INT NOT NULL
);

CREATE TABLE IF NOT EXISTS lessons (
    id INT AUTO_INCREMENT PRIMARY KEY,
    image TEXT NOT NULL,
    nama_mapel VARCHAR (300) NOT NULL,
    module TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS profile (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(300) NOT NULL,
    nisn VARCHAR(300) NOT NULL,
    birthdate DATE NOT NULL,
    email VARCHAR(300) NOT NULL
);

CREATE TABLE IF NOT EXISTS Assignment1 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    assignment VARCHAR (500) NOT NULL,
    deadline DATETIME NOT NULL,
    date_modified DATETIME NOT NULL,
    grade INT NOT NULL
);

DESCRIBE profile;
ALTER TABLE profile MODIFY birthdate DATE;

INSERT INTO leaderboard (nama, nilai) VALUES ('salz', '90');

INSERT INTO lessons (image, module) VALUES ('https://drive.google.com/file/d/16luO4UUX9OUrr7stKYllRzg90kUmAhgo/preview', "https://drive.google.com/file/d/1mfh6t1jM6eRlCGZYfhIefEKVImq_upaT/view?usp=sharing");

INSERT INTO profile (full_name, nisn, birthdate, email) VALUES ('Tsalsabilla Nurfitriyatna putri', '2009994', '2001-12-12', 'tsalsabilla@gmail.com');

INSERT INTO assignment1 (assignment, deadline, date_modified, grade) VALUES ('Tumbuhan', '2023-10-03 15:30:00', '2023-10-03 15:30:00', 100);

SELECT * FROM lessons;

SELECT*FROM profile;

SELECT*FROM Assignment1;
