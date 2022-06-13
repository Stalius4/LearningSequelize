
const {Movie, Tv}  = require("./table");


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
        // for (let i = 0; i < users.length; i++){
        //     console.log(users[i].dataValues.title, users[i].dataValues.actor)
        // }
        console.log(users)
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

  exports.deleteMovie = async (movieObj) =>{
    try {  
        await Movie.destroy({
            where: {
              title: movieObj.title
            }
          });
    } catch (error) {
      console.log(error);
    }
}





exports.addTv = async (movieObj) => {
    try {
      const newMovie = await Tv.create(movieObj);
      console.log(
        `Successfully added ${newMovie.dataValues.title} to the database`
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  exports.listTv = async () => {
      try {
          const movies = await Tv.findAll();
          for (let i = 0; i < movies.length; i++){
              console.log(movies[i].dataValues.id, movies[i].dataValues.title, movies[i].dataValues.genre)
          }
      } catch (error) {
        console.log(error);
      }
    };
  
  
    exports.updateTv = async (filterObj, updateObj) =>{
        try {
       const result =  await Tv.update({ title: updateObj.title }, {
              where: {
                title: filterObj.title
              }
          
            })
            console.log(result);
        } catch (error) {
          console.log(error);
        }
    }
  
    exports.deleteTv = async (movieObj) =>{
      try {  
          await Tv.destroy({
              where: {
                title: movieObj.title
              }
            });
      } catch (error) {
        console.log(error);
      }
  }