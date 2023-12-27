# ACME LLC users list

! Before using the application please make sure that you install the required packages using `npm install` for both the frontend and backend

! You will need a .env file which contains the port number you can add it manually in the root of the backend folder

`touch .env` and type the following
`PORT=5000`

this step is not necessary. As the api will fallback the default port: 5000

## Backend:

To run the backend server run the following command:

`npm run dev`

### Endpoints:
- Get /users : Get the list of all the users available
- Get /users?search= : Get the list of all the users which there firstname start with search query param

### Tests:
To run the unit test for the backend you can use the follwing command:

`npm test`

## Frontend:
Same as the backend you can use `npm run dev` to run the frontend to use the application please visit: http://localhost:5173/