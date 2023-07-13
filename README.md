## Getting started.

Git clone the repo locally. 

> git@github.com:FreddieHoy/prequin-test.git

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

