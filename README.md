# Description

A simple blog website for sharing your ideas and thoughts with the world.

Check out this [Live Demo](#) to see the website in action.

# Tech Stack

- Front End
   -  HTML, CSS, JavaScript
   -  ReactJS
   -  Axios
- Back End
   -  NodeJS
   -  ExpressJS
- Data Base
   -  MongoDB, Mongoose
   -  Mongo Atlas

# Getting Started

## Prerequisites

- [Node.js](https://nodejs.org/en/) version 10 or newer
- [git](https://git-scm.com/) for your platform

## Installing

### Front End

- Clone this project, for example: `git clone https://github.com/Heikrana/my-blog-website.git`
- `cd` into the project folder `my-blog-website`
- Run `npm install` to install libraries

### Back End

- `cd` into the `backend` folder
- Again, run `npm install` to install back-end libraries

## Running on Localhost

- Run `npm start` in both `my-blog-website` and `backend` (inside my-blog-website) to start frontend (React) and Backend servers
- Open `localhost:3000` in your browser to run the website<br>Note: The API key to my atlas cluster is stored in `.env` file if you want to render the articles, you'll have to create a new `.env` file and store your API key like this `ATLAS_URI=<Your MongoDB connection string>`
