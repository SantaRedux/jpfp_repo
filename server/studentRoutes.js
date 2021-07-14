const router = require('express').Router();
const { models: { Student } } = require('./db');

router.get('/', async (req, res, next) => {
    try {
        const students = await Student.findAll();
        res.send(students);
    } catch (err) {
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const student = await Student.findByPk(req.params.id)
        res.send(student);
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        res.status(201).send(await Student.create(req.body));
    } catch (err) {
        next(err);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const student = await Student.findByPk(req.params.id);
        res.send(await student.update(req.body));
    } catch (err) {
        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const student = await Student.findByPk(req.params.id);
        await student.destroy();
        res.send(student);
    } catch (err) {
        next(err);
    }
});

module.exports = router;