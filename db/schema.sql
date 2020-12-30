CREATE DATABASE library;
\c library;

CREATE EXTENSION pgcrypto;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  email TEXT NOT NULL UNIQUE,
  username VARCHAR(25) UNIQUE,
  firstname VARCHAR(25),
  lastname VARCHAR(25),
  password TEXT NOT NULL,
  avatar TEXT NOT NULL,
  bio VARCHAR(280)
)

CREATE TABLE albums (
  id SERIAL NOT NULL,
  user INT NOT NULL,
  title VARCHAR(50),
  genre VARCHAR(20),
  artists VARCHAR(30)[],
  release DATE,
  artwork TEXT,
  bio VARCHAR(280),
  INDEX(user)
  FOREIGN KEY(user)
  REFERENCES users(id)
)

CREATE TABLE songs (
  id SERIAL NOT NULL,
  album INT NOT NULL,
  title VARCHAR(50),
  artwork TEXT
  INDEX(album)
  FOREIGN KEY(album)
  REFERENCES albums(id)
)

CREATE TABLE sections (
  id SERIAL NOT NULL,
  song INT NOT NULL,
  section VARCHAR(20),
  bio VARCHAR(140),
  INDEX(song)
  FOREIGN KEY(song)
  REFERENCES songs(id)
)

CREATE TABLE lines (
  id SERIAL NOT NULL,
  song INT NOT NULL,
  line VARCHAR(75),
  INDEX(song)
  FOREIGN KEY(song)
  REFERENCES songs(id)
)

CREATE TABLE demos (
  id SERIAL NOT NULL,
  song INT NOT NULL,
  user INT NOT NULL,
  title VARCHAR(50),
  audio TEXT NOT NULL,
  INDEX(song)
  INDEX(user)
  FOREIGN KEY(song)
  REFERENCES songs(id)
  FOREIGN KEY(user)
  REFERENCES user(id)
)