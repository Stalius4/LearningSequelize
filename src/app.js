const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const {
  addMovie,
  listMovie,
  updateMovie,
  deleteMovie,
} = require("./movie/functions");
const {Movie, Tv} =require("./movie/table")
const { addTv, listTv, updateTv, deleteTv } = require("./movie/functions");
const Director = require("./director/table");
const { addDirector, listDirector } = require("./director/functions");
const app = async (yargsObj) => {
  try {
    

    Director.hasOne(Movie, {
      foreighKey:"directorID"
    })
    Movie.belongsTo(Director)
    await sequelize.sync({alter: true}); // looks for any tables in database and creating if  its not there
    if (yargsObj.movie) {
      if (yargsObj.add) {
        //take movie key value pairs from yargsObj, send them to an add function and return movie.
        await addMovie({ title: yargsObj.title, actor: yargsObj.actor });
      } else if (yargsObj.list) {
        await listMovie();
        //list all movies from database
      } else if (yargsObj.update) {
        await updateMovie(
          { title: yargsObj.title },
          { title: yargsObj.change }
        );
        //take filter and update k/v pairs from yargsObj, send them to update function and return success/failure message
      } else if (yargsObj.delete) {
        //take filter k/v pair from yargsObj and send to delete function, return success/failure message
        await deleteMovie({ title: yargsObj.title });
      } else {
        console.log("Incorrect command");
      }
    } else if (yargsObj.tv) {
      if (yargsObj.add) {
       
        await addTv({ title: yargsObj.title, genre: yargsObj.genre });
      } else if (yargsObj.list) {
        await listTv();
        
      } else if (yargsObj.update) {
        await updateTv({ title: yargsObj.title }, { title: yargsObj.change });
       
      } else if (yargsObj.delete) {
       
        await deleteTv({ title: yargsObj.title });
      } 
      else  {
        console.log("Incorrect command");
      }
    } else if (yargsObj.director){
      if (yargsObj.add){
    await addDirector({directorName:yargsObj.name})
      }
    }
    else if (yargsObj.list) {
      await listDirector();}

  } catch (error) {
    console.log(error);
  }
};

app(yargs.argv);
