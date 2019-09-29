# server

#### Requirements

* node v10.15.3</br>
* npm v6.4.1

#### Dependencies

* node-express ^4.17.1</br>
* mongoose ^5.6.9


## Run server

`git clone https://github.com/vicdata4/node_server.git`

`npm install`

`node server.js`

## Data Base config:

Create `config.js` file in `/` directory and include your config params.

Example
```
const path = require('path');

module.exports = {
    url: 'db-adress',
    secret: 'auth-private-key',
    prefix: 'prefix-key',
    publicPath: 'public-build-path',
    origin: 'origin-adress'
}
```








