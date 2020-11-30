# Winpin : A Virtual Event Platform
### COMP 8117: Advanced Software Engineering Project

The goal of this project is to design an Event Management portal “Winpin”, that allows users to participate in events and create engaging virtual events. 
The event portal will allow users to keep track of the different events, the schedule, the organizers, and the overview of the events.

### Prerequisites
 - Node.js v12+
 - NPM v6+
 
### Install Dependencies
 - Run `npm install` to install all dependencies from NPM.
 - You can also use `yarn`
 
### Running the App locally
 - Run developer mode
   - Client:
      - `npm run dev`
   - Server:
      - `cd winpin-server`
      - `npm start`
   
### Building

Build the React app with
- npm run build

This script will build the static assets for the application in the `build/` directory.

### Tests

This application has unit tests (using [Jest](https://jestjs.io/)) and E2E tests (using [Cypress](https://www.cypress.io/)). 
You can run the tests with the following scripts.

Run unit tests with
- `npm tes`
- `npm run cypress:open`

### Deployment

Deployment of the React app to IBM Cloud
- `npm run build`
- `rm -r winpin-server/winpin-ui/`
- `cp -r build/ winpin-server/winpin-ui/`
- `cd winpin-server/`
- `ibmcloud cf push winpin`

To deploy app on IBM's Cloud Foundry you need to configure `ibmcloud` locally first! 
