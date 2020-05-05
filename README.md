This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `firebase deploy`

Requires the firebase-tools package to be installed globally.

```
npm install -g firebase-tools
```

Firebase configuration is setup to use Firebase project created by Adam Lehechka. So deploying without changing these settings will fail due to lack of permissions.

To update configurations, first go to the [Firebase Console](https://console.firebase.google.com/) and create a new project. Once the instance has been created: 
 - Go to **Authentication** and enable email/password sign-in. 
 - Go to **Database** and create an instance. 
 - Go to **Hosting** and create an instance. 
 - Go to **Project Settings**, scroll to the bottom and add a Web application. When you are brought back to the Settings page, scroll down to your apps, change the Firebase SDK snippet to Config, and copy the code snippet. 
 - In the repository, go to */src/config/firebase.ts* and paste your firebaseConfig over the one contained in the file. 

Once all steps are complete, you will need to install node_modules to the base application and functions, to do so at the root director run:

```
npm install

cd .\functions

npm install
```

After installing, you can deploy all firestore rules, cloud functions, and the site itself at the root directory by running:

```
npm run build

firebase login

firebase use --add
(select your created project)

firebase deploy
```

