const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const { addMovie, listMovie, updateMovie } = require("./movie/functions");

const app = async (yargsObj) => {
  try {
    await sequelize.sync();
    if (yargsObj.add) {
      //take movie key value pairs from yargsObj, send them to an add function and return movie.
      await addMovie({ title: yargsObj.title, actor: yargsObj.actor });
    } else if (yargsObj.list) {
        await listMovie()
      //list all movies from database
    } else if (yargsObj.update) {
        await updateMovie({title: yargsObj.title}, {title: yargsObj.change})
      //take filter and update k/v pairs from yargsObj, send them to update function and return success/failure message
    } else if (yargsObj.delete) {
      //take filter k/v pair from yargsObj and send to delete function, return success/failure message
      await deleteMovie ()
    } else {
      console.log("Incorrect command");
    }
  } catch (error) {
    console.log(error);
  }
};

app(yargs.argv);