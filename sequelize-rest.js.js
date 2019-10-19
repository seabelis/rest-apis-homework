const Sequelize = require('sequelize');

//In the JavaScript file, initialize the database connection with Sequelize.
const sequelize = new Sequelize('postgres://postgres:password@localhost:5432/postgres');
const db = new Sequelize(databaseUrl)
const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:secret@localhost:5432/postgres'

// Using Sequelize, define a model called Movie with the following properties (in addition to an ID):

const Movie = sequelize.define('movie', {
  title: {
    type: Sequelize.TEXT
  },
  yearOfRelease: {
    type: Sequelize.NUMBER
  },
  synopsis: {
    type: Sequelize.TEXT
  }
})