# phoneserve
easy API implementation for sipgate.io (not official), TypeScript ready

> note: **this package is at a very early stage, expect this to be beta 2016-06-15**

The intention of this package is to easify usage of the awesome sipgate.io API for nodejs.

## Status
[![npm version](https://badge.fury.io/js/phoneserve.svg)](https://badge.fury.io/js/phoneserve)

## Where does this package belong in your IT chain?
You should use this package as required package in your own telephony node package.

## Currently supported providers:

* sipgate.io

## SSL
If you want to use SSL don't do it with nodejs, but use nginx with docker for it.

## Usage
This package can handle multiple sipgate instances. We highly recommend the use of TypeScript since it supports TpyeScript intellisense.

**Terminology:**

* **Instance Class:** An instance is the main class of phoneserve. You can have multiple instances for different for providers.
* **Destination Class** An instance consumes a destination. The destination class is extended by:
    * **Voiceapp Class** A voiceapp routes between multiple destinaion by evaluating user key input. Later on this may be extended with Speechrecognition.
    * **Rule Class** A rule routes between different destinations by running a evaluator function that returns a destination.
    * **Group** A group route a call to multiple persons (Implementation is not yet finished) and routes it to another destination if noone picks up;
    * **Person** 
```typescript
import * as phoneserve from "phoneserve";
```

The key to this package are rules. You can define them programmatically.

