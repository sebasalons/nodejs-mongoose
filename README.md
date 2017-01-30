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
    |Add|POST|/book|
    |Update|PUT|/book/:id|
    |Delete|DELETE|/book/:id|
    |Find book by ID|GET|/book/:id|
    |List of all books|GET|/books/:finder|
    |Get availables|GET|/book/available|

    **Requests for reserves**

    |Action|Type|Routes|
    |---|---|---|
    |Add|POST|/reserve/book|
    |Update|PUT|/reserve/book/:id|
    |Delete|DELETE|/reserve/book/:id|
    |Find reserve by ID|GET|/reserve/book/:id|
    |List of all reserves|GET|/reserves/book/:finder|


## Quick help

* Install modules

```bash
    $ npm install
```

* Check tests

```bash
    $ npm test
```