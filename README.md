# phoneserve
easy API implementation for sipgate.io (not official), TypeScript ready

> note: **this package is at a very early stage, expect this to be beta 2016-06-15**

The intention of this package is to easify usage of the awesome sipgate.io API for nodejs.

## Status
[![npm version](https://badge.fury.io/js/phoneserve.svg)](https://badge.fury.io/js/phoneserve)

## Where does this package belong in your IT chain?
You should use this package as required package in your own telephony node package.
This *sipgate* package takes care of providing a request server and simplifies the official sipgate API for you.

## SSL
If you want to use SSL don't do it with nodejs, but use nginx with docker for it.

## Usage
This package can handle multiple sipgate instances. We highly recommend the use of TypeScript since it supports TpyeScript intellisense.

```typescript
import * as phoneserve from "phoneserve";

let myPhoneserve = new phoneserve.Instance({
    name: "company", // optional, will be used for better logs
    provider:"sipgate" // optional, defaults to sipgate,
    port: "8080" // optional, defaults to 8080, or if taken 8081,8082,8083
    phonenumbers: [ // array of phonenumbers, optional but highly recommended
        new phoneserve.Phonenumber("main","123456789"),
        new phoneserve.Phonenumber("support","234567891"),
        new phoneserve.Phonenumber("ceo","345678912")
    ]
});

let myDestination = new phoneserve.Destination({
    
});

let myVoiceapp = new phoneserve.Voiceapp({
    introduction:"somepath/to/soundfile.*"; // for soundfile specs see sipgate.io specs
    options:{
        0:new phoneserve.Option({
            voiceapp:myVoiceApp2, // either a voiceapp
            destination:myDestination // or a destination
        }),
        1:new phoneserve.Options({
            
        })
    }
});

let myRule1 = new phoneserve.Rule({
    //rule params
    toPhonenumber:"ceo",
    route:myVoiceapp;
});

myPhoneserve.addRules([myRule1]); //accepts rules. For consistency always requires ":Rule[]" as argument
```

The key to this package are rules. You can define them programmatically.

