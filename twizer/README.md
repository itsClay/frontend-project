navigate to twizer directory

1. run `yarn` to install dependencies
2. you will need to insert your dev keys in order to test the environment
  - in the app level of the directory make a file called `secret_keys.js`
  - ```
    export const CONSUMER_KEY = '<YOUR_KEY_HERE>';
    export const CONSUMER_SECRET = '<YOUR_KEY_HERE>';
    ```
3. run `npm start` to run the dev server and a window should automatically populate (otherwise navigate to http://localhost:3000/)
