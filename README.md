## MVP
  -- login functionality
  -- post comments
  -- delete / edit posts
  -- control the view based on authorization 


**icebox**
--delete account
--play music
--customize bg
--data mine customers
--fav five list of friends

## database
user
```SQL 
create table users (
  user_id serial primary key
  email varchar(100)
  password text -- note this will be the hashed password
);
```
```sql
create table posts),
  post_id serial primary key,
  user_id in references users(user_id),
  content varchar(250),
  created_at date
);
```

## server
**dependencies**:
  --express
  --express-session
  --massive
  --dotenv
  --bcrypt
**endpoints**:
  --auth:
    -app.post(`/auth/login`)
    -app.post(`/auth/register`)
    -app.delete(`/auth/logout`)
    -app.get(`/auth/user`) --this just request the user session to see who is logged in

  --post:
    -app.get(`/api/posts`)
    -app.post(`/api/post`)
    -app.put(`/api/posts/:post_id`)
    -app.delete(`/api/post/:post_id`)


## client

**dependencies**:
  --axios
  --react-router-dom
  --redux
  --react-redux
  --redux-promise-middleware

**routes**
  -landing (/)
  -register (/register)
  -dashboard (/dashboard)
  -profile (/profile)


**file structure**
  -src/
    -app.css
    -app.js
    -index.js
    -reset.css
    -redux/
      -store.js
      -reducer.js
    -components/
      -Landing.js /.css
      -Register.js /.css
      -Dashboard.js /.css
      -Profile.js /.css
      -PostContainer.js /.css
      -Post.js /.css
      -Edit.js /.css
      -Header.js /.css
      -AuthHeader.js /.css



