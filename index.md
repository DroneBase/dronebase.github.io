---
layout: home
title: API Docs for DroneBase
base_url: "./"
---

##App Authentication

The DroneBase API uses Header or HTTP Basic Authentication to verify identity. For initial creation of both pilots and clients, an app api token is required.

To interact with the api as a Pilot ot a Client, you will need both an api key and email. It is used in the following format: `[email]:[api-token]`

```bash
curl -u [api-token]:x https://api.dronebase.com/[end-point]
```
or

```bash
curl https://[api-token]:x@api.dronebase.com/[end-point]
```

or

```bash
curl -H 'X-Api-Token:[api-token]' https://api.dronebase.com/<end-point>
```

##Request & Response Format

The DroneBase API is HTTP-based and requires the correct GET, POST, PATCH, or DELETE method with the request. Response codes follow the normal HTTP Response Code. Data is returned in JSON format.