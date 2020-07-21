# Crowdburst
A simple web app that allows people to practice better social distancing at local grocery stores during the COVID-19 pandemic. 

![Image](.crowdburst/client/images/cburst.jpg)

## Table of Contents
* [Introduction](#introduction)
* [Technologies & Frameworks](#technologies)
* [Construction](#construction)
* [Setup](#setup)



### Introduction
I wanted to create a useful tool for the members of my community as well as make an impact in our efforts to fight this pandemic. Users can add information on how crowded a certain store is, if they are low on stock on important supplies, or other pertinent information. 

<!-- To create this web app, I used Node.js, React.js, Yelp-Fusion API, Hasura, and MongoDB Realm.  -->

### Technologies & Frameworks
 - Node.js
 - React.js
 - Yelp-Fusion API
 - Hasura GraphQL API
 - MongoDB Atlas
 - MongoDB Realm 

### Construction
I started the construction of this project as a basic CRUD application. Using the Yelp-Fusion API, I received data on popular grocery stores in the area, saved this information in a JSON file, which I then normalized to use in my own GraphQL API in Hasura. I wanted to use these stores as a starting point for my users, who are also able to add local grocery stores they may frequent, in addition to adding crowd commentary on any of the stores already displayed (or added by other users). To hold my user data comments, I used MongoDB Realm. While completing this project, I understood how to use GraphQL APIs, backend and frontend web development, as well as how to implement different APIs.  

### Setup 
To run this project, install it locally using npm. 
```
$ cd ../loremipsum
$ cd crowdburst/client 
$ npm install
$ npm start
```
The server will run on https://localhost/3000




