/*
Server Application Responsibility
---------------------------------
- Listen request
    - Always same
- Process
    - Algorithm
    - Data Structure
    - Database
    - Problem Solving
    - CRUD
- Response
    - Always same

HTTP:
-----
Hyper Text Transfer Protocol
- Client and Server communicate through a medium called HTTP
- Communicate with text
- Stateless communication(after req and res connection between server and client will close)
- 5 main HTTP methods
    - GET (read data)
    - POST (create a new data)
    - PUT/PATCH (update the existing data)
    - DELETE (delete data from database)
- the req will come using these 5 HTTP methods

Routing patterns:
-----------------
- GET everything - /books
- GET one resource - /books/bookId
- POST new resource - /books
- PATCH/PUT resource - /books/bookId
- DELETE resource - /books/bookId

Whole backend:
-------------
Pipeline: Request - Middleware[logger, body parser, file parser, user ip, blog ip, authentication, authorization, validation] - Controller(Business Logic) - Middleware[error handler] - Response

Invalid req cannot be able to go to the business logic and if it needs to go then process them before sending them to business logic. For this reason we need middleware.

Now we are doing expressjs playlist.
Now we are doing expressjs playlist also.

Todays tasks:
------------
- Middleware
- Project Structure
- Project

What is Middleware?

- Middleware is just a controller function. Reuseable controller functions are middlewares.
Req -> M1 -> M2 -> M3 -> Controller -> Res
Middlewaer function must call next() or send back res else it does not know what to do next.
*/