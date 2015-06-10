---
layout: home
title: API Docs for DroneBase
base_url: "./"
---

##App Authentication

The DroneBase API uses Header Authorization to verify identity.

```bash
curl -H 'X-Api-Token: [api-token]' https://api.dronebase.com/[end-point]
```

##Client Authorization

```bash
curl -H "Authorization: Token token=[client_api_key], email=[client_email]" \
  https://api.dronebase.com/clients/[end-point]
```

##Authentication and Authorization flow

First thing we need is a client, pilot or admin credentials.
We then need to post them to the server which will return an client object.

```bash
curl -H "X-Api-Token: bTKW0Hmqhq0Ab464vvJe24w" \
  --data "client[email]=[client_email]&client[password]=[client_password]" \
  https://api.dronebase.com:3000/v1/authenticate
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