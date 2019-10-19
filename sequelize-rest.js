const Sequelize = require('sequelize');

//In the JavaScript file, initialize the database connection with Sequelize.
const sequelize = new Sequelize('postgres://postgres:secret@localhost:5432/postgres');
const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:secret@localhost:5432/postgres'

// Using Sequelize, define a model called Movie with the following properties (in addition to an ID):

const Movie = sequelize.define('movie', {
  title:  Sequelize.TEXT,
  yearOfRelease: Sequelize.INTEGER,
  synopsis: Sequelize.TEXT
})

//Make sure the model is synched with the database upon startup.
sequelize.sync()

//Use the model create() method to insert 3 rows of example data. This logic should happen after the model synchronization completes. The data should persist. Restarting the API should not cause any data to be lost.
