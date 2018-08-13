DROP DATABASE IF EXISTS top_songsDB;
CREATE DATABASE top_songsDB;

USE top_songsDB;

CREATE TABLE top5000 (
    id INT NOT NULL,
    artist VARCHAR(100) NULL,
    song VARCHAR(100) NULL,
    year INT NULL,
    score DECIMAL(10,4) NULL,
    score_usa DECIMAL(10,4) NULL,
    score_uk DECIMAL(10,4) NULL,
    PRIMARY KEY (id)
);

SELECT * FROM top5000;