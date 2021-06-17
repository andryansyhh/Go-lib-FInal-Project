# API Documentation

## List of available endpoints

### users

- `GET /users`
- `POST /users/register`
- `POST /users/login`
- `GET /users/:id`
- `PUT /users/:id`
- `DELETE /users/:id`

### categories

- `GET /categories`
- `GET /categories/all`
- `POST /categories`
- `GET /categories/:id`
- `PUT /categories/:id`
- `DELETE /categories/:id`

### books

- `GET /books`
- `GET /books/all`
- `GET /books/:id`
- `POST /books`
- `PUT /books/:id`
- `DELETE /books/:id`

### book_detail

- `POST /book_detail/:id`
- `PUT /book_detail/:id`

## RESTful endpoints users

### GET /users

> Get All users

_Request Header_

```go
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```go
not needed
```

_Response (200)_

```go
{
    "code": "200",
    "message": "Get all users succeed",
    "data": [
        {
            "id": "int",
            "name": "string",
            "user_name": "string",
            "email": "string",
            "role": "string
        }
    ]
}
```

_Response (500 - Internal Server Error)_

```go
{
  	"code": 500,
    "message": "Internal server error",
  	"data":
      	{
        	"error": ""
      	}
}
```

---

### POST /users/register

> Create new user

_Request Header_

```go
not needed
```

_Request Body_

```go
{
    "name": "string"
    "user_name": "string",
    "email": "string",
    "password": "string"
}
```

_Response (201)_

```go
{
    "code": 201,
    "message": "Create new user succeed"
    "data":
    	{
        	"id": "int",
            "name": "string",
            "user_name": "string",
            "email": "string",
            "role": "string
    	}
}
```

_Response (400 - Bad Request)_

```go
{
    "code": 400,
    "message": "Input data required"
  	"data":
      	{
        	"errors": []
      	}
}
```

_Response (500 - Internal Server Error)_

```go
{
  	"code": 500,
    "message": "Internal server error",
  	"data":
      	{
        	"error": ""
      	}
}
```

---

### POST /users/login

> Compare data login on database with data inputed

_Request Header_

```go
not needed
```

_Request Body_

```go
{
    "email": "string",
  	"password": "string"
}
```

_Response (200)_

```go
{
    "code": 200,
    "message": "Login user succeed"
    "data": {
        "token": "string",
        "role": "string"
    }
}
```

_Response (400 - Bad Request)_

```go
{
    "code": 400,
    "message": "Input data required"
  	"data":
      	{
        	"errors": []
      	}
}
```

_Response (401 - Unauthorized)_

```go
{
    "code": 401,
    "message": "Unauthorized user"
  	"data":
      	{
        	"error": ""
      	}
}
```

_Response (500 - Internal Server Error)_

```go
{
  	"code": 500,
    "message": "Internal server error",
  	"data":
      	{
        	"error": ""
      	}
}
```

---

### GET /users/:user_id

> Get user by user ID

_Request Header_

```go
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```go
not needed
```

_Response (200)_

```go
{
    "code": 200,
    "message": "Success",
    "data":
    	{
            "id": "int",
            "name": "string",
            "user_name": "string",
            "email": "string",
            "role": "string
        }
}
```

_Response (500 - Internal Server Error)_

```go
{
  	"code": 500,
    "message": "Internal server error",
  	"data":
      	{
        	"error": ""
      	}
}
```

---

### PUT /users/:user_id

> Update user by User iD

_Request Header_

```go
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```go
{
    "name": "string",
    "user_name": "string",
    "email": "string"
}
```

_Response (200)_

```go
{
    "code": 200,
    "message": "Success",
    "data":
        {
            "id": "int",
            "name": "string",
            "user_name": "string",
            "email": "string",
            "role": "string
        }
}
```

_Response (500 - Internal Server Error)_

```go
{
  	"code": 500,
    "message": "Internal server error",
  	"data":
      	{
        	"error": ""
      	}
}
```

---

### DELETE /users/:user_id

> Delete user by ID

_Request Header_

```go
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```go
not needed
```

_Response (200)_

```go
{
    "code": 200,
    "message": "Delete user id x succeed"
}
```

_Response (500 - Internal Server Error)_

```go
{
  	"code": 500,
    "message": "Internal server error",
  	"data":
      	{
        	"error": ""
      	}
}
```

## RESTful endpoints categories

### GET /categories

> Get all categories

_Request Header_

```go
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```go
not needed
```

_Response (200)_

```go
{
    "code": 200,
    "message": "Success",
    "data": [
        {
            "id": "int",
            "category_name": "string"
        },
        {
            "id": "int",
            "category_name": "string"
        }
    ]
}
```

_Response (500 - Internal Server Error)_

```go
{
  	"code": 500,
    "message": "Internal server error",
  	"data":
      	{
        	"error": ""
      	}
}
```

---

### GET /categories/all

> Get length of all categories

_Request Header_

```go
not needed
```

_Request Body_

```go
not needed
```

_Response (200)_

```go
{
    "code": 200,
    "message": "Success",
    "data":
    {
        "length": "int"
    }
}
```

_Response (500 - Internal Server Error)_

```go
{
  	"code": 500,
    "message": "Internal server error",
  	"data":
      	{
        	"error": ""
      	}
}
```

---

### POST /categories

> Add new category

_Request Header_

```go
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```go
{
  	"category_name": "string"
}
```

_Response (200)_

```go
{
    "code": 200,
    "message": "Success",
    "data":
        {
            "id": "int",
            "category_name": "string"
        }
}
```

_Response (400 - Bad Request)_

```go
{
    "code": 400,
    "message": "Input data required"
  	"data":
      	{
        	"errors": []
      	}
}
```

_Response (401 - Unauthorized)_

```go
{
    "code": 401,
    "message": "Unauthorized user"
  	"data":
      	{
        	"error": ""
      	}
}
```

_Response (500 - Internal Server Error)_

```go
{
  	"code": 500,
    "message": "Internal server error",
  	"data":
      	{
        	"error": ""
      	}
}
```

---

### GET /categories/:id

> Get questions by id

_Request Header_

```go
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```go
not needed
```

_Response (200)_

```go
{
    "code": 200,
    "message": "Success",
    "data":
        {
            "id": "int",
            "category_name": "string",
            "books": [
                {
                    "id": "int",
                    "title": "string",
                    "book_detail": {
                        "id": "int",
                        "url_file": "string",
                        "book_id": "int"
                    },
                    "url_video": "string",
                    "category_id": "int",
                    "created_at": "time",
                    "updated_at": "time"
                }
            ]
        }
}
```

_Response (500 - Internal Server Error)_

```go
{
  	"code": 500,
    "message": "Internal server error",
  	"data":
      	{
        	"error": ""
      	}
}
```

---

### PUT /categories/:id

> update category by id

_Request Header_

```go
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```go
{
    "category_name" : "string",
}
```

_Response (200)_

```go
{
    "code": 200,
    "message": "Success"
    "data":
        {
            "id": "int",
            "category_name": "string"
        }
}
```

_Response (400 - Bad Request)_

```go
{
    "code": 400,
    "message": "Input data required"
  	"data":
      	{
        	"errors": []
      	}
}
```

_Response (500 - Internal Server Error)_

```go
{
  	"code": 500,
    "message": "Internal server error",
  	"data":
      	{
        	"error": ""
      	}
}
```

### DELETE /category/:id

> Delete category by id

_Request Header_

```go
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```go
not needed
```

_Response (200)_

```go
{
    "code": 200,
    "message": "Delete category id x succeed"
}
```

_Response (500 - Internal Server Error)_

```go
{
  	"code": 500,
    "message": "Internal server error",
  	"data":
      	{
        	"error": ""
      	}
}
```

## RESTful endpoints books

### GET /books

> Get all books

_Request Header_

```go
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```go
not needed
```

_Response (200)_

```go
{
    "code": 200,
    "message": "Success",
    "data": [
        {
            "id": "int",
            "title": "string",
            "path_file": "string",
            "url_video": "string",
            "category_id": "int"
        },
        {
            "id": "int",
            "title": "string",
            "path_file": "string",
            "url_video": "string",
            "category_id": "int"
        }
    ]
}
```

_Response (500 - Internal Server Error)_

```go
{
  	"code": 500,
    "message": "Internal server error",
  	"data":
      	{
        	"error": ""
      	}
}
```

---

### GET /books/all

> Get length of all books

_Request Header_

```go
not needed
```

_Request Body_

```go
not needed
```

_Response (200)_

```go
{
    "code": 200,
    "message": "Success",
    "data":
    {
        "length": "int"
    }
}
```

_Response (500 - Internal Server Error)_

```go
{
  	"code": 500,
    "message": "Internal server error",
  	"data":
      	{
        	"error": ""
      	}
}
```

---

### GET /books/:id

> Get book by id

_Request Header_

```go
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```go
not needed
```

_Response (200)_

```go
{
    "code": 200,
    "message": "Success",
    "data":
        {
            "id": "int",
            "title": "string",
            "path_file": "string",
            "url_video": "string",
            "category_id": "int"
        }
}
```

_Response (500 - Internal Server Error)_

```go
{
  	"code": 500,
    "message": "Internal server error",
  	"data":
      	{
        	"error": ""
      	}
}
```

### POST /books

> Add new books

_Request Header_

```go
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```go
{
    "title": "string",
    "url_video": "string",
    "category_id": "int"
}
```

_Response (200)_

```go
{
    "code": 200,
    "message": "Success",
    "data":
        {
            "id": "int",
            "title": "string",
            "url_file": "string",
            "url_video": "string",
            "category_id": "int"
        }
}
```

_Response (400 - Bad Request)_

```go
{
    "code": 400,
    "message": "Input data required"
  	"data":
      	{
        	"errors": []
      	}
}
```

_Response (401 - Unauthorized)_

```go
{
    "code": 401,
    "message": "Unauthorized user"
  	"data":
      	{
        	"error": ""
      	}
}
```

_Response (500 - Internal Server Error)_

```go
{
  	"code": 500,
    "message": "Internal server error",
  	"data":
      	{
        	"error": ""
      	}
}
```

---

### PUT /books/:id

> update book by id

_Request Header_

```go
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```go
{
    "title": "string",
    "url_video": "string",
    "category_id": "int"
}
```

_Response (200)_

```go
{
    "code": 200,
    "message": "Success",
    "data":
        {
            "id": "int",
            "title": "string",
            "url_file": "string",
            "url_video": "string",
            "category_id": "int"
        }
}
```

_Response (400 - Bad Request)_

```go
{
    "code": 400,
    "message": "Input data required"
  	"data":
      	{
        	"errors": []
      	}
}
```

_Response (500 - Internal Server Error)_

```go
{
  	"code": 500,
    "message": "Internal server error",
  	"data":
      	{
        	"error": ""
      	}
}
```

### DELETE /books/:id

> Delete book by id

_Request Header_

```go
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```go
not needed
```

_Response (200)_

```go
{
    "code": 200,
    "message": "Delete book id x succeed"
}
```

_Response (500 - Internal Server Error)_

```go
{
  	"code": 500,
    "message": "Internal server error",
  	"data":
      	{
        	"error": ""
      	}
}
```

## RESTful endpoints books

### POST /book_detail/:id

> Add book detail (url file)

_Request Header_

```go
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```go
form-data
key: "file"
type: "File"
```

_Response (200)_

```go
{
    "code": 200,
    "message": "Success",
    "data":
        {
            "id": "int",
        	"url_file": "string",
        	"book_id": "int"
        }
}
```

_Response (400 - Bad Request)_

```go
{
    "code": 400,
    "message": "Input data required"
  	"data":
      	{
        	"errors": []
      	}
}
```

_Response (401 - Unauthorized)_

```go
{
    "code": 401,
    "message": "Unauthorized user"
  	"data":
      	{
        	"error": ""
      	}
}
```

_Response (500 - Internal Server Error)_

```go
{
  	"code": 500,
    "message": "Internal server error",
  	"data":
      	{
        	"error": ""
      	}
}
```

---

### PUT /books/:id

> update book by id

_Request Header_

```go
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```go
form-data
key: "file"
type: "File"
```

_Response (200)_

```go
{
    "code": 200,
    "message": "Success",
    "data":
        {
            "id": "int",
        	"url_file": "string",
        	"book_id": "int"
        }
}
```

_Response (400 - Bad Request)_

```go
{
    "code": 400,
    "message": "Input data required"
  	"data":
      	{
        	"errors": []
      	}
}
```

_Response (500 - Internal Server Error)_

```go
{
  	"code": 500,
    "message": "Internal server error",
  	"data":
      	{
        	"error": ""
      	}
}
```
