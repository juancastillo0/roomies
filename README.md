# Roomies
## Description
This project is created for roomates. It helps to keep track of the finances and the tasks of the house.

## Objectives
- Help roommates split bills, keep track of the expiration dates, have a platform to post messages, keep track of obligations and things to do

- Create an useful tool that helps roommates, specially me and my roommates

- Have fun!

## Demo
https://approomies.herokuapp.com/

## Technologies
This proyect was developed using the MERN-Stack

- For the data layer we used **Mongo**

- For the client-side layer we used **React**

- For the server-side layer we used **Node** and **Express**

## Run the app locally

### Requisites
- **Node.js**: Verify that nodejs is installed by running "node -v" on terminal or cmd. It can be downloaded in https://nodejs.org/ (versión LTS)

### Open a terminal or cmd in the root folder of the proyect and follow the steps using the commands indicated

### *Install dependencies*
```
npm install
```

### *Setup enviroment variables*
Create a file and name it ".env", in this file you will configure the enviroment variable ATLAS_URI that allows the server to connect to MongoDB. The variable should be written like this:
```
ATLAS_URI=mongodb+srv://username:password@roomies-75gee.mongodb.net/test?retryWrites=true&w=majority
```

### *Run the server*
```
npm start
```
The server should be running at port **3001**

### Open a terminal or cmd in the *roomies-frontend* folder of the proyect and follow the steps using the commands indicated

### *Install dependencies*
```
npm install
```

### *Build front end*
```
npm run build
```
This will build the static files that the server is going to present

## To see the app go to **localhost:3001**
**Fill the login with the following gredentials:**
- Room-name: room-1
- Username: John Guerra
- Password: 12345

## Authors
* [__Sergio Naranjo Puentes__](https://github.com/snaranjop1)
* [__Gregorio Ospina Arango__](https://github.com/gregorioospina)


## Licence
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This repository has the standard MIT license. You can find it [here.](https://github.com/snaranjop1/roomies/blob/master/LICENSE)

