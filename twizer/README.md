
### Setting up API keys
You will need to insert your dev keys in order to use the app on dev.
``` bash
        ├── src
        │   ├── App.css
        │   ├── App.js
        │   ├── App.test.js
        │   ├── actions
        │   ├── components
        │   ├── index.css
        │   ├── index.js
        │   ├── reducers
        │   │   ....
        │   ├── registerServiceWorker.js
        │   ├── secret_keys.js   <--- INSERT HERE
        │   ├── store
        │   │   └── store.js
        │   └── utils
```
- in the app level of the directory make a file called `secret_keys.js` and place this snippet in there replacing the tags with your special keys. Should be accessed from [apps.twitter](https://apps.twitter.com/) after you apply for a key.

```javascript
module.exports = {
  // replace ... with your keys from the Twitter Apps Page
  CONSUMER_KEY: '...',
  CONSUMER_SECRET: '...',
  ACCESS_TOKEN: '...',
  ACCESS_TOKEN_SECRET: '...',
}
```
### Starting the API
1. In your terminal navigate to the projects backend folder
```bash
      ├── twizer
      │   ├── backend  <--- HERE
      │   ├── node_modules
      │   ├── public
```
2. Install dependencies `npm install`
3. Run the node server to serve your API `node server.js`

### Startup webpack / dev server
1. In a different window/tab navigate to the twizer root directory and install dependencies `npm install`
```bash
      ├── twizer  <--- BACK UP HERE!
      │   ├── backend 
      │   ├── node_modules
      │   ├── public
```
2. Run `npm start` to run the dev server and a window should automatically populate (otherwise navigate to http://localhost:3000/)
