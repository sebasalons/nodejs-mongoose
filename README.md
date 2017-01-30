# nodejs-mongoose

## Overview

Mongoose and multi-routes with nodejs and ES6 implementation.

This example manages a small library.

## How to use it

* Execute the server in the port 3000. You can change it reconfiguring in the configuration file 'Config/Settings.js'

```bash
    $ node index.js
```

* We need a real connection to mongodb, it is also configurable in the configuration file.

* API REST

    **Requests for books**

    |Action|Type|Routes|
    |---|---|---|
    |Add|POST|/api/0.1/book|
    |Update|PUT|/api/0.1/book/:id|
    |Delete|DELETE|/api/0.1/book/:id|
    |Find book by ID|GET|/api/0.1/book/:id|
    |List of all books|GET|/api/0.1/books/:finder|
    |Get availables|GET|/api/0.1/book/available|

    **Requests for reserves**

    |Action|Type|Routes|
    |---|---|---|
    |Add|POST|/api/0.1/reserve/book|
    |Update|PUT|/api/0.1/reserve/book/:id|
    |Delete|DELETE|/api/0.1/reserve/book/:id|
    |Find reserve by ID|GET|/api/0.1/reserve/book/:id|
    |List of all reserves|GET|/api/0.1/reserves/book/:finder|


## Quick help

* Install modules

```bash
    $ npm install
```

* Check tests

```bash
    $ npm test
```