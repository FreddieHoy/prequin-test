## Getting started.

Git clone the repo locally. 

> git clone git@github.com:FreddieHoy/prequin-test.git

Move into the repo and install node modules

> npm i

# Task 1

Completed in src/TaskOne/index.ts

There is a simple test file testing some of the cases. 

Just run this to run the test file

> npm run test

# Task 2.

To run the app run 

> npm run start

--- 

First obstacle was using the API. Firstly getting around the CORS issue when developing locally. But after some reading figured out that CRA has a proxy feature which enables getting the correct headers from the OPTIONS query.

https://create-react-app.dev/docs/proxying-api-requests-in-development/

Also didn't see that the auth needed to use the - x-www-form-urlencoded format. Slowed me down for a while. 

Hit a build issue - the classic webpack polyfill. Avoided doing react-app-rewired to fix it. But ended up following ths to fix the issue quite easily.

https://www.alchemy.com/blog/how-to-polyfill-node-core-modules-in-webpack-5

Built the login / logout flow. Usually there's a user object. But just hijacked the table data - IE if the request for data is not authed then 'logout' / set data to undefined (instead of user).

Can't find the dateCreate field on the table.. yet. 

Spent more the 2 hours but have really enjoyed it. Also forgot how nice MUI is. 

### Reflections

I guess I have only really worked on apps that require login. In this case you may not have users logging in. Might be server to server interaction or just an open webpage of information perhaps. 

But I guess I was given a username and api key so makes sense to build a login flow where the data / permissions might change depending on who's logged in.

Given more time I would:
- Rename App -> Main and DataPage -> App. This would create a divide between login & app (the rest of the app).
  
- I would then add a global state in a context which would determine what pages are being rendered. And I could use this global state to interact with the URL. 

IE if you click on a new page IE /investors/1234 the url change to /investors/1234. Or if you copy and paste the url in the browser to /investors/1000. The global state set up the initial page to be /investors/1000 not /home.

- I'm very interested to set up the refresh token implementation. Haven't done that before. Will try and do that later on.
