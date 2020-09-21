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


**Returns: Username, Password, email and authentication token**


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


**Returns: Username, Password, email and authentication token**


{


    data: {
        id: 4,
        username: "user1",
        password: "$2a$04$/vgskWcpO5ddHNiYHLeVvufd2YihmlYqYqbMtwf.ArMSd3mNqvL6a",
        email: "user111@gmail.com"
    },


    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhbWkyIiwiaWQiOjQsImlhdCI6MTYwMDY1NjMyNCwiZXhwIjoxNjAwNjg1MTI0fQ.JJXi_W3tli10y59v8lh1FvpCdubbFn6PtPRLMJshjvg"


}


# Posts


**Get all posts**
**[https://reddit-sami.herokuapp.com/api/posts]**

Get request to get all the posts from the database


**Returns: array of all the posts**

{


    data: [
        {
            id: 1,
            post_title: "money",
            post_content: "make more money",
            user_id: 1
        },
        {
            id: 2,
            post_title: "climate change",
            post_content: "what do you know about climate change",
            user_id: 1
        },
        {
            id: 4,
            post_title: "coding",
            post_content: "keep coding",
            user_id: 2
        }
    ]

    
}

**Get post by the post ID**
**[https://reddit-sami.herokuapp.com/api/posts/:id]**

Get request to get a post by it's id from the database

**Returns: the post information (id, post_title, post_content, user_id)**


{


    data: {
            id: 1,
            post_title: "money",
            post_content: "make more money",
            user_id: 1
        }

    
}


**POST Create a new post**
**[https://reddit-sami.herokuapp.com/api/posts]**

Post request to make a new post

**Requires:** post_title , post_content, and user_id.
 post_title and post_content must be string
 user_id must be integer (number) and it must match an existing user's id 

**Post request example:** 

{


    post_title: "my new post",
    post_content: "nice post",
    user_id: 1


}


**Returns: id, post_title, post_content and user_id**


{


    data: {
    id: 4,
    post_title: "my new post",
    post_content: "nice post",
    user_id: 1
    }



}


**PUT update post information**
**[https://reddit-sami.herokuapp.com/api/posts/:id]**

Put request to update post information
**Requires:** post_title and/or post_content

**Post request example:** 

{


    post_title: "updating title",
    post_content: "nice update"


}


**Returns: id, post_title, post_content and user_id**


{


    data: {
    id: 4,
    post_title: "updating title",
    post_content: "nice update",
    user_id: 1
    }



}


**DELETE update post information**
**[https://reddit-sami.herokuapp.com/api/posts/:id]**

delete request to delete  a post 


**Returns: the number of posts u deleted**


{


    data: {
        deleteMessage: "you have deleted 1 Post/Posts"
    }



}


# User's posts 

**GET all the posts of one user using the user's id**
**[https://reddit-sami.herokuapp.com/api/users/:id/posts]**

Get request to get the post of a user using the user's ID from the database

**Returns: the user information and an array of the user's posts**


{


    data: {
        user: {
            id: 2,
            username: "user2",
            password: "$2a$04$V2XKd4IKWfUNnEDKoSVb2uzo5gHM5t73dAAIDpEHm8l24zgzBhq2m",
            email: "user2@gmail.com"
        },
        posts: [
            {
                id: 4,
                post_title: "coding",
                post_content: "keep coding",
                user_id: 2
            }
        ]
    }

    
}



# Post Search

**POST search for a post by the post_title**
**[https://reddit-sami.herokuapp.com/api/users/:id/postSearch]**

Post request search for a post
**Requires:** post_title and the user's ID

**Post request example:** 

{


    post_title: "tesla stock"
    


}


**Returns:  an array of the user's posts that match the search**


{


    data: [
        {
            id: 3,
            post_title: "tesla stock",
            post_content: "Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California.",
            user_id: 1
        }
    ]

    
}