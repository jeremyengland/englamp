CREATE DATABASE library;
\c library;

CREATE EXTENSION pgcrypto;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(254) NOT NULL UNIQUE,
  username VARCHAR(25) UNIQUE,
  firstname VARCHAR(25),
  lastname VARCHAR(25),
  password TEXT NOT NULL,
  avatar TEXT NOT NULL,
  bio VARCHAR(280)
);

CREATE TABLE albums (
  id SERIAL NOT NULL UNIQUE,
  userid INT NOT NULL,
  type VARCHAR(15),
  title VARCHAR(50),
  genre VARCHAR(20),
  artists VARCHAR(30)[],
  release DATE,
  artwork TEXT,
  bio VARCHAR(280),
  CONSTRAINT fk_user
  FOREIGN KEY(userid)
  REFERENCES users(id)
);

CREATE TABLE songs (
  id SERIAL NOT NULL UNIQUE,
  album INT NOT NULL,
  title VARCHAR(50),
  artwork TEXT,
  CONSTRAINT fk_album
  FOREIGN KEY(album)
  REFERENCES albums(id)
);

CREATE TABLE sections (
  id SERIAL NOT NULL UNIQUE,
  song INT NOT NULL,
  section VARCHAR(20),
  bio VARCHAR(140),
  CONSTRAINT fk_song
  FOREIGN KEY(song)
  REFERENCES songs(id)
);

CREATE TABLE lines (
  id SERIAL NOT NULL,
  section INT NOT NULL,
  lineorder INT NOT NULL,
  linecontent VARCHAR(75),
  CONSTRAINT fk_section
  FOREIGN KEY(section)
  REFERENCES sections(id)
);

CREATE TABLE demos (
  id SERIAL NOT NULL,
  song INT NOT NULL,
  title VARCHAR(50),
  audio TEXT NOT NULL,
  CONSTRAINT fk_song
  FOREIGN KEY(song)
  REFERENCES songs(id)
);