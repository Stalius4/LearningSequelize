const Director  = require("./table");


exports.addDirector = async (movieObj) => {
  try {
    const newDirector = await Director.create(movieObj);
    console.log(
      `Successfully added ${newDirector.dataValues.directorName} to the database`
    );
  } catch (error) {
    console.log(error);
  }
};

exports.listDirector = async () => {
    try {
        const directors = await Director.findAll();
        // for (let i = 0; i < movies.length; i++){
        //     console.log(movies[i].dataValues.id, movies[i].dataValues.title, movies[i].dataValues.genre)
        // }
        console.log(directors)
    } catch (error) {
      console.log(error);
    }
  };