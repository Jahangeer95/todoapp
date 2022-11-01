CREATE DATABASE todo_pern_app;

CREATE TABLE person (
    user_id SERIAL,
    email VARCHAR(40) NOT NULL UNIQUE,
    PRIMARY KEY(user_id),
    CONSTRAINT proper_email CHECK (email ~* '^[A-Za-z0-9._+%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$')
);

CREATE TABLE todos (
    todo_id SERIAL,
    user_id INT,
    description VARCHAR(255) NOT NULL,
    todostatus VARCHAR(40) DEFAULT 'Pending',
    PRIMARY KEY(todo_id),
    FOREIGN KEY(user_id) REFERENCES person(user_id)
);