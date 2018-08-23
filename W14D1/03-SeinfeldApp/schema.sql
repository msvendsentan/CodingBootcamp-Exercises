DROP DATABASE IF EXISTS seinfeld_db;
CREATE DATABASE seinfeld_db;

CREATE TABLE actors (
    id INT AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    coolness_points INT NOT NULL,
    attitude VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO actors (name, coolness_points, attitude)
VALUES
    ("Jerry", 10, "Chill"),
    ("Kramer", 8, "Crazy"),
    ("George", 6, "Frantic"),
    ("Elaine", 9, "Happy");