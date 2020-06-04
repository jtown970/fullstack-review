create table users (
  user_id serial primary key,
  email varchar(100),
  password text -- note this will be the hashed password
);

create table posts(
  post_id serial primary key,
  user_id int references users(user_id),
  content varchar(250),
  created_at date
);