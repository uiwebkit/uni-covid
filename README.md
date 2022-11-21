# Covid test task

Using Angular 12 and all required libraries create an application which consumes statistical data from
the following public API:

https://github.com/M-Media-Group/Covid-19-API

Acceptance criteria:
- Application has to be well designed. Use common components.
- Application has to be integrated with GitHub and allow to login only for GitHub users (Oauth).
  o Of course GitHub requires registration of the application, so app has to be configurable
  and the documentation has to be provided how to register app and start using.
- Once logged in, user has to have ability to request statistical data based on country:
  
  1. the information regarding cases for the current moment:

   confirmed

   recovered

   deaths

   vaccinated level in % of total population

  2. based on historical data should be shown:

   new confirmed cases since last data available

Additional requirements:

- The code should follow good practices and have comments.
- It is a good practice to upload source code to the Github repo and provide us the link.

## Demo
Run `npm i` ant than `ng serve` for a dev server. Navigate to `http://localhost:4200/`

## Configuration

### Step 1 
- Do all steps from: https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app;
- Open https://github.com/settings/developers and open your new application settings;
- Save your Client ID and Client secrets for the further steps;
- Do nothing from: https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps
(because it does not work from Browser, due to CORS error);

### Step 2
- Login or signup at: https://firebase.google.com (Go to console);
- Add "Authentication" project;
- Open your "Authentication" project and at "Sign-in method" tab click "Add new provider" button (Github);
- Populate all required data received from the Step 1;
- Open "Project settings" (the cog near "Project overview") and at the "General" tab get data from "const firebaseConfig";

### Step 3
- Add firebaseConfig to environment variable of your Angular project and call: "initializeApp(environment.firebaseConfig)";
- Do steps from: https://firebase.google.com/docs/auth/web/github-auth
