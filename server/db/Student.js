const Sequelize = require('sequelize');
const db = require('./db');

const Student = db.define('students', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        // validate: true
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        // validate: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    imageUrl: { 
        type: Sequelize.STRING,
        defaultValue: '//',
        // validate: {
        //     notEmpty: true
        // }
    },
    gpa: {
        type: Sequelize.FLOAT,
        validate: {
            min: 1,
            max: 4
        }
    }
})

module.exports = Student;