# node-auth-with-jwt
Simple authentication system using Json web tokens and mongodb

`users` create new user with required fields of name, email and password and returns a json token
`users/me/logout` logs user out and deletes the token
`users/me` returns user information given correct bearer token

### .env setup
MONGODB_URL = URL to MongoDB database
JWT_KEY = some type of key as a string
