define({ "api": [  {    "type": "post",    "url": "/authenticate",    "title": "Create",    "permission": [      {        "name": "App Token"      }    ],    "name": "CreateAuthentication",    "group": "Authentication",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "X-Api-Token",            "description": "<p>App unique access-token.</p> "          }        ]      },      "examples": [        {          "title": "Example:",          "content": "curl {api-url}/authenticate \\\n  -H \"X-Api-Token: bTKW0Hmqhq0Ab464vvJe24w\"",          "type": "bash"        }      ]    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": false,            "field": "email",            "description": "<p>Email of client.</p> "          },          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": false,            "field": "password",            "description": "<p>Password of client.</p> "          }        ]      },      "examples": [        {          "title": "Example:",          "content": "curl {api-url}/authenticate \\\n  -H \"X-Api-Token: bTKW0Hmqhq0Ab464vvJe24w\" \\\n  -d client[email]=larry@dronebase.com \\\n  -d client[password]=hard_password",          "type": "bash"        }      ]    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "first_name",            "description": "<p>First name of client.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "last_name",            "description": "<p>last name of client.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "email",            "description": "<p>Email of client.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "api_key",            "description": "<p>Used to authorize client.</p> "          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n  {\n    first_name: \"Jim\",\n    last_name: \"Jam\",\n    email: \"jimjam@me.com\"\n    api_key: \"qEXrMhCVQu_9JhfeZv7McFTJAww\"\n  }",          "type": "json"        }      ]    },    "version": "1.0.0",    "filename": "../dronebase/app/controllers/api/v1/sessions_controller.rb",    "groupTitle": "Authentication"  },  {    "type": "post",    "url": "/clients",    "title": "Create",    "permission": [      {        "name": "App Token"      }    ],    "name": "CreateClient",    "group": "Client",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "X-Api-Token",            "description": "<p>App unique access-token.</p> "          }        ]      },      "examples": [        {          "title": "Example:",          "content": "curl {api-url}/clients \\\n  -H \"X-Api-Token: bTKW0Hmqhq0Ab464vvJe24w\"",          "type": "bash"        }      ]    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": false,            "field": "first_name",            "description": "<p>First name of client.</p> "          },          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": false,            "field": "last_name",            "description": "<p>last name of client.</p> "          },          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": false,            "field": "email",            "description": "<p>Email of client.</p> "          },          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": false,            "field": "password",            "description": "<p>Password chosen by client.</p> "          }        ]      },      "examples": [        {          "title": "Example:",          "content": "curl {api-url}/clients \\\n  -H \"X-Api-Token: bTKW0Hmqhq0Ab464vvJe24w\" \\\n  -d client[first_name]=Larry \\\n  -d client[last_name]=Sprock \\\n  -d client[email]=larry@dronebase.com \\\n  -d client[password]=hard_password",          "type": "bash"        }      ]    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "first_name",            "description": "<p>First name of client.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "last_name",            "description": "<p>last name of client.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "email",            "description": "<p>Email of client.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "api_key",            "description": "<p>Used to authorize client.</p> "          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n  {\n    first_name: \"Jim\",\n    last_name: \"Jam\",\n    email: \"jimjam@me.com\"\n    api_key: \"qEXrMhCVQu_9JhfeZv7McFTJAww\"\n  }",          "type": "json"        }      ]    },    "version": "1.0.0",    "filename": "../dronebase/app/controllers/api/v1/clients_controller.rb",    "groupTitle": "Client"  },  {    "type": "post",    "url": "/clients/missions",    "title": "Create",    "permission": [      {        "name": "Client Email & Token"      }    ],    "name": "CreateMission",    "group": "Client_Missions",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authorization",            "description": "<p>Client email and api_key.</p> "          }        ]      },      "examples": [        {          "title": "Example:",          "content": "curl {api-url}/clients/missions \\\n  -H \"Authorization: Token token=bTKW0Hmqhq0Ab464vvJe24w, email=larry@dronebase.com\"",          "type": "bash"        }      ]    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>Text</p> ",            "optional": false,            "field": "instructions",            "description": "<p>These are client instructions.</p> "          },          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": false,            "field": "category",            "description": "<p>The category this mission.</p> "          },          {            "group": "Parameter",            "type": "<p>Integer</p> ",            "optional": false,            "field": "start_time",            "description": "<p>This is the start time of the mission. <code>times in unix timestamp</code></p> "          },          {            "group": "Parameter",            "type": "<p>Integer</p> ",            "optional": false,            "field": "end_time",            "description": "<p>This is the deadline to complete the mission. <code>times in unix timestamp</code></p> "          },          {            "group": "Parameter",            "type": "<p>Integer</p> ",            "optional": false,            "field": "package_id",            "description": "<p>The package id to associate with the mission.<br> slasdjsadjasldjklasjkldasj</p> "          },          {            "group": "Parameter",            "type": "<p>Integer</p> ",            "optional": false,            "field": "location_id",            "description": "<p>The location id to associate with the mission.</p> "          }        ]      },      "examples": [        {          "title": "Example:",          "content": "curl {api-url}/clients \\\n  -H \"X-Api-Token: bTKW0Hmqhq0Ab464vvJe24w\" \\\n  -d instructions=\"Do something cool\" \\\n  -d category=\"Real Estate\" \\\n  -d start_time=1434147993 \\\n  -d end_time=1435357604 \\\n  -d package_id=1 \\\n  -d location_id=23",          "type": "bash"        }      ]    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n  {\n    id: 10022\n    status: \"initialized\",\n    instructions: \"Do something cool\",\n    category: \"Real Estate\",\n    start_time: 1434137342,\n    end_time: 1435347041,\n    package: {\n      id: 1,\n      name: \"Pro\",\n      type_name: \"Maps + Surveys\",\n      description: \"  - This is awesomer mapping stuff\\n  - You really need this more for excellent mapping\\n  - Lets create some cool stuff with this mapper\\n\",\n      price: 59900\n    },\n    location: {\n      id: 23,\n      latitude: l34.047635,\n      longitude: -118.463419,\n      address: \"1526 14th St\",\n      address2: \"Suite 106\",\n      city: \"Santa Monica\",\n      state: \"CA\",\n      zip: \"90404\"\n    },\n    client_id: 27\n  }",          "type": "json"        }      ],      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>Integer</p> ",            "optional": false,            "field": "id",            "description": "<p>The id of the mission.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "status",            "description": "<p>Mission status. It can be on of the following <code>['initialized', x, x]</code></p> "          },          {            "group": "Success 200",            "type": "<p>Text</p> ",            "optional": false,            "field": "instructions",            "description": "<p>These are client instructions.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "category",            "description": "<p>The category this mission.</p> "          },          {            "group": "Success 200",            "type": "<p>Integer</p> ",            "optional": false,            "field": "start_time",            "description": "<p>This is the start time of the mission. <code>times in unix timestamp</code></p> "          },          {            "group": "Success 200",            "type": "<p>Integer</p> ",            "optional": false,            "field": "end_time",            "description": "<p>This is the deadline to complete the mission. <code>times in unix timestamp</code></p> "          },          {            "group": "Success 200",            "type": "<p>Hash</p> ",            "optional": false,            "field": "package",            "description": "<p>The package associated with the mission.</p> "          },          {            "group": "Success 200",            "type": "<p>Integer</p> ",            "optional": false,            "field": "package.id",            "description": "<p>Package record id.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "package.name",            "description": "<p>Name of the package.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "package.type_name",            "description": "<p>This is the group name for the package.</p> "          },          {            "group": "Success 200",            "type": "<p>Text</p> ",            "optional": false,            "field": "package.description",            "description": "<p>The is a description of the package. It is written in <a href=\"http://daringfireball.net/projects/markdown/syntax\">Markdown</a>.</p> "          },          {            "group": "Success 200",            "type": "<p>Integer</p> ",            "optional": false,            "field": "package.price",            "description": "<p>This is the price of the package. Price is returned in cents.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "location",            "description": "<p>The location where the mission will be executed</p> "          },          {            "group": "Success 200",            "type": "<p>Integer</p> ",            "optional": false,            "field": "location.id",            "description": "<p>Location record id</p> "          },          {            "group": "Success 200",            "type": "<p>Float</p> ",            "optional": false,            "field": "location.latitude",            "description": "<p>Latitudinal coordinates of the location of the mission.</p> "          },          {            "group": "Success 200",            "type": "<p>Float</p> ",            "optional": false,            "field": "location.longitude",            "description": "<p>Longitudinal coordinates of the location of the mission.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "location.address",            "description": "<p>Phisical address of the location.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "location.address2",            "description": "<p>Additional address information for the physical address.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "location.city",            "description": "<p>City of the mission.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "location.state",            "description": "<p>State of the mission.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "location.zip",            "description": "<p>Zipcode of the mission.</p> "          },          {            "group": "Success 200",            "type": "<p>Integer</p> ",            "optional": false,            "field": "client_id",            "description": "<p>Client id associated with this mission.</p> "          }        ]      }    },    "version": "1.0.0",    "filename": "../dronebase/app/controllers/api/v1/clients/missions_controller.rb",    "groupTitle": "Client_Missions"  },  {    "type": "get",    "url": "/clients/missions",    "title": "Index",    "permission": [      {        "name": "Client Email & Token"      }    ],    "name": "GetMissions",    "group": "Client_Missions",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authorization",            "description": "<p>Client email and api_key.</p> "          }        ]      },      "examples": [        {          "title": "Example:",          "content": "curl {api-url}/clients/missions \\\n  -H \"Authorization: Token token=bTKW0Hmqhq0Ab464vvJe24w, email=larry@dronebase.com\"",          "type": "bash"        }      ]    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n  [\n    {\n      id: 10022\n      status: \"initialized\",\n      instructions: \"Do something cool\",\n      category: \"Real Estate\",\n      start_time: 1434137342,\n      end_time: 1435347041,\n      package: {\n        id: 1,\n        name: \"Pro\",\n        type_name: \"Maps + Surveys\",\n        description: \"  - This is awesomer mapping stuff\\n  - You really need this more for excellent mapping\\n  - Lets create some cool stuff with this mapper\\n\",\n        price: 59900\n      },\n      location: {\n        id: 23,\n        latitude: l34.047635,\n        longitude: -118.463419,\n        address: \"1526 14th St\",\n        address2: \"Suite 106\",\n        city: \"Santa Monica\",\n        state: \"CA\",\n        zip: \"90404\"\n      },\n      client_id: 27\n    },\n    etc...\n  ]",          "type": "json"        }      ],      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>Integer</p> ",            "optional": false,            "field": "id",            "description": "<p>The id of the mission.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "status",            "description": "<p>Mission status. It can be on of the following <code>['initialized', x, x]</code></p> "          },          {            "group": "Success 200",            "type": "<p>Text</p> ",            "optional": false,            "field": "instructions",            "description": "<p>These are client instructions.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "category",            "description": "<p>The category this mission.</p> "          },          {            "group": "Success 200",            "type": "<p>Integer</p> ",            "optional": false,            "field": "start_time",            "description": "<p>This is the start time of the mission. <code>times in unix timestamp</code></p> "          },          {            "group": "Success 200",            "type": "<p>Integer</p> ",            "optional": false,            "field": "end_time",            "description": "<p>This is the deadline to complete the mission. <code>times in unix timestamp</code></p> "          },          {            "group": "Success 200",            "type": "<p>Hash</p> ",            "optional": false,            "field": "package",            "description": "<p>The package associated with the mission.</p> "          },          {            "group": "Success 200",            "type": "<p>Integer</p> ",            "optional": false,            "field": "package.id",            "description": "<p>Package record id.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "package.name",            "description": "<p>Name of the package.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "package.type_name",            "description": "<p>This is the group name for the package.</p> "          },          {            "group": "Success 200",            "type": "<p>Text</p> ",            "optional": false,            "field": "package.description",            "description": "<p>The is a description of the package. It is written in <a href=\"http://daringfireball.net/projects/markdown/syntax\">Markdown</a>.</p> "          },          {            "group": "Success 200",            "type": "<p>Integer</p> ",            "optional": false,            "field": "package.price",            "description": "<p>This is the price of the package. Price is returned in cents.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "location",            "description": "<p>The location where the mission will be executed</p> "          },          {            "group": "Success 200",            "type": "<p>Integer</p> ",            "optional": false,            "field": "location.id",            "description": "<p>Location record id</p> "          },          {            "group": "Success 200",            "type": "<p>Float</p> ",            "optional": false,            "field": "location.latitude",            "description": "<p>Latitudinal coordinates of the location of the mission.</p> "          },          {            "group": "Success 200",            "type": "<p>Float</p> ",            "optional": false,            "field": "location.longitude",            "description": "<p>Longitudinal coordinates of the location of the mission.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "location.address",            "description": "<p>Phisical address of the location.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "location.address2",            "description": "<p>Additional address information for the physical address.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "location.city",            "description": "<p>City of the mission.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "location.state",            "description": "<p>State of the mission.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "location.zip",            "description": "<p>Zipcode of the mission.</p> "          },          {            "group": "Success 200",            "type": "<p>Integer</p> ",            "optional": false,            "field": "client_id",            "description": "<p>Client id associated with this mission.</p> "          }        ]      }    },    "version": "1.0.0",    "filename": "../dronebase/app/controllers/api/v1/clients/missions_controller.rb",    "groupTitle": "Client_Missions"  },  {    "type": "get",    "url": "/clients/missions/:id",    "title": "Show",    "permission": [      {        "name": "Client Email & Token"      }    ],    "name": "ShowMission",    "group": "Client_Missions",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authorization",            "description": "<p>Client email and api_key.</p> "          }        ]      },      "examples": [        {          "title": "Example:",          "content": "curl {api-url}/clients/missions/10022 \\\n  -H \"Authorization: Token token=bTKW0Hmqhq0Ab464vvJe24w, email=larry@dronebase.com\"",          "type": "bash"        }      ]    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n  {\n    id: 10022\n    status: \"initialized\",\n    instructions: \"Do something cool\",\n    category: \"Real Estate\",\n    start_time: 1434137342,\n    end_time: 1435347041,\n    package: {\n      id: 1,\n      name: \"Pro\",\n      type_name: \"Maps + Surveys\",\n      description: \"  - This is awesomer mapping stuff\\n  - You really need this more for excellent mapping\\n  - Lets create some cool stuff with this mapper\\n\",\n      price: 59900\n    },\n    location: {\n      id: 23,\n      latitude: l34.047635,\n      longitude: -118.463419,\n      address: \"1526 14th St\",\n      address2: \"Suite 106\",\n      city: \"Santa Monica\",\n      state: \"CA\",\n      zip: \"90404\"\n    },\n    client_id: 27\n  }",          "type": "json"        }      ],      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>Integer</p> ",            "optional": false,            "field": "id",            "description": "<p>The id of the mission.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "status",            "description": "<p>Mission status. It can be on of the following <code>['initialized', x, x]</code></p> "          },          {            "group": "Success 200",            "type": "<p>Text</p> ",            "optional": false,            "field": "instructions",            "description": "<p>These are client instructions.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "category",            "description": "<p>The category this mission.</p> "          },          {            "group": "Success 200",            "type": "<p>Integer</p> ",            "optional": false,            "field": "start_time",            "description": "<p>This is the start time of the mission. <code>times in unix timestamp</code></p> "          },          {            "group": "Success 200",            "type": "<p>Integer</p> ",            "optional": false,            "field": "end_time",            "description": "<p>This is the deadline to complete the mission. <code>times in unix timestamp</code></p> "          },          {            "group": "Success 200",            "type": "<p>Hash</p> ",            "optional": false,            "field": "package",            "description": "<p>The package associated with the mission.</p> "          },          {            "group": "Success 200",            "type": "<p>Integer</p> ",            "optional": false,            "field": "package.id",            "description": "<p>Package record id.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "package.name",            "description": "<p>Name of the package.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "package.type_name",            "description": "<p>This is the group name for the package.</p> "          },          {            "group": "Success 200",            "type": "<p>Text</p> ",            "optional": false,            "field": "package.description",            "description": "<p>The is a description of the package. It is written in <a href=\"http://daringfireball.net/projects/markdown/syntax\">Markdown</a>.</p> "          },          {            "group": "Success 200",            "type": "<p>Integer</p> ",            "optional": false,            "field": "package.price",            "description": "<p>This is the price of the package. Price is returned in cents.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "location",            "description": "<p>The location where the mission will be executed</p> "          },          {            "group": "Success 200",            "type": "<p>Integer</p> ",            "optional": false,            "field": "location.id",            "description": "<p>Location record id</p> "          },          {            "group": "Success 200",            "type": "<p>Float</p> ",            "optional": false,            "field": "location.latitude",            "description": "<p>Latitudinal coordinates of the location of the mission.</p> "          },          {            "group": "Success 200",            "type": "<p>Float</p> ",            "optional": false,            "field": "location.longitude",            "description": "<p>Longitudinal coordinates of the location of the mission.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "location.address",            "description": "<p>Phisical address of the location.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "location.address2",            "description": "<p>Additional address information for the physical address.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "location.city",            "description": "<p>City of the mission.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "location.state",            "description": "<p>State of the mission.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "location.zip",            "description": "<p>Zipcode of the mission.</p> "          },          {            "group": "Success 200",            "type": "<p>Integer</p> ",            "optional": false,            "field": "client_id",            "description": "<p>Client id associated with this mission.</p> "          }        ]      }    },    "version": "1.0.0",    "filename": "../dronebase/app/controllers/api/v1/clients/missions_controller.rb",    "groupTitle": "Client_Missions"  },  {    "type": "get",    "url": "/packages",    "title": "Index",    "permission": [      {        "name": "App Token"      }    ],    "name": "GetPackages",    "group": "Packages",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "X-Api-Token",            "description": "<p>App unique access-token.</p> "          }        ]      },      "examples": [        {          "title": "Example:",          "content": "curl {api-url}/packages \\\n  -H \"X-Api-Token: bTKW0Hmqhq0Ab464vvJe24w\"",          "type": "bash"        }      ]    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>Integer</p> ",            "optional": false,            "field": "id",            "description": "<p>The id of the package.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "name",            "description": "<p>Name of the package.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "type_name",            "description": "<p>This is the group name for the package. Several packages may share this name.</p> "          },          {            "group": "Success 200",            "type": "<p>Text</p> ",            "optional": false,            "field": "description",            "description": "<p>The is a description of the package. It is written in <a href=\"http://daringfireball.net/projects/markdown/syntax\">Markdown</a>.</p> "          },          {            "group": "Success 200",            "type": "<p>Integer</p> ",            "optional": false,            "field": "price",            "description": "<p>This is the price of the package. Price is returned in cents.</p> "          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n  [\n    {\n      id: 1,\n      name: \"Pro\",\n      type_name: \"Maps + Surveys\",\n      description: \"  - This is awesomer mapping stuff\\n  - You really need this more for excellent mapping\\n  - Lets create some cool stuff with this mapper\\n\",\n      price: 59900\n    },\n    etc...\n  ]",          "type": "json"        }      ]    },    "version": "1.0.0",    "filename": "../dronebase/app/controllers/api/v1/mission/packages_controller.rb",    "groupTitle": "Packages"  }] });