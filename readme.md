<h2>BoroEats</h2>

<h3>Setup</h3>

 - run build_db.sql and populate_db.sql
   - This will create a database called dbfinal with a default user and pre-filled data
 - `cd server && npm ci`
   - This will install the node modules for the graphql server.
   - You will need to update the connection url in db.js for your mysql login information
   - return to the project root
 - `cd mobile && npm ci`
   - This installs the node modules for the react native application
   - check https://facebook.github.io/react-native/docs/getting-started for setup info under the section 'React Native CLI Quickstart'
   - You will need to open the xcworkspace file in the ios directory and add your apple developer signing information.
   - While in this directory you will also need to run `pod install`
   - return to the project root
 - `cd db_webreact && npm ci`
   - This installs the node modules for the services web portal

<h3>Running the Server</h3>

 - `cd server && npm start` and leave this running
 - `cd mobile && npm run ios` or `cd mobile && npm run android`
 - `cd db_webreact && npm start`
