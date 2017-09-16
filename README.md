# YonnBot - Collect URLs/Links in a fun way

## Description
This is a simple project that uses React, Express and Mongo to collects a URL from the user,
processes the URL with Express via [Embedly API](https://embedly.com), persists the data in Mongo
and sends the processed link back to the React client. Sounds fun, check out installation below.

## Requirements

For development, you will only need Node.js installed on your environement.

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v6.11.2

    $ npm --version
    3.10.10


#### Node installation on Linux ( I use Ubuntu )

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---

## Install

    $ git clone https://github.com/markmbirira/yonnbot.git
    $ cd yonnbot
    $ npm install
    $ cd YB-Frontend
    $ npm install

### Configure app

Edit the files in the config folder at the project root.
In your local development environment, export the process.env.NODE_ENV property to "development"
    
    $ export NODE_ENV="development"

In the `config/env` folder, edit the development.js file correct details for

    - MongoDB database URI
    - Application secret key


## Start & watch

    $ npm start

## Update sources

Some packages usages might change so you should run `npm prune` & `npm install` often.
A common way to update is by doing

    $ git pull
    $ npm prune
    $ npm install

To run those 3 commands you can just do

    $ npm run pull

---

## Languages & tools

- [React](http://facebook.github.io/react) is used for UI.
- [Express](https://expressjs.com) used for the REST API
- [MongoDB](https://mongodb.com) a noSQL databse, works well with Express.
- [Mongoose](https://mongoosejs.com) the ODM for MongoDB
