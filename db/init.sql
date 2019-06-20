CREATE TABLE users (
    id SERIAL PRIMARY key,
    name varchar,
    email varchar,
    password varchar
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id  INT REFERENCES users,
    title varchar,
    content text
);