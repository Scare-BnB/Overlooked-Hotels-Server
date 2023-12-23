![Logo](/src/docs/logo.png)

# MERN Application

### Deployments:

- Netlify: https://theoverlookedhotels.netlify.app
- Heroku: https://the-overlooked-hotels-fa14e4d47922.herokuapp.com/

### Repos:

- Client: https://github.com/Scare-BnB/overlooked-hotels-client
- Server: https://github.com/Scare-BnB/overlooked-hotels-server

## Start Server

To run the server, open the terminal and change into the server folder `cd server`. 
To install the dependencies for this server, type `npm install` into the command line. To seed the relevant data for this application enter `npm run seed` into the terminal. This will store the locations and create user dummy data for both admin and non-admin accounts. 
To run the server, enter `npm start` which wil operate on `localhost:4000`.

## Start Client

To get the client running, move into the client folder `cd client` in the terminal. To install the relevant packages type, `npm install` into the command line. In the terminal, follow with `npm run dev` with will use `localhost:5173`.

## Endpoints and Testing

This API was developed to implement CRUD operations throughout the different model controllers in this application. The different endpoints focus on the four models that have been established in the database: Users, Accommodation, Bookings and Reviews.

### User

#### GET/ allows Admin User to access all Users stored in the database
![get](/src/docs/endpoints/Get%20All%20Users.png)

#### POST/ creates a new User in the database
![post](/src/docs/endpoints/Create%20User%20in%20Postman.png)

#### PATCH/

#### DELETE/

### Accommodation

#### GET/
![get](/src/docs/endpoints/Get%20All%20Locations.png)
#### POST/
![post](/src/docs/endpoints/)
#### PATCH/
![patch](/src/docs/endpoints/Update%20Accommodation%20as%20Admin%20-After.png)
#### DELETE/

### Booking

#### GET/
![get](/src/docs/endpoints/Get%20All%20Bookings%20as%20Admin.png)
#### POST/
![post](/src/docs/endpoints/Create%20Booking%20with%20JWT.png)

#### PATCH/

#### DELETE/

### Review

#### GET/
![get](/src/docs/endpoints/Get%20All%20Reviews.png)
#### POST/
![post](/src/docs/endpoints/)

#### PATCH/

#### DELETE/
* Document all of endpoints
* Include if authorisation is needed (what type? Admin vs. just logged in)
* 







`POST /bookings`  
Purpose of the endpoint is to create a booking
* Authentication
  * User must be logged in with a valid token to access this endpoint
* Payload
```json
{
    "startDate": "asdawdf",
    "endDate": "asdfg",
    "location": "<locationId>"
}
```

* Response
```json
{
    
}
```