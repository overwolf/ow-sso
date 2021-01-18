# Overwolf SSO Server Side Sample

This is an example of a Node server that works with Overwolf's OAuth server to log in and redirect the user back to your website with an access token.

## Installing

Run `npm install` to install the dependencies

## Starting

Run `npm run start` to start the server

## Changing the listen port

By default the server will run on port 8080, to change that you can run it with an environment variable:

### On Windows (PowerShell):
`$env:PORT="5000"; npm run start`

### On Linux:
`PORT=5000 npm run start`
