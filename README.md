# Build-Week-Post-Here-2 
base URL: https://reddit-sami.herokuapp.com



# Post-Here API calls

# Users

**POST Create a user (register a new user)**
**[https://reddit-sami.herokuapp.com/api/users/register]**

Post request to make a new user

**Requires:** Username , Password, and Email.
 Username and Email must be unique.
 Username , Password, and Email must be string

**Post request example:** 
{
    username: "newUser",
    password: "newPass123",
    email: "new@gmail.com"
}


Returns: Username, Password, email and a authentication token
{
    data: {
        id: 4,
        username: "newUser",
        password: "$2a$04$/vgskWcpO5ddHNiYHLeVvufd2YihmlYqYqbMtwf.ArMSd3mNqvL6a",
        email: "new@gmail.com"
    },
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhbWkyIiwiaWQiOjQsImlhdCI6MTYwMDY1NjMyNCwiZXhwIjoxNjAwNjg1MTI0fQ.JJXi_W3tli10y59v8lh1FvpCdubbFn6PtPRLMJshjvg"
}


**POST Login a user**
**[https://reddit-sami.herokuapp.com/api/users/login]**

Post request to login a user

**Requires:** Valid username and password

**Post request example:** 
{
    username: "user1",
    password: "pass123"
}


Returns: token
{
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwiaWQiOjEsImlhdCI6MTYwMDY1Njg3MSwiZXhwIjoxNjAwNjg1NjcxfQ.GLJtwuNNUSBqrTBN1ybgRC5iUoa_4RX-EhDrVnRbIvU"
}

