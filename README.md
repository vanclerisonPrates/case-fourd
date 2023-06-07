# Case Fourd With React, TypeScript, Tailwind, CSS & Mirage 

This project was created using two simple API request to populate two containers. 

For mirage usage need run the following script: 

### `yarn dev` we can see the application working with all sections.

Also but no less important. This Application were published at DockerHub.

The url to pull image: [VANCLERISON/CASE-FOURD](https://hub.docker.com/r/vanclerison/case-fourd/tags).


## Available Scripts

In the project directory, you can run:

### `yarn dev` & `yarn prod`

For usage with mocked values set by mirage we need use DEV 
For usage with real data of Case Api we need use PROD

The enviroment is using .ENV files .env.development & .env.production this files are necessary to compile the application looking for correct enviroment.
  -whitout this files the application will ever start with mirage database.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build:prod` &  `yarn build:dev`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
