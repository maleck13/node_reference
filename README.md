## node reference

Outline transport agnostic node js service. 


directory layout 

```sh
.
├── config  
├── context # generated contexts generated each time
├── deploy # our business logic not generated 
└── endpoints
    └── http #generated endpoints. Each endpoint only generated once    

```


files layout 

```sh 
├── config
│   ├── configValidation.js
│   └── dev.json
├── context
│   └── deploy.js
├── deploy # directory named after the domain the business logic covers 
│   └── service.js
├── endpoints
│   └── http
│       ├── deploy.js #deploy endpoints
│       ├── error.js #http error handler
│       ├── index.js #http endpoint builder
│       └── sys.js #sys endpoints
├── package.json
└── server.js

```