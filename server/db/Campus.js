const Sequelize = require('sequelize');
const db = require('./db');

const Campus = db.define('campuses', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        default: '/',
        // validate: {
        //     notEmpty: true
        // }
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    description: {
        type: Sequelize.TEXT
    }

})

module.exports = Campus;