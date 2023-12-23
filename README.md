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
Provided a User is logged in, the following operations will execute unless they require Administrative Access.

### User

#### GET/ allows Admin User to access all Users stored in the database
![get](/src/docs/endpoints/Get%20All%20Users.png)

#### POST/ creates a new User in the database
![post](/src/docs/endpoints/Create%20User%20in%20Postman.png)

#### PATCH/ updates a User's data
![patch](/src/docs/endpoints/Update%20User%20Data.png)

#### DELETE/ deletes a User's account in the database
![delete](/src/docs/endpoints/Delete%20User%20Account.png)

### Accommodation

#### GET/ shows all location data for Accommodation
![get](/src/docs/endpoints/Get%20All%20Locations.png)

#### POST/ creates a new Accommodation if the user isAdmin
![postAdmin](/src/docs/endpoints/Create%20Accommodation%20as%20Admin.png)
`Error if not admin.`
![post](/src/docs/endpoints/Try%20Create%20Accommodation%20-%20not%20Admin.png)

#### PATCH/ updates information in location data for Admin only
![patch](/src/docs/endpoints/Update%20Accommodation%20as%20Admin%20-After.png)

#### DELETE/ removes a location from the Accommodation database
![delete](/src/docs/endpoints/Delete%20Accommodation%20as%20Admin.png)

### Booking

#### GET/ shows all Booking in the database as Admin
![get](/src/docs/endpoints/Get%20All%20Bookings%20as%20Admin.png)

#### POST/ creates a Booking provided a User is logged in
![post](/src/docs/endpoints/Create%20Booking%20with%20JWT.png)

#### PATCH/ updates an existing Booking 
![patch](/src/docs/endpoints/Update%20Booking%20data.png)

#### DELETE/ removes a Booking entry from the database
![delete](/src/docs/endpoints/Delete%20Booking.png)

### Review

#### GET/ shows all Reviews for theOverlookedHotels
![get](/src/docs/endpoints/Get%20All%20Reviews.png)

#### POST/ creates a new User Review
![post](/src/docs/endpoints/Create%20Review.png)

#### PATCH/ updates an existing Review
![patch](/src/docs/endpoints/Update%20Review.png)

#### DELETE/ deletes a Review from the database
![delete](/src/docs/endpoints/Delete%20Review.png)
