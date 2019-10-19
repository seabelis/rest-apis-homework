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
sequelize 
// .sync()
.sync({ force: true })

//Use the model create() method to insert 3 rows of example data. This logic should happen after the model synchronization completes. The data should persist. Restarting the API should not cause any data to be lost.
.then(() => {
  console.log('Database schema has been updated.');
  const movies = [
  { title: 'Citizen Kane', yearOfRelease: 1941, synopsis: "Following the death of a publishing tycoon, news reporters scramble to discover the meaning of his final utterance."},
  {title: 'The Godfather', yearOfRelease: 1972, synopsis: "Francis Ford Coppola''s epic features Marlon Brando in his Oscar-winning role as the patriarch of the Corleone family. Director Coppola paints a chilling portrait of the Sicilian clan''s rise and near fall from power in America, masterfully balancing the story between the Corleone''s family life and the ugly crime business in which they are engaged. Based on Mario Puzo''s best-selling novel and featuring career-making performances by Al Pacino, James Caan and Robert Duvall, this searing and brilliant film garnered ten Academy Award nominations, and won three including Best Picture of 1972. [Paramount Pictures]"},
  {title: 'Rear Window', yearOfRelease: 1954, synopsis: "A wheelchair-bound photographer spies on his neighbours from his apartment window and becomes convinced one of them has committed murder."}
  ]
  const moviePromises = movies.map((movie) => Movie.create(movie))
  return Promise.all(moviePromises)})

//Create an express app with routes that support the following RESTful actions on the "movies" resources.
// create a new movie resource
// read all movies (the collections resource)
// read a single movie resource
// update a single movie resource
// delete a single movie resource