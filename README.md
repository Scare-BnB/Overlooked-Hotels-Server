# Overlooked-Hotels-Server

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