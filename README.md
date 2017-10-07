Makers BNB
==========
Build a web application that allows users to list spaces they have available, and to hire spaces for the night.

Objectives of exercise
----
Working as a team and learning an entirely new tech stack in a few days.

Technologies used
----
- Javascript
- Node.js
- Express
- MongoDB
- Jade

Tested using:
----
- Zombie.js
- Mocha/Chai

How to Install
-----
- The application:
````
$ git clone https://github.com/diaryofdiscoveries/ezeybnb.git
$ cd ezeybnb
$ npm install
````
- The database:
````
$ brew install mongodb  
$ sudo mkdir -p /data/db  
$ sudo chown -R `id -un` /data/db
````

How to Run
-----
- In one terminal, connect to the database:
````
$ mongod --dbpath /(file path)/ezeybnb/data
````
- In another terminal, run the app:
````
$ cd ezeybnb
$ npm start
````
- You can open the database in another terminal:
````
$ cd ezeybnb
$ mongo
$ use ezeybnbdb
````

How to Run Tests
-----
In one terminal, connect to the database:
````
$ mongod --dbpath /(file path)/ezeybnb/data
````
In another terminal, run tests:
````
$ cd ezeybnb
$ mocha
````

User stories:
-------
```
As a property host,
So that I can rent out a property,
I want to sign up to Makers BnB.

As a property host,
So that I can rent out a property,
I want to publish it online.

As a property host,
So that I can rent out multiple properties,
I want to publish many properties online.

As a property host,
So that I can attract a guest,
I want to publish properties with name, description and price details.

As a property host,
So that I can manage availability for each property,
I want to show availability by date.

As a guest,
So that I can choose a property,
I would like to see a list of properties.

As a property host,
So that my property listings remain on the site,
I would like my listings to be saved.

As a guest,
So that I can stay at a property,
I would like to sign up to Makers BnB.

As a guest,
So that I can stay a night,
I would like to request to rent for the night.

As a property host,
So that I can accept or reject a guest request,
I would like to be able to approve or deny the guest request for the property.

As a property host,
So that I can manage my bookings,
I would like to only offer properties that have not been booked.

As a guest,
So that I can have confidence in my booking,
I would like to only be offered properties that are available.

As a property host,
So that I don’t lose guests,
I would like to keep property available until I have confirmed the booking.

As a property host,
So that I can manage my listings,
I would like to update listing information.
```
Zoë
Rob
James
