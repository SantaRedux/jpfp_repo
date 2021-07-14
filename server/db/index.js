const Sequelize = require('sequelize');
const db = require('./db');
const Student = require('./Student');
const Campus = require('./Campus');

Student.belongsTo(Campus);
Campus.hasMany(Student);


const syncAndSeed = async() => {
    try {
        await db.sync({ force: true });

        await Student.create({
            firstName: 'Charles',
            lastName: 'Mountbatten',
            email: 'charly@charles.ca',
            imageURL: '///'
        })

        await Campus.create({
            name: 'Scarborough',
            address: '11 Allen Road',
            imageURL: '///'
        })

        console.log("'s locked and seeded ")
    } 
    catch(err) {
        console.log(err)
    }
};

module.exports = {
    db, 
    syncAndSeed,
    models: { Campus, Student }
}
