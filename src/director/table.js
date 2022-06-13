const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");

const Director = sequelize.define("Director", {
    directorName: {
        type: DataTypes.STRING,
    },
});

module.exports = Director;