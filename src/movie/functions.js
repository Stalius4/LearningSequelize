
const Movie = require("./table");

exports.addMovie = async (movieObj) => {
  try {
    const newMovie = await Movie.create(movieObj);
    console.log(
      `Successfully added ${newMovie.dataValues.title} to the database`
    );
  } catch (error) {
    console.log(error);
  }
};

exports.listMovie = async () => {
    try {
        const users = await Movie.findAll();
        for (let i = 0; i < users.length; i++){
            console.log(users[i].dataValues.title, users[i].dataValues.actor)
        }
    } catch (error) {
      console.log(error);
    }
  };


  exports.updateMovie = async (filterObj, updateObj) =>{
      try {
     const result =  await Movie.update({ title: updateObj.title }, {
            where: {
              title: filterObj.title
            }
        
          })
          console.log(result);
      } catch (error) {
        console.log(error);
      }
  }

  exports.deleteMovie = async (filterObj) =>{
    try {  
            await Movie.destroy({ where: filterObj })
    } catch (error) {
      console.log(error);
    }
}