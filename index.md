---
layout: home
title: API Docs for DroneBase
base_url: "./"
---

##App Authentication

The DroneBase API uses Header Authorization to verify identity.

```bash
curl https://api.dronebase.com/mission-types \
   -H 'X-Api-Token: bTKW0Hmqhq0Abs64vsvJe24sw'
```

##Client Authorization

```bash
curl https://api.dronebase.com/clients/missions \
   -H "Authorization: Token token=bTKW0Hmqhq0Ab464vvJe24w, email=larry@dronebase.com"
```

##Authentication and Authorization flow

First thing we need is a client, pilot or admin credentials.
We then need to post them to the server which will return an client object.

```bash
curl https://api.dronebase.com:3000/v1/authenticate \
   -H "X-Api-Token: bTKW0Hmqhq0Ab464vvJe24w" \
   -d client[email]=larry@dronebase.com \
   -d client[password]=hard_password
```
Which would return a client object

```json
{
  "client": {
    "first_name": "client_first_name",
    "last_name" : "client_last_name",
    "email":"client_email",
    "api_key":"client_api_key"
  }
}
```

Any subsequent requests would then be scoped by the user type namespace with the email and api_key included in the headers.



##Request & Response Format

The DroneBase API is HTTP-based and requires the correct GET, POST, PATCH, or DELETE method with the request. Response codes follow the normal HTTP Response Code. Data is returned in JSON format.