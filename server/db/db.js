const Sequelize = require('sequelize');
const db = new Sequelize(
    process.env.DB_URL || 'postgres://localhost/students_and_campuses_db ',
    {
        logging: false 
    }
);

module.exports = db;